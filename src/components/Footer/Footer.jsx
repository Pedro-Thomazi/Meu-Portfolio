import styles from './Footer.module.css'
import ContactForm from '../ContactForm/ContactForm'

const Footer = () => {
  return (
    <footer className={styles.bodyFooter}>
        <p>Para entrar em contato com Pedro, clique no botão e preencha o formulário a seguir.</p>
        <label className={styles.label} htmlFor="myForm">Formulário</label>
        <input className={styles.input} type="checkbox" id="myForm" />
        <div className={styles.myForm}>
          <ContactForm />
        </div>
    </footer>
  )
}

export default Footer