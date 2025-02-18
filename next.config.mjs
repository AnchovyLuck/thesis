/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '32dsdi2drh.ufs.sh'
      }
    ]
  }
}

export default nextConfig
