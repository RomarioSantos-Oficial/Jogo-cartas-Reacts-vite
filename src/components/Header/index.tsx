import { IoGiftOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/Logo.png";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img className={styles.logo} src={Logo} alt="Logo de jogo" />
            </Link>
            <nav className={styles.home}>
                <Link to="/rules">APRENDAS AS REGAS</Link>
                <Link to="/cassino">CASSINO</Link>
                <Link to="/fantasy">FANTASY</Link>
                <Link to="/virtual">VIRTUAIS</Link>
            </nav>
            <div className={styles.buscar1}>
                <div className={styles.icons}>
                    <IoGiftOutline className={styles.icon} />
                    <GoGear className={styles.icon} />
                </div>
                <div className={styles.buttonsHome}>
                    <Link to="/register" className={styles.registar}>Registra-se</Link>
                    <Link to="/login" className={styles.entrar}>Entrar</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
