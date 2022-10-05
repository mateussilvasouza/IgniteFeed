import styles from './SideBar.module.css'
import { PencilLine } from 'phosphor-react'

import Capa from './../../assets/bgAside.svg'
import Perfil from './../../assets/perfil.jpeg'

export function SideBar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src={Capa}
            />

            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src={Perfil}
                />
                <strong>Leslie Alexander</strong>
                <span>UI Designer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                     Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}
