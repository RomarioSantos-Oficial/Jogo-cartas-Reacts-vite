import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import Logo from "../../assets/Logo/Logo.png";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [isRobotChecked, setIsRobotChecked] = useState(false);

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-zA-Z0-9]{0,12}$/.test(value)) {
      setUserId(value);
    }
  };

  return (
    <div className={styles.loginContainer}>
      {/* Voltar ao Início */}
      <Link to="/" className={styles.backButton}>Início</Link>

      <h1 className={styles.title}>Login</h1>
      <img src={Logo} alt="Logo do Cassino" className={styles.logo} />

      <input
        type="text"
        placeholder="Seu ID"
        value={userId}
        onChange={handleChangeId}
        className={styles.input}
      />

      <input type="password" placeholder="Senha" className={styles.input} />

      {/* Esqueci a senha */}
      <div className={styles.forgotContainer}>
        <Link to="/esqueci-senha" className={styles.forgotLink}>
          Esqueci minha senha
        </Link>
      </div>

      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={isRobotChecked}
          onChange={(e) => setIsRobotChecked(e.target.checked)}
        />
        Não sou um robô
      </label>

      <p className={styles.info}>
        Ainda não tem cadastro?{" "}
        <Link to="/register" className={styles.link}>
          Cadastre-se
        </Link>
      </p>

      <button className={styles.button} disabled={!isRobotChecked || userId.length < 3}>
        Entrar
      </button>
    </div>
  );
};

export default Login;
