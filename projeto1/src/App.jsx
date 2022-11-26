import { Header } from "./components/Header"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"


function App() {

  const posts = [
    {
        id: 1,
        author: {
            avatarurl: 'https://github.com/gaabrielps.png',
            name: 'Gabriel Lopes',
            role: 'QA tester'
        },
        content: [
            {type: 'paragraph', content: 'bom diaa!'},
            {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi nobis harum! Odio ab ut aliquid amet incidunt, fugit officiis, ipsum distinctio debitis nesciunt nemo soluta sint a quasi temporibus'},
        ],
        publishedAt: new Date('2022-05-03 20:00'),
    },
    {
        id: 2,
        author: {
            avatarurl: 'https://github.com/gaabrielps.png',
            name: 'Gabriel Lopes Araujo',
            role: 'QA tester'
        },
        content: [
            {type: 'paragraph', content: 'bom diaa!!!!'},
            {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos commodi nobis harum! Odio ab ut aliquid amet incidunt, fugit officiis, ipsum distinctio debitis nesciunt nemo soluta sint a quasi temporibus bcghfghgh'},
        ],
        publishedAt: new Date('2022-05-03 20:00'),
    },
]

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          
          {posts.map(post => {
            return(
              <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>
    </>


  )
}

export default App
