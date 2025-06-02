import styles from './title.module.css';

export default function SectionTitle({textContent}){
    return(
        <h2 className={styles.h2}>
            {textContent}
        </h2>
    )
}