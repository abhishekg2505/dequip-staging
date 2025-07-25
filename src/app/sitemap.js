export default async function sitemap() {
  const baseUrl = "https://www.quantummindspodcast.com/";
  const lastModified = new Date("2024-09-16T05:16:32+00:00");
  const staticMap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-kapil-dhiman`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // const url = `${process.env.BASE_URL}/api/blogs`;
  // const response = await fetch(url);
  // console.log("response" , response)
  // const { data } = await response.json();

  // const blogSiteMaps = data.map((blog) => ({
  //   url: `${baseUrl}/api/blogs/${blog?.attributes?.slug}`,
  //   lastModified: blog?.attributes?.updatedAt,
  // }));

  const siteMaps = [...staticMap, ...[]];
  return siteMaps;
}
