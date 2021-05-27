<p align="center">
    <img src="https://i.imgur.com/3nTjurN.png" alt="logo" />
</p>

<center>
  <h1>Recruiting Partners コーディングテスト - Javascript(React) 部門</h1>
  <h6>本テストにはJavascript(React)で書かれたベースコードがあります。ベースコードにはいくつかの課題が存在しています。本文内容を熟読した上で課題を解決してください。</h6>

<br>

![Node version](https://img.shields.io/badge/Node-14.15.0-green)
![NPM version](https://img.shields.io/badge/npm-6.14.8-orange)
![Node version](https://img.shields.io/badge/License-All_right_reserved-blue)

</center>

# 受験方法

1. 本 Repository をローカルにクローンします。

   ```
   git clone
   ```

2. Dependency install を行います

   ```
   npm install
   ```

3. localhost:3000 にて作業を開始します。
   ```
   npm start
   ```

# 注意事項

- 受験時間は 120 分です。
- 原則、受験時間が過ぎたメールは受け付けません。
- 課題の順番は難易度や採点とは関係ありません。
- 受験中のトラブルやその他不明点が発生した場合は s_matsunaga@3140pa.comまでご連絡をお願いします。

# 課題概要

<center>
<img src="https://i.imgur.com/VinNmA2.png" alt="Feature">
</center>
<br>
リクルーティング・パートナーズ株式会社(リクパー)では、九州を中心とした転職サイト「Rec-lab」(リクラボ)を制作しています。リクラボはサーバーの API を利用して求人情報を取得し、ユーザーに仕事を紹介するサービスを提供しています。

この度リクパーに入社したあなたはリクラボのフロントエンドの開発をすることになりました。

リクラボには解決しないといけない課題があります。
いくつかの課題はすぐに解決できそうですが、従来のコードをじっくり見ないといけない課題や、構造を改善すべきところもあります。

課題を解決して、リクラボを完成させましょう！

# 課題

## 1. HTML

SEO 対策のために、Semantic HTML を意識してコードを作成/変更してください。

## 2. HTML

[ホーム画面](http://localhost:3000/) の中には class 名 が`.sitemaps`の DOM があります。

この DOM の中に二つのボタンを置き、下の画像のように完成させてください。

<center>
   <img src="https://i.imgur.com/BCkZb2P.png" alt="Feature">
</center>

- Github のボタンは松永さんの Github へ、右のボタンはリクルーティング・パートナーズへ繋がるように HTML を修正してください。
- ページ遷移は新しいタブを基準にします。

> 松永さんの Github : https://github.com/TERADA-DANTE

> リクルーティング・パートナーズ : https://3140pa.com

## 3. HTTP

[ホーム画面](http://localhost:3000/)には現在 100 件の求人情報が表示されています。本文下の`Rec-lab API reference`を確認し、表示される求人数を 12 件に変更してください。

## 4. Javascript

[ホーム画面](http://localhost:3000/) の中には class 名 が`.job-badge`の DOM があります。
この DOM の色を決める関数`getRandomColor`を作成してください。

- 関数`getRandomColor`は長さ 1 以上の文字列をもらいます。
- リターンする値は下記の 10 種類に限ります。
- 与えられた文字列に対しては常に等しい値をリターンします。

```
return "bg-logo-1" || "bg-logo-2" || "bg-logo-3" || "bg-logo-4" || "bg-logo-5" || "bg-logo-6" || "bg-logo-7" || "bg-logo-8" || "bg-logo-9" || "bg-logo-10";
```

## 5. Javascript

[ホーム画面](http://localhost:3000/) の中には class 名 が`.job-created_at`の DOM があります。こちらは求人情報が作成された日を表します。この作成日を本日基準`○○日前`の表記に変更してください。

- 時間は無視しても構いません
- 例) `2021-03-13T21:30:24.692Z` => `3日前`

## 6. Javascript

[ホーム画面](http://localhost:3000/) の中には class 名 が`.job-location`の DOM があります。こちらは求人情報の勤務地を表します。この勤務地の表示を下記の例のように変更してください。

- 表示の順番は構いません

- 例) `【九州・沖縄】->福岡市` => `九州・沖縄`

- 例) `【九州・沖縄】->福岡市,【九州・沖縄】->その他福岡県` => `九州・沖縄`

- 例) `【北海道】->札幌市,【東北】->仙台市,【東海】->名古屋市,【東北】->宮城市` => `北海道/東北/東海`

## 7. Javascript

`/src/components/App.js`では、求人情報をサーバーから取得する関数が書かれています。

この関数をコールバック以外の ES6+の文法を使って書き直してください。

## 8. React

`/src/components/App.js`は class 名 コンポーネントで作成されています。
これを function コンポーネントに書き直してください。

## 9. React

[ホーム画面](http://localhost:3000/) の中には class 名 が`.job-detail`の DOM があります。こちらは求人情報の詳細のページへ移動するボタンです。

求人詳細ページ諸 UI は`/src/components/Jobs/JobDetail/`の中に作成しています。
`/src/components/Jobs/JobDetail/index.js`と本文下の`Rec-lab API reference`を確認して求人詳細ページを作成してください。

## 10. React

[ホーム画面](http://localhost:3000/) の中には class 名 が`.job-search`の DOM があります。こちらは求人情報を検索する時に使うボタンです。
`/src/components/Search/index.js`と本文下の`Rec-lab API reference`を確認して検索する機能を作成してください。

## 11. React

[ホーム画面](http://localhost:3000/) の中には class 名 が`.mode`の DOM があります。こちらはダークモードのトグルボタンです。

class 名 が`.view-mode`の DOM にクラス名'.dark'が付くことでダークモードが有効かされます。
ダークモードが Refresh されても維持されるように機能を実装してください。

## 12. Refactoring

`/src/`の中の file のコード は 80 行以下にしてください。Convention, Design pattern を想定した上で既存コードのリファクタリングや構造(file, folder)の修正、削除は自由に行って構いません。

## 13. HTML

[404 ページ](http://localhost:3000/not-found-404)は存在しないページにユーザーが訪れると表示される 404 ページです。

`/src/pages/NotFound404`を確認し、404 ページを自由に作成してください。

## Rec-lab API reference

The Rec-lab API reference documentation is based on the following schema.

```jsx
model Article {
id         Int      @id @default(autoincrement())
created_at DateTime
company    String
title      String
content    String
location   String
isFullTime Boolean
min_salary Int
max_salary Int?
work_time  String
}
```

## Endpoint

```
http://rec-lab.work/
```

## Resource

### `GET /articles`

`articles` lets you retrieve records based on your **query.**

`queries`

| Key        | Type      | Required | Default | Description                                                                                 |
| ---------- | --------- | -------- | ------- | ------------------------------------------------------------------------------------------- |
| limit      | `Number`  | No       | 100     | Specifies how many objects should be returned in the list (only positive value is accepted) |
| content    | `String`  | No       |         | Specifies content field record should be eagerly loaded on the returned object.             |
| location   | `String`  | No       |         | Specifies location field record should be eagerly loaded on the returned object.            |
| isFullTime | `Boolean` | No       | true    | Specifies isFullTime field record should be eagerly loaded on the returned object.          |

### `GET /articles/:id`

`/articles/:id` lets you retrieve a single database record based on your **parameter**.

`parameter`

| Key | Type     | Required | Description                                                   |
| --- | -------- | -------- | ------------------------------------------------------------- |
| id  | `Number` | Yes      | Specifies id of the record to include on the returned object. |
