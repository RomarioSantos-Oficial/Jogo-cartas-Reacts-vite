import { useState, useEffect } from "react";
import { IoGiftOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/Logo.png";
import styles from "./Header.module.css";

export function Header() {
  const [showConfig, setShowConfig] = useState(false);
  const [showGiftInput, setShowGiftInput] = useState(false);
  const [giftCode, setGiftCode] = useState("");

  const handleGiftSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne recarregamento da página
    if (!giftCode.trim()) return; // Validação básica
    
    alert(`Código enviado: ${giftCode}`);
    setGiftCode("");
    setShowGiftInput(false);
  };

  // Fecha menus quando clica fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (showConfig && !target.closest(`.${styles.gearWrapper}`)) {
        setShowConfig(false);
      }
      if (showGiftInput && !target.closest(`.${styles.giftWrapper}`)) {
        setShowGiftInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showConfig, showGiftInput]);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <img className={styles.logo} src={Logo} alt="Logo do jogo" />
      </Link>

      <nav className={styles.home}>
        <Link to="/rules">APRENDA AS REGRAS</Link>
        <Link to="/cassino">CASSINO</Link>
        <Link to="/fantasy">FANTASY</Link>
        <Link to="/virtual">VIRTUAIS</Link>
      </nav>

      <div className={styles.buscar1}>
        <div className={styles.icons}>
          <div className={styles.giftWrapper}>
            <IoGiftOutline
              className={styles.icon}
              onClick={() => {
                setShowGiftInput(!showGiftInput);
                setShowConfig(false);
              }}
              aria-label="Inserir código de presente"
            />
            {showGiftInput && (
              <form onSubmit={handleGiftSubmit} className={styles.giftInputBox}>
                <input
                  type="text"
                  placeholder="Digite o código"
                  value={giftCode}
                  onChange={(e) => setGiftCode(e.target.value)}
                  autoFocus
                />
                <button type="submit">Enviar</button>
              </form>
            )}
          </div>

          <div className={styles.gearWrapper}>
            <GoGear
              className={styles.icon}
              onClick={() => {
                setShowConfig(!showConfig);
                setShowGiftInput(false);
              }}
              aria-label="Configurações"
            />
            {showConfig && (
              <div className={styles.configMenu}>
                <button type="button">Som: On/Off</button>
                <button type="button">Idioma</button>
                <button type="button">Modo Escuro</button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.buttonsHome}>
          <Link to="/register" className={styles.registar}>Registrar-se</Link>
          <Link to="/login" className={styles.entrar}>Entrar</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;