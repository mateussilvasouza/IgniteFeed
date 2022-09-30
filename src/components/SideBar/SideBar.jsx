import styles from './SideBar.module.css'
import Perfil from './../../assets/perfil1.svg'

export function SideBar(){
    return(
        <aside className={styles.aside}>
            <header>
                <img className={styles.perfil} src={Perfil} alt="" />
            </header>
            <main>
                <h3>Leslie Alexander</h3>
                <span>UI Designer</span>
            </main>
            <footer>
                <a href="#"> Editar seu perfil</a>
            </footer>

        </aside>
    )
}