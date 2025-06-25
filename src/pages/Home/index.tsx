import { Link } from 'react-router-dom';
import styles from './Home.module.css';

// Página Home completa
const Home = () => {
  return (
    <div className={styles.fullPage}> {/* Container principal */}

      {/* Conteúdo específico da Home */}
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Elementalis: O Despertar dos Éteres</h1>
          <p className={styles.subtitle}>
            Domine os elementos, crie combos lendários e torne-se um deus da batalha!
          </p>
        </section>

        {/* Game Description */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sobre o Jogo</h2>
          <div className={styles.card}>
            <p>
              Um jogo de estratégia por turnos onde você controla <strong>criaturas místicas</strong>, 
              <strong>deuses antigos</strong> e <strong>magias elementais</strong> em batalhas épicas.
            </p>
            <ul className={styles.featureList}>
              <li>8 elementos únicos com sinergias e fraquezas</li>
              <li>Sistema de terrenos dinâmicos</li>
              <li>Criaturas híbridas e combos estratégicos</li>
              <li>Mais de 100 cartas colecionáveis</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <Link to="/login" className={styles.ctaButton}>Jogar Agora</Link>
          <Link to="/rules" className={styles.secondaryButton}>Aprenda as Regras</Link>
        </section>
      </main>

    </div>
  );
};

export default Home;