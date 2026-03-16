/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pages serves from /portfolio sub-path when repo name is "portfolio"
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
