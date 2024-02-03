import styles from "./RegisterPage.module.css";

function RegisterPageComponent() {
    return (
        <div className={styles.RegisterContent}>
            <h1>Registrar</h1>
            <fieldset className={styles.FieldsetColumn}>
                <fieldset>
                    <label>Seu nome:</label>
                    <input placeholder="Nome"></input>
                    <input placeholder="Sobrenome"></input>
                </fieldset>
                <fieldset>
                    <label>Qual seu email:</label>
                    <input placeholder="Email"></input>
                    <input style={{ visibility: "hidden" }}></input>
                </fieldset>
                <fieldset>
                    <label>Escolha uma senha:</label>
                    <input placeholder="Senha" type="password"></input>
                    <input
                        placeholder="Confirmar senha"
                        type="password"
                    ></input>
                </fieldset>
            </fieldset>
            <button>Enviar</button>
        </div>
    );
}

export default RegisterPageComponent;
