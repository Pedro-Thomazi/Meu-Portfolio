import Footer from '../Footer/Footer'
import styles from './Main.module.css'
import Projects from './Projects/Projects'

import MyPhoto from '../../Images/minhaFoto.png'
import SecondPhoto from '../../Images/foto2.webp'

import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <main className={styles.bodyMain}>
            <h2>O NASCIMENTO DE UM NOVO PROGRAMADOR</h2>
            <hr />
            <section className={styles.textMain}>
                <div className={styles.firstText}>
                    <h3>Quem é esse novo programador?</h3>
                    <div>
                        <img className={styles.myPhoto} src={MyPhoto} alt="Foto do Pedro" />
                        <p>Em São Paulo, no ano de 2002, nasce um novo programador. Seu nome é:</p>
                        <h1 className={styles.myName}>Pedro Thomazi Viannini</h1>
                        <p>Desde pequeno sempre esteve perto de um computador, pois praticamente todos em sua casa tem o trabalho voltado a tecnologia, sendo assim, desde cedo já conseguia usar o YouTube para pesquisar tudo sobre seus desenhos e brinquedos favoritos. Mas demorou muito tempo até ele descobrir que queria seguir a vida de um programdor Front-End.</p>
                        <span className={styles.myKnowledge}>
                            <Link to='https://github.com/pedro-thomazi' target='blank'><i className="fa-brands fa-github" style={{ color: '#1f1f1f' }}></i></Link>
                            <Link to='https://www.linkedin.com/in/pedro-thomazi-viannini/' target='blank'><i class="fa-brands fa-linkedin" style={{ color: '#1f1f1f' }}></i></Link>
                            <i className="fa-brands fa-html5" style={{ color: '#1f1f1f' }}></i>
                            <i className="fa-brands fa-css3-alt" style={{ color: '#1f1f1f' }}></i>
                            <i className="fa-brands fa-square-js" style={{ color: '#1f1f1f' }}></i>
                            <i className="fa-brands fa-react" style={{ color: '#1f1f1f' }}></i>
                            <i className="fa-brands fa-python" style={{ color: '#1f1f1f' }}></i>
                        </span>
                    </div>

                </div>
                <div className={styles.secondText}>
                    <h3>Por que ele escolheu ser programador Front-end?</h3>
                    <div>
                        <p>Em 2019, Pedro, decidiu aprender sua primeira linguagem de programação, <strong>Python</strong>. Assistindo às aulas pelo seu tablet e codando pelo celular, Pedro, conseguiu completar 3 cursos, sendo eles:
                            <ul>
                                <li><a href="https://www.cursoemvideo.com/curso/python-3-mundo-1/" target='blank'>Curso de Python 3 - Mundo 1</a></li>
                                <li><a href="https://www.cursoemvideo.com/curso/python-3-mundo-2/" target='blank'>Curso de Python 3 - Mundo 2</a></li>
                                <li><a href="https://www.cursoemvideo.com/curso/python-3-mundo-3/" target='blank'>Curso de Python 3 - Mundo 3</a></li>
                            </ul>
                            todos do professor Gustavo Guanabara (Curso em Vídeo).</p>
                        <img className={styles.mySecondPhoto} src={SecondPhoto} alt="Foto de códigos" />
                    </div>
                    <img className={styles.mySecondPhoto2} src={SecondPhoto} alt="Foto de códigos" />
                    <p>Mas ao perceber que o curso não tinha mais continuação, Pedro, acabou desanimando da programação, ficando um bom tempo sem praticar. Ao passar do tempo seu irmão comprou um notebook novo, foi ai que ele viu uma oportunidade de retomar seu estudos de programação, tendo o contato com o <strong>HTML</strong> e <strong>CSS</strong> nos cursos:
                        <ul>
                            <li><a href="https://www.cursoemvideo.com/curso/html5-css3-modulo1/" target='blank'>Curso de HTML5 e CSS3 - Módulo 1 de 5</a></li>
                            <li><a href="https://www.cursoemvideo.com/curso/curso-html5-e-css3-modulo-2-de-5-40-horas/" target='blank'>Curso de HTML5 e CSS3 - Módulo 2 de 5</a></li>
                            <li><a href="https://www.cursoemvideo.com/curso/curso-html5-e-css3-modulo-3-de-5-40-horas/" target='blank'>Curso de HTML5 e CSS3 - Módulo 3 de 5</a></li>
                            <li><a href="https://www.cursoemvideo.com/curso/curso-html5-e-css3-modulo-4-de-5-40-horas/" target='blank'>Curso de HTML5 e CSS3 - Módulo 4 de 5</a></li>
                        </ul>
                        tambêm do professor Gustavo Guanabara (Curso em Vídeo).</p>
                    <p>Depois de um bom tempo fazendo cursos de HTML e CSS ele teve a ideia de começar a prender <strong>JavaScript</strong>, já que tinha escutado muito sobre. O curso escolhido da então nova linguagem foi:
                        <ul>
                            <li><a href="https://www.cursoemvideo.com/curso/javascript/" target='blank'>Curso Grátis de JavaScript e ECMAScript para Iniciantes</a></li>
                        </ul>
                        outro do professor Gustavo Guanabara (Curso em Vídeo).
                    </p>
                    <p>Foi somente em janeiro de 2022 que Pedro decidiu que queria ser um programador, desde então não parou de fazer cursos, como:
                        <ul>
                            <li><a href="https://www.udemy.com/course/curso-web/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Webindex_Catchall_la.PT_cc.BR&utm_term=_._ag_114148736799_._ad_485704569539_._de_c_._dm__._pl__._ti_dsa-510684693277_._li_1001773_._pd__._&gclid=Cj0KCQjwqNqkBhDlARIsAFaxvwwwc6NJYlEy5m0VMEexDIz2zzirfvqFxmT-YHsogc6FljAnvcBUKesaAg7JEALw_wcB" target='blank'>Curso Web Moderno Completo com JavaScript 2022 + Projetos</a></li>
                            <li><a href="https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/" target='blank'>React do Zero a Maestria (c/ hooks, router, API, Projetos)</a></li>
                            <li><a href="https://www.cursoemvideo.com/curso/excell/" target='blank'>Curso de Excel 2016 Essencial</a></li>
                            <li><a href="https://www.udemy.com/course/python-3-do-zero-ao-avancado/?kw=Curso+de+Python+3+do+B%C3%A1sico+Ao+Avan%C3%A7ado+%28com+projetos+reais%29&src=sac" target='blank'>Curso de Python 3 do Básico Ao Avançado (com projetos reais)</a></li>
                            <li><a href="https://www.youtube.com/playlist?list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft" target='blank'>Curso de Next.js</a></li>
                        </ul>
                    </p>
                </div>
            </section>
            <Projects />
            <Footer />
        </main>
    )
}

export default Main