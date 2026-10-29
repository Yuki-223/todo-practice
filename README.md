# Todo Practice

Next.js App Router + TypeScript（strict）+ Tailwind CSS + SQLite / Drizzle ORM + Vitest。当前仅为脚手架，不含待办 CRUD。

## 本地运行

需要 Node.js 20.9+（建议 Node.js 24 LTS）和 npm。SQLite 使用本地文件，无需数据库服务或凭证。

```sh
npm ci
npm run db:migrate
npm run dev
```

默认数据库位于 `data/todo.db`。可复制 `.env.example` 为 `.env.local` 并设置 `DATABASE_URL` 为 SQLite 文件路径（不是 HTTP URL）。从仓库根目录执行命令；迁移命令会自动创建默认 data 目录。数据库连接仅在 Node.js 服务端使用，不支持 Edge Runtime；生产部署需要可持久化、可写的磁盘，Vercel 临时文件系统不适合作为持久数据库。

## 命令

| 命令 | 用途 |
| --- | --- |
| `npm run dev` | 启动开发服务 |
| `npm run build` | 生产构建 |
| `npm start` | 启动已构建应用 |
| `npm run lint` | ESLint，警告也视为失败 |
| `npm run typecheck` | TypeScript 检查，等价于 `npx tsc --noEmit` |
| `npm test` | 一次性运行 Vitest |
| `npm run test:watch` | 监听测试 |
| `npm run db:generate` | 修改 schema 后生成迁移，生成结果需提交 |
| `npm run db:migrate` | 应用已提交迁移 |
| `npm run db:studio` | 打开 Drizzle 数据浏览器 |

`src/app/` 放页面和布局；`src/db/` 放数据库连接与 schema；`src/lib/` 放工具及同目录测试；`drizzle/` 保存迁移。后续任务及验证方式见 [docs/plan.md](docs/plan.md)。`todos` 字段为自增整数 id、非空 title、默认 false 的 done、默认当前时间的 createdAt（SQLite 秒级时间戳，Drizzle 映射为 Date）。

提交前运行 `npm run lint`、`npm run typecheck`、`npm test`。不要提交 `.env.local` 和数据库文件。
