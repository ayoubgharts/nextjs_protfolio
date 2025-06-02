

import styles from './buttons.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';

export default function LeftNextBtn({onClick}){
    return(
        <button className={styles.leftButton} onClick={onClick}>
            <FontAwesomeIcon icon={faArrowTurnDown} className={styles.iconleft} />
        </button>
    )
}