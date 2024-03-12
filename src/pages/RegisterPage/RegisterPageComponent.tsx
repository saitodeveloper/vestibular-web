import { useState, useCallback } from "react";
import { Api, Schemas } from "@src/api";
import styles from "./RegisterPage.module.css";

const { PostAuthUser } = Schemas;

function RegisterPageComponent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const requestUser = new PostAuthUser();
    requestUser.user.firstName = firstName;
    requestUser.user.lastName = lastName;
    requestUser.auth.email = email;
    requestUser.auth.password = password;
    requestUser.device.firstName = firstName;

    return (
        <div className={styles.RegisterContent}>
            <h1>Registrar</h1>
            <fieldset className={styles.FieldsetColumn}>
                <label>
                    <i className="fa-solid fa-user"></i> Seu nome:
                </label>
                <fieldset>
                    <input
                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                            setFirstName(e.currentTarget.value);
                        }}
                        placeholder="Nome"
                    ></input>
                    <input
                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                            setLastName(e.currentTarget.value);
                        }}
                        placeholder="Sobrenome"
                    ></input>
                </fieldset>
                <label>
                    <i className="fa-solid fa-envelope"></i> Qual seu email:
                </label>
                <fieldset>
                    <input
                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                            setEmail(e.currentTarget.value);
                        }}
                        placeholder="Email"
                    ></input>
                </fieldset>
                <label>
                    <i className="fa-solid fa-lock"></i> Escolha uma senha:
                </label>
                <fieldset>
                    <input
                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                            setPassword(e.currentTarget.value);
                        }}
                        placeholder="Senha"
                        type="password"
                    ></input>
                    <input
                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                            setConfirmPassword(e.currentTarget.value);
                        }}
                        placeholder="Confirmar senha"
                        type="password"
                    ></input>
                </fieldset>
            </fieldset>
            <div className={styles.ButtonGroup}>
                <button>Enviar</button>
            </div>
        </div>
    );
}

export default RegisterPageComponent;
