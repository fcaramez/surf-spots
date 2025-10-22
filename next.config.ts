import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.winalist.com",
      },
      {
        protocol: "https",
        hostname: "www.portugal.net",
      },
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
      },
      {
        protocol: "https",
        hostname: "thealgarvefamily.com",
      },
      {
        protocol: "https",
        hostname: "dynamic-media-cdn.tripadvisor.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.sansebastian.travel",
      },
      {
        protocol: "https",
        hostname: "d14fqx6aetz9ka.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "lovenqy.co.uk",
      },
      {
        protocol: "https",
        hostname: "thesurfatlas.com",
      },
      {
        protocol: "https",
        hostname: "visitclare.ie",
      },
    ],
  },
};

export default nextConfig;
