import { ThumbsUp, Trash } from "@phosphor-icons/react"
import { useState } from "react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0)


    function handleDeleteComment(){

        onDeleteComment(content)
    } 

    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Elissandro Lima</strong>
                            <time title="21 de Março de 2023 às 14:39h" dateTime="2023-03-21 14:39:32">Cerca de 1h atrás</time>
                        </div>
                            <button title="Deletar comentário">
                                <Trash onClick={handleDeleteComment} size={24} />
                            </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={() => {
                        setLikeCount(likeCount + 1)
                    }}>
                        <ThumbsUp size={20} />
                        Aplaudir<span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}