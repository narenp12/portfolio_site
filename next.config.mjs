/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/blog/:path*", // Match everything under /blog
          destination: "http://blog.naren-p.com/:path*", // Proxy to Netlify
        },
      ];
    },
  };
  
  export default nextConfig;  