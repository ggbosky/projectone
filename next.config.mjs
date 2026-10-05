/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the site is built into ./out and served by GitHub Pages
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
