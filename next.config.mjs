// Static export: `npm run build` writes plain HTML/CSS/JS to site/out,
// which Cloudflare Pages serves (free, commercial use allowed).
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));   // this site folder (the Electron app lives one level up)

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  poweredByHeader: false,
  turbopack: { root },
  outputFileTracingRoot: root,
};

export default nextConfig;
