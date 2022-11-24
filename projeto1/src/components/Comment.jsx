import styles from './Comment.module.css'

import { ThumbsUp, Trash} from 'phosphor-react'
import { Avatar } from './Avatar'


export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar img="https://github.com/gaabrielps.png" hasBorder={false}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel</strong>
                            <time title='23/11/22 ás 18:45'> Cerca de 1h atrás</time>
                        </div>
                        <button title='deletar'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Isso aqui é um comentário muito util</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>

                    </button>
                </footer>
            </div>
        </div>

    )
}