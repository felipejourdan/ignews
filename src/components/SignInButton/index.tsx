import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const isUserLogedIn = true

  return isUserLogedIn ? (
    <button type="button" className={styles.sigInButton}>
      <FaGithub color="#04d361" />
      felipejourdan
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.sigInButton}>
      <FaGithub color="EBA417" />
      Sign in with GitHub
    </button>
  )
}
