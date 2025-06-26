import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { 
  IoMailOutline, 
  IoLogoFacebook, 
  IoLogoInstagram, 
  IoLogoTwitter, 
  IoLogoYoutube, 
  IoLogoLinkedin, 
  IoLogoGithub 
} from "react-icons/io5";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const linkColumns = [
    [
      { to: "/ajudas", text: "Central de Ajuda" },
      { to: "/rules", text: "Regras do Jogo" },
      { to: "/termos", text: "Termos e Condições" }
    ],
    [
      { to: "/políticasdejogos", text: "Políticas de Jogos" },
      { to: "/segurança", text: "Segurança" },
      { to: "/meiosdepagamento", text: "Meios de Pagamento" },
      { to: "/políticasdePrivacidade", text: "Política de Privacidade" }
    ]
  ];

  const socialLinks = [
    { icon: <IoMailOutline />, url: "mailto:romariodevs@gmail.com" },
    { icon: <IoLogoFacebook />, url: "https://www.facebook.com/profile.php?id=61559557505574" },
    { icon: <IoLogoInstagram />, url: "https://www.instagram.com/euoromario/" },
    { icon: <IoLogoTwitter />, url: "https://x.com/RomarioSant0s" },
    { icon: <IoLogoYoutube />, url: "https://www.youtube.com/@romariosantos3835" },
    { icon: <IoLogoLinkedin />, url: "https://www.linkedin.com/in/euoromario/" },
    { icon: <IoLogoGithub />, url: "https://github.com/RomarioDevs" }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <div className={styles.linksContainer}>
          {linkColumns.map((column, columnIndex) => (
            <div key={columnIndex} className={styles.linkColumn}>
              {column.map((link, linkIndex) => (
                <Link key={linkIndex} to={link.to} className={styles.footerLink}>
                  {link.text}
                </Link>
              ))}
            </div>
          ))}
          
          <div className={styles.aboutSection}>
            <h2>Sobre Nós</h2>
            <p>
              Bem-vindo ao Sorte em Perder, o seu destino online definitivo para apostas e jogos de cassino! 
              Oferecemos uma experiência emocionante e segura com uma vasta seleção de jogos.
            </p>
          </div>
        </div>

        <div className={styles.socialSection}>
          <div className={styles.socialIcons}>
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Link para ${social.url.split('//')[1]?.split('/')[0]}`}
                className={styles.socialIcon}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; {currentYear} Sorte em Perder. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;