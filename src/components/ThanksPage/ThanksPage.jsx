import { Link } from 'react-router-dom'

import styles from './ThanksPage.module.css'

// foto
import Photo from '../../Images/illback.jpg'

const ThanksPage = () => {
    return (
        <div className={styles.container}>
            <h1>Muito Obrigado</h1>
            <div className={styles.bodyThanks}>
                <h2>Obrigado pelo seu contato, logo entrarei em contato.</h2>
                <p>Eu retornarei.</p>
                <hr />
                <img src={Photo} alt="Eu voltarei" />
                <Link to='/'>Voltar para Home</Link>
            </div>
        </div>
    )
}

export default ThanksPage