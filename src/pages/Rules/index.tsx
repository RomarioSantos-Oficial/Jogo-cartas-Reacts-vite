import styles from './Rules.module.css';

const Rules = () => {
  return (
    <div className={styles.rulesContainer}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>Regras do Elementalis</h1>
        <p className={styles.subtitle}>Domine os elementos e torne-se um mestre das estratégias</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📌 Conceito Básico</h2>
        <div className={styles.ruleCard}>
          <p>Elementalis é um jogo de cartas estratégico onde dois jogadores batalham usando:</p>
          <ul className={styles.list}>
            <li><strong>8 elementos primordiais</strong> (Fogo, Água, Terra, Trevas, Luz, Ar, Eletricidade, Arcano)</li>
            <li><strong>Criaturas místicas</strong> com ranks de F (básico) a SS (lendário)</li>
            <li><strong>Magias elementais</strong> e <strong>terrenos</strong> que modificam o campo de batalha</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🎴 Componentes do Jogo</h2>
        
        <div className={styles.grid}>
          <div className={styles.componentCard}>
            <h3 className={styles.componentTitle}>Cartas de Criatura</h3>
            <p>Unidades que atacam e defendem. Possuem:</p>
            <ul className={styles.sublist}>
              <li><strong>Elemento</strong> (1 ou 2)</li>
              <li><strong>Rank</strong> (F a SS)</li>
              <li><strong>PV</strong> (Pontos de Vida)</li>
              <li><strong>Habilidade única</strong></li>
            </ul>
          </div>

          <div className={styles.componentCard}>
            <h3 className={styles.componentTitle}>Cartas de Magia</h3>
            <p>Efeitos instantâneos ou contínuos:</p>
            <ul className={styles.sublist}>
              <li><strong>Elementais</strong> (apenas para seu elemento)</li>
              <li><strong>Universais</strong> (qualquer deck)</li>
              <li><strong>Arcano</strong> (poderosas mas com custo alto)</li>
            </ul>
          </div>

          <div className={styles.componentCard}>
            <h3 className={styles.componentTitle}>Cartas de Terreno</h3>
            <p>Modificam o campo de batalha:</p>
            <ul className={styles.sublist}>
              <li>Ativam <strong>bônus elementais</strong></li>
              <li>Duração limitada por rodadas</li>
              <li>Podem ser <strong>combinados</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>⚔️ Fluxo do Jogo</h2>
        
        <div className={styles.turnSteps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Fase de Preparação</h3>
              <ul className={styles.sublist}>
                <li>Cada jogador começa com 5 cartas</li>
                <li>Terreno inicial é neutro</li>
                <li>Decida quem começa (par ou ímpar)</li>
              </ul>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Fase de Terreno (Opcional)</h3>
              <ul className={styles.sublist}>
                <li>Ative até 1 terreno por turno</li>
                <li>Máximo de 2 terrenos ativos</li>
                <li>Combos estendem a duração</li>
              </ul>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Fase Principal</h3>
              <ul className={styles.sublist}>
                <li>Invoque criaturas (gastando energia)</li>
                <li>Use magias</li>
                <li>Ative habilidades</li>
              </ul>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3>Fase de Batalha</h3>
              <ul className={styles.sublist}>
                <li>Criaturas atacam na ordem escolhida</li>
                <li>Oponente pode bloquear ou receber dano</li>
                <li>Magias rápidas podem ser usadas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🌟 Combos Elementais</h2>
        <div className={styles.comboTable}>
          <div className={styles.comboHeader}>
            <span>Elementos</span>
            <span>Nome do Combo</span>
            <span>Efeito</span>
          </div>
          <div className={styles.comboRow}>
            <div className={styles.elements}>
              <span className={styles.fire}>🔥</span>
              <span className={styles.water}>💧</span>
            </div>
            <div className={styles.comboName}>Vapor Explosivo</div>
            <div className={styles.comboEffect}>+30% de dano em área</div>
          </div>
          <div className={styles.comboRow}>
            <div className={styles.elements}>
              <span className={styles.light}>✨</span>
              <span className={styles.dark}>🌑</span>
            </div>
            <div className={styles.comboName}>Equilíbrio</div>
            <div className={styles.comboEffect}>Anula 2 efeitos negativos</div>
          </div>
          {/* Adicione mais combos conforme necessário */}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🏆 Condições de Vitória</h2>
        <div className={styles.victoryConditions}>
          <div className={styles.victoryCard}>
            <h3>Vitória Padrão</h3>
            <p>Reduza os PV do oponente a zero</p>
          </div>
          <div className={styles.victoryCard}>
            <h3>Vitória por Deckout</h3>
            <p>Oponente sem cartas para comprar</p>
          </div>
          <div className={styles.victoryCard}>
            <h3>Vitória Especial</h3>
            <p>Algumas cartas SS têm condições alternativas</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Dúvidas? Acesse nosso <a href="/faq" className={styles.link}>FAQ</a> ou entre em contato</p>
      </footer>
    </div>
  );
};

export default Rules;