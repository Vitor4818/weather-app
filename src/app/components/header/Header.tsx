import Link from 'next/link'
import styles from './page.module.css'
import { BiHeart, BiHomeAlt, BiSearch, BiUserCircle } from "react-icons/bi";


export default function Header(){
    return(
        <header className={styles.headerNavigation}>
        <nav className={styles.navigation}>
            <ul className={styles.wrappedMenu}>
                <li className={styles.menuItem}>
                    <Link href='/' className={styles.linkNavigation}> <BiHomeAlt /> Inicio</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/busca' className={styles.linkNavigation}> <BiSearch /> Busca </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/favoritos' className={styles.linkNavigation}> <BiHeart />Favoritos</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href='/perfil' className={styles.linkNavigation}> <BiUserCircle /> Perfil</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}