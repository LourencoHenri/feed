import styles from "./Sidebar.module.css";

import { PencilLine } from "@phosphor-icons/react"
import { Avatar } from "./Avatar";

export function Sidebar({ handleOpenMenu }) {
    return (
        <aside className={styles.sidebar}>

            <img className={styles.cover} src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=40" />

            <div className={styles.profile}> 

                <Avatar src="https://avatars.githubusercontent.com/u/99770500?v=4" />

                <strong>Henrique Lourenço</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <button onClick={handleOpenMenu}  target={"_blank"} href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </button>
            </footer>

        </aside>
    )
}