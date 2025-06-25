import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";
import { FaDice } from "react-icons/fa";
import Logo from "../../assets/Logo/Logo.png"; // Substitua com o caminho correto

const generateNickname = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let nickname = '';
  const length = Math.floor(Math.random() * 5) + 6; // entre 6 e 10 caracteres
  for (let i = 0; i < length; i++) {
    nickname += chars[Math.floor(Math.random() * chars.length)];
  }
  return nickname;
};

const Register = () => {
  const [userId, setUserId] = useState("");
  const [isRobotChecked, setIsRobotChecked] = useState(false);

  const handleGenerateId = () => {
    const nickname = generateNickname();
    setUserId(nickname);
  };

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-zA-Z0-9]{0,12}$/.test(value)) {
      setUserId(value);
    }
  };

  return (
    <div className={styles.registerContainer}>

      {/* Botão Voltar */}
      <Link to="/" className={styles.backButton}>Início</Link>

      <h1 className={styles.title}>Cadastro</h1>
      <img src={Logo} alt="Logo" className={styles.logo} />

      <div className={styles.inputWithIcon}>
        <input
          type="text"
          placeholder="Seu ID (3-12 letras/números)"
          value={userId}
          onChange={handleChangeId}
          className={styles.input}
        />
       

        <button onClick={handleGenerateId} className={styles.diceButton}>
          <FaDice />
        </button>
      </div>

      <input type="password" placeholder="Senha" className={styles.input} />
      <input type="password" placeholder="Confirmar Senha" className={styles.input} />
      <input type="text" placeholder="Endereço" className={styles.input} />
      <input type="tel" placeholder="Número de Telefone" className={styles.input} />
       <input
          type="email"
          placeholder="Email de contato"
          className={styles.input}
        />

      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={isRobotChecked}
          onChange={(e) => setIsRobotChecked(e.target.checked)}
        />
        Não sou um robô
      </label>

      <p className={styles.info}>
        Já tem conta?{" "}
        <Link to="/login" className={styles.link}>
          Entrar
        </Link>
      </p>

      <button className={styles.button} disabled={!isRobotChecked || userId.length < 3}>
        Cadastrar
      </button>
    </div>
  );
};

export default Register;
