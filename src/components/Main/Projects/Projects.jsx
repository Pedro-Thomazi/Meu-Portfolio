import styles from './Projects.module.css'

// Imagens
import ProjCalc from './Images/foto-calculadora.png'
import ProjCalen from './Images/foto-calendario.png'
import ProjListComp from './Images/foto-lista-compra.png'
import ProjCrud from './Images/foto-crud-users.png'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div className={styles.bodyProjects}>
            <div className={styles.titleParag}>
                <h3>Alguns de seus projetos</h3>
                <p>Como Pedro escolheu seguir o rumo de um programador Front-end, alguns de seus projetos foram listados abaixo. Todos foram desenvolvidos em React.js. Passe o mouse por cima para ver.</p>
            </div>

            <ul className={styles.projectsList}>
                <li className={styles.project}>
                    <header className={styles.headerProject}>
                        <h4>Projeto Calculadora</h4>
                        <hr />
                        <p>Projeto criado capaz de realizar contas como somar, subtrair, multiplicar, dividir, potencializar, porcentagem, raiz quadrada e cúbica, entre outros.</p>
                    </header>
                    <img src={ProjCalc} alt="Projeto Calculadora" />
                    <div className={styles.btnProject}>
                        <br />
                        <Link to='https://calculadora-em-react-ten.vercel.app/' target='_blank'>Ver Projeto</Link>
                        <Link to='https://github.com/Pedro-Thomazi/calculadora-em-React' target='_blank'>Ver Código</Link>
                    </div>
                </li>
                <li className={styles.project}>
                    <header className={styles.headerProject}>
                        <h4>Projeto Calendario</h4>
                        <hr />
                        <p>Projeto criado para aprimorar meus conhecimentos em React.js. Atualmente o projeto só mostra os dias e meses do ano de 2023, mas está sujeito a atualizações.</p>
                    </header>
                    <img src={ProjCalen} alt="Projeto Calendario" />
                    <div className={styles.btnProject}>
                        <br />
                        <Link to='https://projeto-calendario.vercel.app/' target='_blank'>Ver Projeto</Link>
                        <Link to='https://github.com/Pedro-Thomazi/projeto-calendario' target='_blank'>Ver Código</Link>
                    </div>
                </li>
                <li className={styles.project}>
                    <header className={styles.headerProject}>
                        <h4>Projeto Lista de Compras</h4>
                        <hr />
                        <p>Projeto criado para acrescentar, listar e remover mercadorias que o usuário deseja comprar. Sem Back-end. Após acrescentar algo com Nome, Preço e Quantidade, a listagem indica esses três mais o valor total da compra. Ao apertar o F5, zerar-se a lista. Projeto responsivo.</p>
                    </header>
                    <img src={ProjListComp} alt="Projeto Lista de Compras" />
                    <div className={styles.btnProject}>
                        <br />
                        <Link to='https://projeto-lista-de-compras.vercel.app/' target='_blank'>Ver Projeto</Link>
                        <Link to='https://github.com/Pedro-Thomazi/projeto-lista-de-compras' target='_blank'>Ver Código</Link>
                    </div>
                </li>
                <li className={styles.project}>
                    <header className={styles.headerProject}>
                        <h4>Projeto Cadastro de Usuario</h4>
                        <hr />
                        <p>Projeto de criação, edição, listagem e remoção de usuário (CRUD) de uma base de dados. Adicione o nome, idade, email e profição. Não responsivo. Sujeito a atualizações.</p>
                    </header>
                    <img src={ProjCrud} alt="Projeto_Cadastro_de_Usuario" />
                    <div className={styles.btnProject}>
                        <br />
                        <Link to='https://crud-de-usuarios.vercel.app/' target='_blank'>Ver Projeto</Link>
                        <Link to='https://github.com/Pedro-Thomazi/crud-de-usuarios' target='_blank'>Ver Código</Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Projects