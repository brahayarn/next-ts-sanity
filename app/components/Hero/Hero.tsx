import { client, urlFor } from '../../lib/sanity';
import { ConstructionServiceData } from '../../lib/interface';
import Image from 'next/image';
import styles from './Hero.module.css'; // Імпортуємо стилі
import worker from '../../../public/worker.png'; 
import stars from '../../../public/stars.png'; 
import elips from '../../../public/elips.png';
import elips1 from '../../../public/elips1.png'; 
import elips2 from '../../../public/elips2.png';

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
export default async function Hero() {
  const data: ConstructionServiceData[] = await getHeroData();

  // Safely access the first item
  const heroContent = data?.[0];

  // Destructure highlightedCountries directly from the heroContent object
  const highlightedCountries = heroContent?.homePageContent?.highlightedCountries || [];
  
  // Join the countries with '&' (but don't join them yet)
  const [country1, country2] = highlightedCountries;

  return (
    <div className={styles.container}>
      {/* Left Content */}
      <div className={styles.leftContent}>
        {/* Social Links */}
        <ul className={styles.socialLinks}>
          {heroContent?.socialLinks?.map((link) => (
            <li key={link.name}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={urlFor(link.image).url()}
                  alt={link.name}
                  width={34}
                  height={34}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Title */}
        <h1 className={styles.title}>
          
          {heroContent?.homePageContent?.title}{' '}
          <span>in </span>
          <span className={styles.red}>{country1}</span>
          <span className={styles.black}>&amp;</span>
          <span className={styles.red}>{country2}</span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>{heroContent?.subtitle}</p>

         {/* Buttons */}
         <div className={styles.buttons}>
          <a href="#" className={`${styles.buttonh}`}>More Details</a>
          <a href="#" className={`${styles.button} ${styles.primary}`}>Book An Appointment</a>
        </div>

        {/* Contact */}
        <p className={styles.contact}>
          <p>Let’s Talk: </p>
          <a href={`tel:${heroContent?.contactNumber}`}>
            {heroContent?.contactNumber}
          </a>
        </p>
        

      </div>
        
      {/* Right Content */}
      <div className={styles.rightContent}>
        <Image
          className={styles.worker}
          src={worker}
          alt="Hero Image"
          width={897}
          height={897}
        />
        <Image
          className={styles.stars}
          src={stars}
          alt="Stars image"
          width={758}
          height={253}
        />
        <Image
          className={styles.elips}
          src={elips}
          alt="Stars image"
          width={758}
          height={253}
        />
        <Image
          className={styles.elips1}
          src={elips1}
          alt="Stars image"
          width={758}
          height={253}
        />
        <Image
          className={styles.elips2}
          src={elips2}
          alt="Stars image"
          width={758}
          height={253}
        />
      </div>
    </div>
  );
}
