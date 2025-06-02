
import styles from './title.module.css';

export default function SkillTitle({textContent}){
    return(
        <h4 className={styles.skilltitle}>
            {textContent}
        </h4>
    )
}