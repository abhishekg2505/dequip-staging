export default function robots() {
  const baseUrl = "https://www.quantummindspodcast.com/";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
