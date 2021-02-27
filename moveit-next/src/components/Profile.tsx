import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';
import { ChallengesContext } from './contexts/ChallengesContatext';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/62193880?s=460&u=51428ad445147de7b2800b64acaaa85e1ca810b8&v=4" />
      <div>
        <strong>Isaac Moura</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}</p>
      </div>
    </div>
  )
}