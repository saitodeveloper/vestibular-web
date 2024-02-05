import styles from "./LoginPage.module.css";

function LoginPageComponent() {
    return (
        <div className={styles.LoginContent}>
            <h1>Login</h1>
            <div className={styles.Circle}></div>
            <fieldset className={styles.FieldsetColumn}>
                <label>
                    <i className="fa-solid fa-envelope"></i> Email:
                </label>
                <input placeholder="Email"></input>
                <label>
                    <i className="fa-solid fa-lock"></i> Password:
                </label>
                <input placeholder="Senha" type="password"></input>
            </fieldset>
            <div className={styles.Line}></div>
            <div className={styles.SocialButtonGroup}>
                <div className={styles.SocialButton + " " + styles.Google}>
                    <i className="fab fa-google"></i>
                </div>
                <div className={styles.SocialButton + " " + styles.Facebook}>
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
            </div>
            <button>Logar</button>
        </div>
    );
}

export default LoginPageComponent;
