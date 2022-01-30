## 概要
Next.js × prisma × LINEのフルスタックアプリ

勉強用

## 実現したいこと
- Topページのフォームから、ユーザーへメッセージを送信出来る
- LIFF上のフォームから、メッセージを送信することで、Topページに表示出来る


## 実装内容
[環境設定]
- Next.js × Typescript × tailwindのセットアップ
- Nextjs × prismaのセットアップ
- Vercelへデプロイ

[機能]
- ユーザーへメッセージ送信
  - Messaging APIと連携
  - webhook用のAPIサーバー構築
  - line_userテーブル作成
  - webhook時に、line_userテーブルにLINEIDと名前を保存
  - フォーム作成
  - message_to_userテーブル作成
  - LINEメッセージ送信処理実装

- LIFFからメッセージ送信
  - LIFF用のページフォーム作成
  - LIFFエンドポイント作成
  - message_to_adminテーブル作成
   - ユーザーID,名前,メッセージ内容
  - 送信内容save処理実装


[その他やりたいこと]
- フォームライブラリ使う
- zod使う
- GraphQl化(別レポジトリ)
- リッチメニューの動的変更


