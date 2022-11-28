import styles from './Comment.module.css'

import { ThumbsUp, Trash} from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'


export function Comment({content, onDeleteComment}){

    function handleDeleteComment(){
        console.log("deletar")
        onDeleteComment(content)
    }

    const [likeCount,SetLikeCount] = useState(0);
    

    function handleLikeComment(){
        SetLikeCount(likeCount+1)
    }

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
                        <button  onClick={handleDeleteComment} title='deletar'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>

                    </button>
                </footer>
            </div>
        </div>

    )
}