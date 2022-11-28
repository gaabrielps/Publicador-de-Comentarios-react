import styles from './Avatar.module.css'


export function Avatar(props){
    const avatar = props.hasBorder == true ? styles.avatarWithBorder : styles.avatar
    return(
        <img className={avatar} 
        src={props.img} />
    )
}