import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';
import { ChallengesContext } from './contexts/ChallengesContatext';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/diego3g.png" />
      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}</p>
      </div>
    </div>
  )
}