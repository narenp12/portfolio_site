/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/blog/:path*", // Match everything under /blog
          destination: "https://narenblog.netlify.app/:path*", // Proxy to Netlify
        },
      ];
    },
  };
  
  export default nextConfig;  