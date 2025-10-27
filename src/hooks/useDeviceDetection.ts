"use client";

import { useState, useEffect } from "react";

// Tambahkan definisi type NetworkInformation agar kompatibel di semua browser
interface NetworkInformation {
  effectiveType?: string;
  downlink?: number;
  addEventListener?: (event: string, handler: () => void) => void;
  removeEventListener?: (event: string, handler: () => void) => void;
}

interface DeviceCapabilities {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLowEndDevice: boolean;
  isSlowConnection: boolean;
  prefersReducedMotion: boolean;
  supportsWebGL: boolean;
  hardwareConcurrency: number;
  deviceMemory: number;
}

export function useDeviceDetection(): DeviceCapabilities {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isLowEndDevice: false,
    isSlowConnection: false,
    prefersReducedMotion: false,
    supportsWebGL: true,
    hardwareConcurrency: 4,
    deviceMemory: 4,
  });

  useEffect(() => {
    // Pastikan kode hanya berjalan di client-side
    if (typeof window === 'undefined') return;

    const detectCapabilities = () => {
      // 1️⃣ Deteksi jenis perangkat
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isTablet = /ipad|android(?!.*mobile)/i.test(userAgent);
      const isDesktop = !isMobile && !isTablet;

      // 2️⃣ Deteksi kemampuan hardware
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;
      const isLowEndDevice = hardwareConcurrency < 4 || deviceMemory < 4;

      // 3️⃣ Deteksi kecepatan koneksi (fallback Safari: dianggap tidak lambat)
      const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
      const isSlowConnection =
        connection?.effectiveType?.includes("2g") ||
        connection?.effectiveType?.includes("3g") ||
        (connection?.downlink !== undefined && connection.downlink < 1.5) ||
        false; // fallback

      // 4️⃣ Deteksi preferensi motion
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // 5️⃣ Deteksi dukungan WebGL dengan pengecekan document
      let supportsWebGL = true;
      try {
        if (typeof document !== 'undefined') {
          const canvas = document.createElement("canvas");
          const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
          supportsWebGL = !!gl;
        }
      } catch {
        supportsWebGL = false;
      }

      setCapabilities({
        isMobile,
        isTablet,
        isDesktop,
        isLowEndDevice,
        isSlowConnection,
        prefersReducedMotion,
        supportsWebGL,
        hardwareConcurrency,
        deviceMemory,
      });
    };

    detectCapabilities();

    // 6️⃣ Pantau perubahan koneksi jika didukung
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const handleConnectionChange = () => detectCapabilities();

    connection?.addEventListener?.("change", handleConnectionChange);

    // 7️⃣ Cleanup listener saat unmount
    return () => {
      connection?.removeEventListener?.("change", handleConnectionChange);
    };
  }, []);

  return capabilities;
}

// Hook tambahan untuk deteksi motion preferences
export function useReducedMotion() {
  const capabilities = useDeviceDetection();

  return {
    shouldReduce:
      capabilities.prefersReducedMotion ||
      capabilities.isLowEndDevice ||
      capabilities.isSlowConnection,
    ...capabilities,
  };
}
