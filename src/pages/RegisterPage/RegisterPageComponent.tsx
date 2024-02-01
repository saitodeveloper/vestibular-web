import styles from "./RegisterPage.module.css";

function RegisterPageComponent() {
    return (
        <main className={styles.RegisterContent}>
            <form onSubmit={e => e.preventDefault()}>
                <h1>Registrar</h1>
                <fieldset className={styles.FieldsetCollumn}>
                    <fieldset>
                        <label>Seu nome:</label>
                        <input placeholder="Nome"></input>
                        <input placeholder="Sobrenome"></input>
                    </fieldset>
                    <fieldset>
                        <label>Email:</label>
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
            </form>
        </main>
    );
}

export default RegisterPageComponent;
