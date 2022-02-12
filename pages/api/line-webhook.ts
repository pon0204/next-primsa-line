// import { Client as LineClient, middleware } from '@line/bot-sdk'
import { validateSignature } from '@line/bot-sdk'
import type { NextApiRequest, NextApiResponse } from 'next'

const lineConfig = {
  channelId: process.env.LINE_CHANNEL_ID || '',
  channelSecret: process.env.LINE_CHANNEL_SECRET || '',
}

export default async function lineWebhook(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const event = req.body.events
  const sig = req.headers['x-line-signature'] as string
  try {
    validateSignature(JSON.stringify(req.body), lineConfig.channelSecret, sig)
    res.json(event)
  } catch (err) {
    console.log(err)
  }
}

/* TODO *
 * 署名検証
 * ユーザーテーブル作成
 * 友だち追加時にDBにデータ保存
 */
