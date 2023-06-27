import styles from './ContactForm.module.css'

const ContactForm = () => {
    return (
        <form className={styles.bodyForm}
            action="https://formsubmit.co/e06929d63f8bbc97446d38d92597e1cc"
            method="POST">
            <label htmlFor="name">
                <span>Nome:</span>
                <input type="text"
                    name='name'
                    placeholder='Digite seu nome...'
                    required
                    id='name' />
            </label>
            <label htmlFor="email">
                <span>E-mail:</span>
                <input type="email"
                    name='email'
                    placeholder='Digite seu email...'
                    required
                    id='email' />
            </label>
            <label htmlFor="message">
                <span>Mensagem:</span>
                <textarea type="text"
                    name='message'
                    placeholder='Digite sua mensagem...'
                    required
                    id='message'>
                </textarea>
            </label>

            <input type="hidden" name="_next" value="https://meu-portfolio-delta-eight.vercel.app/obrigado-pelo-contato"></input>
            <input type="submit" value='Enviar' />
        </form>
    )
}

export default ContactForm
