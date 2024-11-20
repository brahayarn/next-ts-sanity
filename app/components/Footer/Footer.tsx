import { client } from '../../lib/sanity';
import { ConstructionServiceData } from '../../lib/interface';
import styles from './Footer.module.css'; // Імпортуємо стилі

// Fetching hero data
async function getHeroData() {
  const query = `*[_type == "constructionService"]{
    homePageContent {
      title,
      highlightedCountries
    },
    subtitle,
    contactNumber,
    socialLinks[] {
      name,
      url,
      image
    },
    stats[] {
      value,
      label
    }
  }`;

  const data = await client.fetch(query);
  return data;
}

// Hero Component
export default async function Footer() {
  const data: ConstructionServiceData[] = await getHeroData();

  // Safely access the first item in the data
  const heroContent = data?.[0];

  return (
    <div>
      {/* Stats */}
      <ul className={styles.stats}>
        {heroContent?.stats?.map((stat) => (
          <li key={stat.label} className={styles.statItem}>
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.label}>{stat.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
