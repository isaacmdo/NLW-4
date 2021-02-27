import { useContext } from 'react'
import styles from '../styles/components/CompletedChallanges.module.css'
import { ChallengesContext } from './contexts/ChallengesContatext'

export function CompletedChallanges() {

  const { challengesCompleted } = useContext(ChallengesContext)

  return ( 
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}