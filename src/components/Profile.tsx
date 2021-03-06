import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/52329523?s=400&u=18f988a1b737fc79bbb3af880d42966a0e074ed4&v=4" alt="Ezequiel" />
            <div>
                <strong>Ezequiel Pires</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}</p>
            </div>
        </div>
    )
}