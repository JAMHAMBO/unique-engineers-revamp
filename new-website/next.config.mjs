/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/iis6954.asp", destination: "/", permanent: true },
      { source: "/Default.asp", destination: "/", permanent: true },
      { source: "/Default.aspx", destination: "/", permanent: true },
      { source: "/index.asp", destination: "/", permanent: true },
      { source: "/about_us.asp", destination: "/about", permanent: true },
      { source: "/services.asp", destination: "/services", permanent: true },
      { source: "/gallery.asp", destination: "/gallery", permanent: true },
      { source: "/clients.asp", destination: "/clients", permanent: true },
      { source: "/team.asp", destination: "/team", permanent: true },
      { source: "/team2.asp", destination: "/team", permanent: true },
      { source: "/safety.asp", destination: "/safety", permanent: true },
      { source: "/career.asp", destination: "/careers", permanent: true },
      { source: "/Career.asp", destination: "/careers", permanent: true },
      { source: "/news.asp", destination: "/projects", permanent: true },
      { source: "/contact_us.asp", destination: "/contact", permanent: true },
      { source: "/privacy_policy.asp", destination: "/privacy-policy", permanent: true },
      { source: "/terms_condition.asp", destination: "/terms-of-use", permanent: true },
      { source: "/ms_structure.asp", destination: "/services/ms-structures", permanent: true },
      { source: "/ducting.asp", destination: "/services/ducting", permanent: true },
      { source: "/platforms.asp", destination: "/services/platforms-and-under-guards", permanent: true },
      { source: "/maintanance.asp", destination: "/services/plant-maintenance", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;

