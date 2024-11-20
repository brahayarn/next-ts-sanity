import { ConstructionServiceData } from "./interface";
import { client } from "./sanity";
export const getData = async (): Promise<ConstructionServiceData> => {
  const query = `*[_type == "constructionService"]{
    homePageContent {
      title,
      highlightedCountries
    },
    subtitle,
    contactNumber,
    socialLinks[]{
      name,
      url,
      "image": image.asset->url // Resolves the image URL
    },
    stats[]{
      value,
      label
    }
  }[0]`; // Fetch only the first result

  const data = await client.fetch(query);
  return data as ConstructionServiceData;
};