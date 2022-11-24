import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar img="https://github.com/gaabrielps.png" hasBorder={true}/>
                    <div className={styles.authorInfo}>
                        <strong>Gabriel Lopes</strong>
                        <span>qa</span>
                    </div>
                </div>

                <time title='23/11/22 ás 18:45'> Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, explicabo, ducimus ullam quas pariatur omnis neque facere dolores fuga quisquam eum odit! Nam facilis, molestiae eaque cumque expedita in similique.</p>
                <p><a href="#">hashtag.com</a></p>
                <p><a href="#">#novoProjeto #nlw</a></p>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu comentário'/>

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>

            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>

    )
}