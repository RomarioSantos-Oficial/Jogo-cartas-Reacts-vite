import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.fullPage}>
      <main className={styles.mainContent}>
        {/* Hero */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Elementalis: O Despertar dos Éteres</h1>
          <p className={styles.subtitle}>
            Domine os elementos, crie combos lendários e torne-se um deus da batalha!
          </p>
        </section>

        {/* Sobre o jogo */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sobre o Jogo</h2>
          <div className={styles.card}>
            <p>
              Um jogo de estratégia por turnos com <strong>criaturas místicas</strong>,
              <strong> deuses antigos</strong> e <strong> magias elementais</strong>.
            </p>
            <ul className={styles.featureList}>
              {[
                "8 elementos únicos com sinergias e fraquezas",
                "Sistema de terrenos dinâmicos",
                "Criaturas híbridas e combos estratégicos",
                "Mais de 100 cartas colecionáveis"
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ações */}
        <section className={styles.ctaSection}>
          <div>
            <Link to="/login" className={styles.ctaButton}>Jogar Agora</Link>
            <Link to="/rules" className={styles.secondaryButton}>Aprenda as Regras</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
