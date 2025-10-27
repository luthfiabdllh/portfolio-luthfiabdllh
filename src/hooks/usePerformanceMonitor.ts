"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from './useDeviceDetection';

interface PerformanceMetrics {
  fps: number;
  shouldReduceQuality: boolean;
  averageFps: number;
  frameDrops: number;
}

export function usePerformanceMonitor(threshold: number = 30): PerformanceMetrics {
  const [fps, setFps] = useState(60);
  const [shouldReduceQuality, setShouldReduceQuality] = useState(false);
  const [averageFps, setAverageFps] = useState(60);
  const [frameDrops, setFrameDrops] = useState(0);
  
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const fpsHistory = useRef<number[]>([]);
  const animationFrameId = useRef<number | undefined>(undefined);
  const isMonitoring = useRef(false);

  const measureFPS = useCallback(() => {
    if (!isMonitoring.current) return;
    
    frameCount.current++;
    const currentTime = performance.now();
    
    if (currentTime >= lastTime.current + 1000) {
      const currentFps = Math.round((frameCount.current * 1000) / (currentTime - lastTime.current));
      
      // Update FPS history
      fpsHistory.current.push(currentFps);
      if (fpsHistory.current.length > 10) {
        fpsHistory.current.shift();
      }
      
      // Calculate average FPS
      const avgFps = Math.round(
        fpsHistory.current.reduce((a, b) => a + b, 0) / fpsHistory.current.length
      );
      
      setFps(currentFps);
      setAverageFps(avgFps);
      
      // Detect frame drops
      if (currentFps < threshold) {
        setFrameDrops(prev => prev + 1);
      }
      
      // Adjust quality based on performance
      if (currentFps < threshold) {
        setShouldReduceQuality(true);
      } else if (currentFps > 50 && avgFps > 45) {
        setShouldReduceQuality(false);
      }
      
      frameCount.current = 0;
      lastTime.current = currentTime;
    }
    
    animationFrameId.current = requestAnimationFrame(measureFPS);
  }, [threshold]);

  const startMonitoring = useCallback(() => {
    if (!isMonitoring.current) {
      isMonitoring.current = true;
      frameCount.current = 0;
      lastTime.current = performance.now();
      fpsHistory.current = [];
      animationFrameId.current = requestAnimationFrame(measureFPS);
    }
  }, [measureFPS]);

  const stopMonitoring = useCallback(() => {
    isMonitoring.current = false;
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
  }, []);

  useEffect(() => {
    // Start monitoring when component mounts
    startMonitoring();
    
    // Pause monitoring when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopMonitoring();
      } else {
        startMonitoring();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      stopMonitoring();
    };
  }, [startMonitoring, stopMonitoring]);

  return {
    fps,
    shouldReduceQuality,
    averageFps,
    frameDrops,
  };
}

// Hook untuk adaptive animation settings
export function useAdaptiveAnimation() {
  const performance = usePerformanceMonitor();
  const { shouldReduce: deviceShouldReduce } = useReducedMotion();
  
  return {
    // Animation settings based on performance
    animationDuration: performance.shouldReduceQuality ? 0.2 : 0.5,
    staggerDelay: performance.shouldReduceQuality ? 0.05 : 0.1,
    shouldUseReducedMotion: deviceShouldReduce || performance.shouldReduceQuality,
    maxConcurrentAnimations: performance.shouldReduceQuality ? 2 : 4,
    frameSkip: performance.shouldReduceQuality ? 2 : 1,
    
    // Performance metrics
    ...performance,
  };
}
