import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <h1 className={styles.pricipalTitle}>Jornal do Portfólio</h1>
        <hr />
    </header>
  )
}

export default Header