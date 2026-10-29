# 开发约定

- 常用命令：`npm run dev`、`npm run build`、`npm test`、`npm run lint`、`npm run typecheck`。
- `src/app/`：App Router 页面、布局及后续服务端入口；`src/db/`：数据库连接与表结构；`src/lib/`：通用工具；测试与源码同目录，命名为 `*.test.ts`。
- `drizzle/`：生成的 SQL 迁移；`docs/`：任务计划和说明。SQLite 文件放在被忽略的 `data/` 中，不提交数据库和环境变量值。
- 提交前必须通过 lint、typecheck 和 test。
- 不要随意引入新依赖。
- 数据库只能在 Node.js 服务端访问，不导入客户端组件。
