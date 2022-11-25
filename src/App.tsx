import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

// author: { avatar_url: '', name: '', role: '' }
// publishAt: Date
// content: ''

const posts = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/leolive1506.png',
          name: 'Leonardo Lopes',
          role: 'Web developer',
      },
      content: [
          { type: 'paragraph', content: 'Fala galeraa 👋' },
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
          { type: 'link', content: 'jane.design/doctorcare' }
      ],
      publishAt: new Date('2022-05-03 20:00:00')
  },
  {
      id: 2,
      author: {
          avatarUrl: 'https://github.com/diego3g.png',
          name: 'Diego Fernandes',
          role: 'CTO @Rocketseat',
      },
      content: [
          { type: 'paragraph', content: 'Fala galeraa 👋' },
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
          { type: 'link', content: 'jane.design/doctorcare' }
      ],
      publishAt: new Date('2022-11-24 11:00:00')
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishAt={post.publishAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}

