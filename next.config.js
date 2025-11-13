import createMDX from "@next/mdx";

const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
