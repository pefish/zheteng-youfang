# 折腾有方

一个用 Markdown 维护的静态博客。记录工具、技术、效率和日常实践，包含教程、评测与经验文章。

技术：Astro / GitHub / Cloudflare Pages。无需数据库和付费服务器。

- 博客：https://zheteng-youfang.pages.dev
- 仓库：https://github.com/pefish/zheteng-youfang
- 新建文章：[打开 GitHub 编辑器](https://github.com/pefish/zheteng-youfang/new/main/src/content/blog)
- 部署分支：`main`，推送后由 Cloudflare 自动构建发布。

## 文章目录

- [国内翻墙新手教程：良心云注册、订阅导入与常见问题](src/content/blog/liangxinyun-getting-started.md)

- [这个博客如何发布](src/content/blog/publish-markdown-blog.md)

## 本地使用

推荐 Node.js 22。

```bash
npm ci
npm run dev
npm run build
```

## 新建文章

```bash
npm run new-post -- my-article
```

生成的文章在 `src/content/blog/`，默认为草稿。写好后将 `draft: true` 改为 `draft: false`，提交并推送即可触发 Cloudflare 自动部署。

公开仓库中的草稿源文件也公开；不要把保密内容放入仓库。

文章字段：`title`、`description`、`pubDate` 必填；支持 `updatedDate`、`category`、`tags`、`draft`、`affiliate`。

图片放 `public/images/`，在文章中通过 `/images/example.png` 引用。示例代码放 `examples/`。

## Cloudflare Pages 首次配置

1. 将本项目推送到自己的 GitHub 仓库。
2. Cloudflare 控制台 → Workers & Pages → 创建 Pages 项目 → 连接 GitHub 仓库。
3. 部署分支：`main`；构建命令：`npm run build`；输出目录：`dist`。
4. 环境变量设置 `NODE_VERSION=22`。
5. 第一次部署取得免费 `https://项目名.pages.dev` 地址后，在构建环境变量设置 `SITE_URL=https://项目名.pages.dev`，重新部署。
6. 后续每次推送 `main` 自动发布。不需要额外的 Cloudflare API 密钥或 GitHub Actions 部署工作流。

`SITE_URL` 用于生成 canonical、sitemap 和 RSS 正式地址。未设置时优先使用 `CF_PAGES_URL`，本地构建不输出 sitemap；正式上线后应配置稳定的生产地址，避免预览域名成为 canonical。

## 站点配置

- `src/site.ts`：站点名称、介绍、GitHub仓库地址。
- `src/pages/about.astro`：关于页面。
- `src/pages/disclosure.astro`：推广与隐私声明。启用统计或其他功能时需同步修改。
- `src/styles/global.css`：样式。
- `public/_redirects`：后续如需旧网址重定向，可创建此文件。

## 推广链接

没有预置实际推广链接。有推广的文章设置 `affiliate: true`。在 Markdown 中可用 HTML 链接标记推广关系：

```html
<a href="你的真实推广链接" rel="sponsored nofollow">查看服务详情</a>
```

请先确认推广计划已批准你的实际渠道，并遵守 GitHub 对项目相关推广的限制。不要批量发布广告或在他人 Issues 中推广。

## 上线核对

- 确认名称、域名、内容和文章日期。
- 设置 `SITE_URL`，检查 `/robots.txt`、`/sitemap-index.xml` 和 `/rss.xml`。
- 将正式站点加入 Google Search Console 和 Bing Webmaster Tools。
- 检查手机阅读和所有外部链接。
- 如启用统计，更新隐私声明。

GitHub Actions 仅运行构建检查。实际发布由 Cloudflare 的 Git 集成完成。
