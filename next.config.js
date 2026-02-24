import createMDX from "@next/mdx";

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [60, 70, 75, 80],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    minimumCacheTTL: 60,
    unoptimized: false,
  },
  // Add cache headers for static assets including letter images
  async headers() {
    return [
      {
        source: '/letters/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  options: {},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
