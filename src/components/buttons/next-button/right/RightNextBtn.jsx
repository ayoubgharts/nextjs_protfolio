

import styles from './buttons.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';

export default function RightNextBtn({onClick}){
    return(
        <button className={styles.leftButton} onClick={onClick}>
            <FontAwesomeIcon icon={faArrowTurnUp} className={styles.iconright} />
        </button>
    )
}