import Link from 'next/link'
import styles from '../styles/Button.module.scss'

const Header = () => {
  return (
    <header>
      <h1>next.js project</h1>
      <menu className={styles.error}>
        Menu：
        <Link href="/">
          <a>トップ</a>
        </Link>
        ｜
        <Link href="/other">
          <a>別ページ</a>
        </Link>
      </menu>
    </header>
  )
}
export default Header
