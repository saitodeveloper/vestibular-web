import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

function LandingPageComponent() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <header>
                <img src="/img/logo.png" />
                <nav>
                    <Link to="/ ">Principal</Link>
                    <Link to="/about">Sobre</Link>
                    <Link to="/user/register">Registrar</Link>
                    <Link to="/user/login">Logar</Link>
                </nav>
            </header>
            <main className={styles.LandingPageContent}>
                <section className={styles.Headline}>
                    <article>
                        <div className={styles.Texts}>
                            <h1>Transforme seu Potencial em Excelência</h1>
                            <h2>
                                Acompanhamento Personalizado para Alunos do
                                Ensino Médio Rumo ao Sucesso no Vestibular!
                            </h2>
                            <button>Comece Já!</button>
                            <button>Cadastrar</button>
                        </div>
                    </article>
                    <div className={styles.OutdoorImg}>
                        <img src="/img/bg.jpg" />
                    </div>
                </section>
                <section className={styles.Features}>
                    <img src="/img/trophy.svg" />
                    <h2>Bem-vindo à Vogarify</h2>
                    <h3>
                        Aqui a sua jornada do ensino médio se transforma em uma
                        trajetória de sucesso no vestibular!
                    </h3>
                    <ul className={styles.FeatureList}>
                        <li className={styles.Feature}>
                            <article>
                                <i className="fa-solid fa-bullseye" />
                                <h4>Conquiste Seu Melhor Desempenho</h4>
                                <p>
                                    Nosso objetivo é fazer com que os alunos
                                    alcancem resultados extraordinários. Seja
                                    você um aluno com desempenho ruim buscando a
                                    excelência ou alguém já com bom desempenho
                                    aspirando à perfeição, nossa plataforma é
                                    seu parceiro de jornada.
                                </p>
                            </article>
                        </li>
                        <li className={styles.Feature}>
                            <article>
                                <i className="fa-solid fa-book" />
                                <h4>Cobertura Completa do Ensino Médio</h4>
                                <p>
                                    [Seu Nome da Plataforma] abrange todas as
                                    disciplinas ensinadas no ensino médio,
                                    seguindo a grade curricular do MEC. Nossa
                                    abordagem holística garante que você esteja
                                    preparado para qualquer desafio no
                                    vestibular.
                                </p>
                            </article>
                        </li>
                        <li className={styles.Feature}>
                            <article>
                                <i className="fa-solid fa-dumbbell" />
                                <h4>Simulados Direcionados</h4>
                                <p>
                                    Ao realizar simulados, você receberá uma
                                    análise personalizada. Descubra quais
                                    matérias são seus pontos fortes e onde você
                                    precisa focar mais esforços. [Nome da
                                    Plataforma] coloca você no controle de sua
                                    preparação.
                                </p>
                            </article>
                        </li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>Vogarify© {currentYear}</p>
                <div className={styles.SocialMedias}></div>
            </footer>
        </>
    );
}

export default LandingPageComponent;
