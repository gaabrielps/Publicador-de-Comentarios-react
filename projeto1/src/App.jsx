import { Header } from "./components/Header"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post nome="gabriel" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptateem"/>
          <Post nome="gabriel" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptateem"/>
          <Post nome="gabriel" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptateem"/>  
        </main>
      </div>
    </>


  )
}

export default App
