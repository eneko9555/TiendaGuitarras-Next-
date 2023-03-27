import styles from "../styles/footer.module.css"
import Link from "next/link"


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contain}`}>
        <nav className={styles.navegacion}>
          <Link href="/" legacyBehavior >
            Inicio
          </Link>
          <Link href="/nosotros" legacyBehavior>
            Nosotros
          </Link>
          <Link href="/blog" legacyBehavior>
            Blog
          </Link>
          <Link href="/tienda" legacyBehavior>
            Tienda
          </Link>
        </nav>
        <p>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
