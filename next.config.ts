import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Experimental optimizations
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'three',
      'ogl',
      'lottie-react',
      'lucide-react'
    ],
  },
  
  // Turbopack configuration (stable in Next.js 15)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Tree shaking
    config.optimization = {
      ...config.optimization,
      usedExports: true,
      sideEffects: false,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          animations: {
            test: /[\\/](framer-motion|three|ogl)[\\/]/,
            name: 'animations',
            chunks: 'all',
            priority: 20,
          },
        },
      },
    };

    // Reduce bundle size for production
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // Use lighter versions of libraries
        'three': 'three/examples/jsm/libs/tween.module.js',
      };
    }

    return config;
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    dangerouslyAllowSVG: true,
  },
  
  // Compression
  compress: true,
  
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Redirects for better SEO
  async redirects() {
    return [
      // Add any redirects here if needed
    ];
  },
};

export default nextConfig;
