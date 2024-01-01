export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: "https://voting.vercel.app/sitemap.xml",
    host: "https://voting.vercel.app",
  };
}
