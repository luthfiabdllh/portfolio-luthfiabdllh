"use client";

import { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './MetallicPaint/MetallicPaint';

const LogoMetallic = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    async function loadDefaultImage() {
      setIsLoading(true);
      setError(null);
      
      try {
        // Fetch logo dari public folder dengan absolute path
        const response = await fetch(`${window.location.origin}/logo.svg`, {
          mode: 'cors',
          cache: 'no-cache'
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch logo: ${response.status} ${response.statusText}`);
        }
        
        const blob = await response.blob();
        const file = new File([blob], "logo.svg", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
        setIsLoading(false);

      } catch (err) {
        console.error("Error loading default image:", err);
        // Fallback: coba dengan path yang berbeda jika fetch gagal
        try {
          const alternativePaths = ['/logo.svg', './logo.svg', '../public/logo.svg'];
          let success = false;
          
          for (const path of alternativePaths) {
            try {
              const altResponse = await fetch(path, { mode: 'cors' });
              if (altResponse.ok) {
                const blob = await altResponse.blob();
                const file = new File([blob], "logo.svg", { type: blob.type });
                const parsedData = await parseLogoImage(file);
                setImageData(parsedData?.imageData ?? null);
                success = true;
                setIsLoading(false);
                break;
              }
            } catch (pathErr) {
              console.warn(`Failed to fetch from ${path}:`, pathErr);
            }
          }
          
          if (!success) {
            throw new Error("All alternative paths failed");
          }
        } catch (fallbackErr) {
          console.error("All fetch attempts failed:", fallbackErr);
          setError("Failed to load logo");
          // Set fallback image data jika semua metode gagal
          createFallbackImage();
        }
      }
    }

    // Fallback function untuk membuat image data sederhana
    function createFallbackImage() {
      const canvas = document.createElement('canvas');
      canvas.width = 500;
      canvas.height = 500;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        // Buat logo fallback sederhana
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 200px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('A', 250, 250);
        
        const imageData = ctx.getImageData(0, 0, 500, 500);
        setImageData(imageData);
        setIsLoading(false);
      }
    }

    loadDefaultImage();
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className='w-12 h-12 lg:w-16 lg:h-16 z-10 relative'>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded">
          <span className="text-xs text-gray-500">Logo</span>
        </div>
      )}
      
      {imageData && !isLoading && (
        <MetallicPaint
          imageData={imageData}
          params={{
            edge: 0.1,
            patternBlur: 0.005,
            patternScale: 1.5,
            refraction: 0.015,
            speed: 0.2,
            liquid: 0.1
          }}
        />
      )}
    </div>
  );
};

export default LogoMetallic;