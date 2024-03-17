import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

import BookSvg from "@icons/book.svg?react";
import BrainSvg from "@icons/brain.svg?react";
import ChalkboardSvg from "@icons/chalkboard.svg?react";
import NotesSvg from "@icons/notes.svg?react";
import BackpackSvg from "@icons/backpack.svg?react";
import GraduationSvg from "@icons/graduation.svg?react";

function LandingPageComponent() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <header>
                <img src="/img/logo.png" />
                <nav>
                    <Link to="/">Principal</Link>
                    <Link to="/about">Sobre</Link>
                    <Link to="/user/register">Registrar</Link>
                    <Link to="/user/login">Logar</Link>
                </nav>
            </header>
            <main className={styles.LandingPageContent}>
                <section className={styles.Headline}>
                    <div className={styles.Left}>
                        <BookSvg />
                        <GraduationSvg style={{ marginLeft: "-5rem" }} />
                        <BrainSvg />
                    </div>
                    <div className={styles.Middle}>
                        <ul>
                            <li>Alunos</li>
                            <li>Ensino</li>
                            <li>Estudos</li>
                            <li>Vestibular</li>
                            <li>Comunidade</li>
                        </ul>
                        <h1>Transforme seu Potencial em Excelência</h1>
                        <h2>
                            Acompanhamento Personalizado para Alunos do Ensino
                            Médio
                            <br />
                            Rumo ao Sucesso no Vestibular!
                        </h2>
                        <div className={styles.Buttons}>
                            <button>Logar</button>
                            <button>Registrar</button>
                        </div>
                    </div>
                    <div className={styles.Right}>
                        <ChalkboardSvg />
                        <div style={{ marginRight: "-5rem" }}>
                            <BackpackSvg />
                        </div>
                        <NotesSvg />
                    </div>
                </section>
                <section className={styles.Features}>
                    <div className={styles.Title}>
                        <img src="/img/trophy.svg" />
                        <h2>Bem-vindo à Vogarify</h2>
                    </div>
                    <article className={styles.Feature}>
                        <h3>Conquiste Seu Melhor Desempenho</h3>
                        <p>
                            Nosso objetivo é fazer com que os alunos alcancem
                            resultados extraordinários. Seja você um aluno com
                            desempenho ruim buscando a excelência ou alguém já
                            com bom desempenho aspirando à perfeição, nossa
                            plataforma é seu parceiro de jornada.
                        </p>
                    </article>
                    <article className={styles.Feature}>
                        <h3>Cobertura Completa do Ensino Médio</h3>
                        <p>
                            Vamos abranger todas as disciplinas ensinadas no
                            ensino médio, seguindo a grade curricular do MEC.
                            Nossa abordagem holística garante que você esteja
                            preparado para qualquer desafio no vestibular.
                        </p>
                    </article>
                    <article className={styles.Feature}>
                        <h3>Simulados Direcionados</h3>
                        <p>
                            Ao realizar simulados, você receberá uma análise
                            personalizada. Descubra quais matérias são seus
                            pontos fortes e onde você precisa focar mais
                            esforços. Colocamos você no controle de sua
                            preparação.
                        </p>
                    </article>
                    <article className={styles.Feature}>
                        <h3>Acompanhamento Individualizado</h3>
                        <p>
                            Nossa plataforma oferece feedback personalizado para
                            ajudá-lo a melhorar constantemente. Estamos aqui
                            para guiar sua jornada, garantindo que cada
                            exercício e cada minuto dedicado aos estudos leve
                            você mais perto do sucesso.
                        </p>
                    </article>
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
