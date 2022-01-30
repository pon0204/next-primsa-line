import { Post, PrismaClient } from '@prisma/client'
import { VFC } from 'react'

const prisma = new PrismaClient()

export const getServerSideProps = async () => {
  const posts = await prisma.post.findMany()
  return { props: { posts } }
}

type Props = {
  posts: Post[]
}

const Home: VFC<Props> = ({ posts }) => {
  return (
    <div className="text-center pt-20">
      <h2>posts</h2>
      {posts.map((post: any) => (
        <>
          <p>{post.id}</p>
          <p>{post.text}</p>
          {/* <p>{post.createdAt}</p> */}
        </>
      ))}
    </div>
  )
}

export default Home
