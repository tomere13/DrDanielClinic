import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /**
   * Fix Turbopack inferring the wrong workspace root when multiple lockfiles exist
   * (e.g. a package-lock.json in a parent directory). Without this, module
   * resolution can fail (ex: resolving "tailwindcss" from the wrong root).
   *
   * See: https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
   */
  turbopack: {
    // Use the actual project directory (where `next dev` is invoked).
    root: path.resolve(process.cwd()),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.drdaniel-clinic.com" }],
        destination: "https://drdaniel-clinic.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
