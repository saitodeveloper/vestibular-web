import { Outlet, Link } from "react-router-dom";
import styles from "./UserPage.module.css";

function UserPageComponent() {
    return (
        <main className={styles.LoginPage}>
            <form onSubmit={e => e.preventDefault()} className={styles.LoginForm}>
                <nav className={styles.NavHolder}>
                    <Link className={styles.NavItem} to="login">
                        Logar
                    </Link>
                    <Link className={styles.NavItem} to="register">
                        Registrar
                    </Link>
                </nav>
                <Outlet />
            </form>
        </main>
    );
}

export default UserPageComponent;
