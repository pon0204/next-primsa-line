// import { Client as LineClient, middleware } from '@line/bot-sdk'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function lineWebhook(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const event = req.body.events
  console.log(event)
  res.json(event)
}

/* TODO *
 * 署名検証
 * ユーザーテーブル作成
 * 友だち追加時にDBにデータ保存
 */
