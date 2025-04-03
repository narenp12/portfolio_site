/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/blog", // Remove the hash (#)
          destination: "https://narenblog.netlify.app",
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  