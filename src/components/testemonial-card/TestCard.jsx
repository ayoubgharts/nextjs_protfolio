import Image from "next/image";

//css
import styles from "./card.module.css";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faStar } from "@fortawesome/free-solid-svg-icons";

//components
import LinkButton from "../buttons/link-button/LinkButton";

export default function TestCard({ url, image, name, country, text, stars, price }) {
  return (
    <div className={styles.TestCard}>
      <div className="card-top">
        <div className={styles.profile}>
          <Image
            className={styles.avatar}
            src={image}
            alt={name}
            width={60}
            height={60}
          />
          <div className={styles.profileDetails}>
            <h3>{name}</h3>
            <p>
              <FontAwesomeIcon icon={faGlobe} /> {country}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <p>
          {text}
        </p>
      </div>
      <div className={styles.cardFooter}>
        <h5 className={styles.price}>
            Price: <span>{price}</span>
        </h5>
        <div className={styles.rating}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} />
            </li>
            <li>
              <FontAwesomeIcon 
              icon={faStar}
              className={stars === '5' ? `` : `${styles.rateGray}`}
              />
            </li>
          </ul>
        </div>
      </div>
      <LinkButton />
    </div>
  );
}
