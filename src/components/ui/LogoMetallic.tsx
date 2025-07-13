"use client";

import { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './MetallicPaint/MetallicPaint';

const LogoMetallic = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    async function loadDefaultImage() {
      try {
        // Fetch logo dari public folder
        const response = await fetch('/logo.svg');
        const blob = await response.blob();
        const file = new File([blob], "logo.svg", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);

      } catch (err) {
        console.error("Error loading default image:", err);
      }
    }

    loadDefaultImage();
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className='w-12 h-12 lg:w-16 lg:h-16 z-10'>
      {imageData && (
        <MetallicPaint
          imageData={imageData}
          params={{
            edge: 0.1,         // Kurangi untuk detail yang lebih halus
            patternBlur: 0.005, // Kurangi blur untuk ketajaman
            patternScale: 1.5,  // Sesuaikan scale
            refraction: 0.015,   // Kurangi refraction untuk logo yang jelas
            speed: 0.2,         // Kecepatan lebih lambat
            liquid: 0.1 
          }}
        />
      )}
    </div>
  );
};

export default LogoMetallic;