import { Outlet, Link } from "react-router-dom";
import styles from "./UserPage.module.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

function UserPageComponent() {
    const [pathname, setPathname] = useState(window.location.pathname);
    const isLogin = pathname.indexOf("login") !== -1;
    const loginClassName = `${styles.NavItem} ${isLogin ? styles.Active : ""}`;
    const registerClassName = `${styles.NavItem} ${
        isLogin ? "" : styles.Active
    }`;
    const location = useLocation();

    useEffect(() => {
        setPathname(location.pathname);
    }, [location]);

    return (
        <main className={styles.LoginPage}>
            <form
                onSubmit={e => e.preventDefault()}
                className={styles.LoginForm}
            >
                <nav className={styles.NavHolder}>
                    <Link className={loginClassName} to="login">
                        Logar
                    </Link>
                    <Link className={registerClassName} to="register">
                        Registrar
                    </Link>
                </nav>
                <Outlet />
            </form>
        </main>
    );
}

export default UserPageComponent;
