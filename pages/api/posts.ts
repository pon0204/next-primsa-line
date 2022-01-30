// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Post, PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export async function fetchPosts(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const posts = await prisma.post.findMany()
  res.json(posts)
}
