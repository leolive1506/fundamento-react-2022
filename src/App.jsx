import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Leonardo Lopes"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, maxime."
      />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  )
}

