import { Outlet, Link } from "react-router-dom";
import styles from "./UserPage.module.css";

function UserPageComponent() {
    return (
        <div className={styles.LoginPage}>
            <nav className={styles.NavHolder}>
                <Link className={styles.NavItem} to="login">
                    Logar
                </Link>
                <Link className={styles.NavItem} to="register">
                    Registrar
                </Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default UserPageComponent;
