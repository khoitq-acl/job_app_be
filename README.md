<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# Nest
## MVC 

- Model - View - Controller

## Controller

- Nơi đầu tiên xử lý yêu cầu từ người dùng và chuyển yêu cầu đến các service liên quan

## Model

- Nơi xử lý yêu cầu nghiệp vụ

## View

- Nơi thể hiện kết quả cho người dùng / Kết quả trả về cho người dùng

## Module

- Nơi chứa đựng tất cả các Controller / Model / View của một nghiệp vụ cụ thể


















DevOps
- Quản lý server
- Quản lý sự ổn định của ứng dụng

- Nginx -> deploy 1 , n website trên 1 server
- Pm2 - deploy 1 website chạy 24/7
  bị lỗi
  server vô tình bị treo 1 khoảng thời gian
    -> website chết
        -> khi mà server ổn định rồi
            -> tự động start lại web cho anh luôn



Home -> 3000 Frontend
     -> 3001 Backend


IP home:3000 anhquy.com
       :3001 api.anhquy.com
=>> HTTP request
==> crawler dữ liệu

nginx -> chuyển sang ứng dụng tại port tương ứng

--> nextJS => server side render 



Read
- Get


Create
- Post
  -> Body param


Update
- Patch

Delete
- Delete

# Database

- Nơi để anh lưu trữ dữ liệu và thao tác với dữ liệu (CURD / xem, thêm , xoá , sửa)

- Là một ứng dụng thứ 3, nó chạy độc lập với app của mình chứ không phải là một phần của app.

- Để cài cũng là một vấn đề => hướng dẫn anh cài bằng docker



## Database (docker)

- Install docker
- Install posgress `docker pull postgres`
- Run posgress `docker run --name postgres -e POSTGRES_PASSWORD=123456789 -e POSTGRES_DB=db_acl_calendar -d -p 5432:5432 postgres`

# Entity

# Repository -> driver để tương tác với entity 

userRepository -> user
postRepository -> post


# Add partial Type
` npm install @nestjs/mapped-types`