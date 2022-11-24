import {PencilLine} from 'phosphor-react'

import style from '../components/Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=40"/>

            <div className={style.profile}>
                <Avatar img="https://github.com/gaabrielps.png" hasBorder={true} />
                <strong>Gabriel Lopes</strong>
                <span>dev/qa</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}