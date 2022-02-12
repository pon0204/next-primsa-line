import { Client as LineClient, middleware } from '@line/bot-sdk'
import {
  validateSignature,
  WebhookEvent,
  WebhookRequestBody,
} from '@line/bot-sdk'
import { PrismaClient, LineUser } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const lineConfig = {
  channelId: process.env.LINE_CHANNEL_ID || '',
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS || '',
  channelSecret: process.env.LINE_CHANNEL_SECRET || '',
}

const prisma = new PrismaClient()
const lineClient = new LineClient(lineConfig)

export default async function lineWebhook(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body: WebhookRequestBody = req.body
  const events: WebhookEvent[] = req.body.events
  const sig = req.headers['x-line-signature'] as string
  try {
    validateSignature(JSON.stringify(req.body), lineConfig.channelSecret, sig)
    switch (events[0].type) {
      case 'follow':
        addUser(events[0])
        break
    }
    res.json({})
  } catch (err) {
    console.log(err)
  }
}

async function addUser(event: WebhookEvent) {
  const userId = event.source.userId as string
  const profile = await lineClient.getProfile(userId)

  await prisma.lineUser.create({
    data: {
      userId,
      name: profile.displayName,
    },
  })
}
