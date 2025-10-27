"use client";

import { useEffect, useRef, useCallback } from "react";

interface ResourceManagementOptions {
  pauseOnHidden?: boolean;
  cleanupOnUnmount?: boolean;
  maxConcurrentAnimations?: number;
}

interface NetworkInformation {
  effectiveType?: string;
  downlink?: number;
  addEventListener?: (event: string, handler: () => void) => void;
  removeEventListener?: (event: string, handler: () => void) => void;
}

export function useResourceManagement(options: ResourceManagementOptions = {}) {
  const {
    pauseOnHidden = true,
    cleanupOnUnmount = true,
    maxConcurrentAnimations = 4,
  } = options;

  const activeAnimations = useRef<Set<string>>(new Set());
  const isPaused = useRef(false);
  const cleanupFunctions = useRef<Array<() => void>>([]);

  // 🔹 Handle visibility change
  useEffect(() => {
    if (!pauseOnHidden) return;

    const handleVisibilityChange = () => {
      isPaused.current = document.hidden;

      const animatedElements = document.querySelectorAll("[data-animation]");
      animatedElements.forEach((el) => {
        const element = el as HTMLElement;
        const videos = element.querySelectorAll("video");

        if (isPaused.current) {
          element.style.animationPlayState = "paused";
          videos.forEach((video) => !video.paused && video.pause());
        } else {
          element.style.animationPlayState = "running";
          videos.forEach((video) => {
            if (video.paused && video.hasAttribute("data-autoplay")) {
              video.play().catch(() => {});
            }
          });
        }
      });

      // Pause/resume canvas
      const canvasElements = document.querySelectorAll("canvas");
      canvasElements.forEach((canvas) => {
        const animationId = canvas.getAttribute("data-animation-id");
        if (animationId) {
          if (isPaused.current) canvas.setAttribute("data-paused", "true");
          else canvas.removeAttribute("data-paused");
        }
      });
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pauseOnHidden]);

  // 🔹 Memory management
  useEffect(() => {
    const handleMemoryPressure = () => {
      const perf = performance as Performance & {
        memory?: {
          usedJSHeapSize: number;
          jsHeapSizeLimit: number;
        };
      };

      if (perf.memory) {
        const usedMemory = perf.memory.usedJSHeapSize / perf.memory.jsHeapSizeLimit;

        if (usedMemory > 0.8) {
          document.documentElement.style.setProperty("--animation-quality", "low");
          document.querySelectorAll('[data-animation-priority="low"]').forEach((el) => {
            (el as HTMLElement).style.display = "none";
          });
        } else {
          document.documentElement.style.setProperty("--animation-quality", "high");
          document.querySelectorAll('[data-animation-priority="low"]').forEach((el) => {
            (el as HTMLElement).style.display = "";
          });
        }
      }
    };

    const interval = setInterval(handleMemoryPressure, 5000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Network status management
  useEffect(() => {
    const handleConnectionChange = () => {
      const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;

      const isSlowConnection =
        connection?.effectiveType?.includes("2g") ||
        connection?.effectiveType?.includes("3g") ||
        (connection?.downlink !== undefined && connection.downlink < 1.5);

      document.documentElement.style.setProperty(
        "--reduce-motion",
        isSlowConnection ? "reduce" : "no-preference"
      );
    };

    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    connection?.addEventListener?.("change", handleConnectionChange);
    handleConnectionChange(); // initial check

    return () => {
      connection?.removeEventListener?.("change", handleConnectionChange);
    };
  }, []);

  // 🔹 Animation registration
  const registerAnimation = useCallback(
    (id: string, priority: "high" | "medium" | "low" = "medium") => {
      if (isPaused.current) return false;

      if (activeAnimations.current.size >= maxConcurrentAnimations) {
        const lowestPriority = Array.from(activeAnimations.current).find((animId) => {
          const element = document.querySelector(`[data-animation-id="${animId}"]`);
          return element?.getAttribute("data-animation-priority") === "low";
        });

        if (lowestPriority && priority !== "low") {
          activeAnimations.current.delete(lowestPriority);
          const element = document.querySelector(`[data-animation-id="${lowestPriority}"]`);
          if (element) (element as HTMLElement).style.display = "none";
        } else {
          return false;
        }
      }

      activeAnimations.current.add(id);
      return true;
    },
    [maxConcurrentAnimations]
  );

  const unregisterAnimation = useCallback((id: string) => {
    activeAnimations.current.delete(id);
  }, []);

  const addCleanupFunction = useCallback((cleanup: () => void) => {
    cleanupFunctions.current.push(cleanup);
  }, []);

  const cleanup = useCallback(() => {
    cleanupFunctions.current.forEach((cleanup) => {
      try {
        cleanup();
      } catch (err) {
        console.warn("Cleanup function failed:", err);
      }
    });
    cleanupFunctions.current = [];
    activeAnimations.current.clear();
    document.documentElement.style.removeProperty("--animation-quality");
    document.documentElement.style.removeProperty("--reduce-motion");
  }, []);

  useEffect(() => {
    if (cleanupOnUnmount) {
      return cleanup;
    }
  }, [cleanup, cleanupOnUnmount]);

  return {
    registerAnimation,
    unregisterAnimation,
    addCleanupFunction,
    cleanup,
    isPaused: () => isPaused.current,
    activeAnimationCount: () => activeAnimations.current.size,
  };
}

// 🔹 Hook: Image Optimization
export function useImageOptimization() {
  const loadOptimizedImage = useCallback(
    (
      src: string,
      options: {
        width?: number;
        height?: number;
        quality?: number;
        format?: "webp" | "avif" | "auto";
      } = {}
    ) => {
      const { width, height, quality = 80, format = "auto" } = options;
      let optimizedSrc = src;

      const params = new URLSearchParams();
      if (width) params.set("w", width.toString());
      if (height) params.set("h", height.toString());
      if (quality !== 80) params.set("q", quality.toString());
      if (format !== "auto") params.set("f", format);

      const separator = src.includes("?") ? "&" : "?";
      optimizedSrc = `${src}${separator}${params.toString()}`;
      return optimizedSrc;
    },
    []
  );

  const preloadImage = useCallback((src: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }, []);

  return { loadOptimizedImage, preloadImage };
}

// 🔹 Hook: Video Optimization
export function useVideoOptimization() {
  const optimizeVideoSettings = useCallback((videoElement: HTMLVideoElement) => {
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;

    const isSlowConnection =
      connection?.effectiveType?.includes("2g") ||
      connection?.effectiveType?.includes("3g") ||
      (connection?.downlink !== undefined && connection.downlink < 1.5);

    const isLowEndDevice =
      navigator.hardwareConcurrency < 4 ||
      ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4) < 4;

    if (isSlowConnection || isLowEndDevice) {
      videoElement.style.filter = "contrast(0.9) brightness(0.95)";
      if (videoElement.videoWidth > 1280) {
        videoElement.style.width = "1280px";
        videoElement.style.height = "auto";
      }
    }

    videoElement.preload = "metadata";
    videoElement.muted = true;
    videoElement.playsInline = true;
  }, []);

  return { optimizeVideoSettings };
}
