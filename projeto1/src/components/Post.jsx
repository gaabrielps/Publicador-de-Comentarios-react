import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import {format, formatDistanceToNow} from  'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'



export function Post({author, publishedAt, content}){

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix: true
    })

    const [comments, setComments] =useState([
        'testando...'
    ])
    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment() {
        event.preventDefault() //para nao redirecionar para outra pagina

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete){
        const newWithoutDeleteOne = comments.filter(comment => {
            return comment != commentToDelete
        })
        setComments(newWithoutDeleteOne)
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity("esse campo é obrigatorio!!!")
    }


    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar img={author.avatarurl} hasBorder={true}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                    <time title={publishedDateFormatted}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.map(line =>{
                    return <p key={line.content}>{line.content}</p>
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                value={newCommentText}
                placeholder='Deixe seu comentário'
                onChange={handleNewCommentChange}
                required
                onInvalid={handleNewCommentInvalid}
                />

                <footer>
                    <button  type='submit'>Comentar</button>
                </footer>

            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
     
     
            </div>
        </article>

    )
}