# my-next-js-work-
next.js

# 環境構築手順
`npm install`

# アプリの実行
`npm run dev` or `npx run dev`
## コンテナで実行する場合
`docker-compose build`
`docker-compose up -d`

## コンテナの立ち上がりでnode-sass関連でエラーになるときは
`docker-compose run nextjs-app npm rebuild node-sass`
でnode-sassをビルドし直す
