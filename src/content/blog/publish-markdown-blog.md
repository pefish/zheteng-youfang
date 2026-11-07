---
title: "这个博客如何发布：写 Markdown，提交后自动上线"
description: "本站的文章维护流程：修改 Markdown、提交到 GitHub，由 Cloudflare Pages 构建为静态网页。"
pubDate: 2026-11-07
category: "建站笔记"
draft: true
tags: ["Markdown", "Astro", "GitHub"]
---

这个站点采用静态博客结构：文章和网站代码保存在 GitHub，Astro 将 Markdown 生成网页，Cloudflare Pages 负责托管与自动部署。

## 发布一篇文章

在 `src/content/blog/` 中新增一个 Markdown 文件。文件名用简洁、稳定的英文短语，例如 `deploy-n8n.md`，它会成为文章网址的一部分。

文章开头填写标题、简介和日期：

```yaml
---
title: "你的文章标题"
description: "一句话说明读者能从这篇文章中得到什么。"
pubDate: 2026-11-07
category: "部署教程"
tags: ["Docker", "自动化"]
draft: false
---
```

接下来就是正文。二级标题会自动出现在文章目录里，代码块可以注明语言，方便阅读。

## 从提交到上线

连接 Cloudflare Pages 后，推送到部署分支会触发构建。构建成功后，新版本会自动替换线上版本；如果构建失败，需要查看构建日志并修正问题。

```bash
git add .
git commit -m "docs: publish new article"
git push
```

也可以直接通过 GitHub 网页编辑文章并提交，不需要每次在电脑上运行命令。

## 草稿和文章更新

暂时不公开的文章设置 `draft: true`，不会出现在博客列表、RSS 或生成的文章页面里。但如果仓库公开，草稿源文件仍然可以被任何人读取。敏感或未准备公开的内容应保存在仓库外。

修改旧文章时，可以添加 `updatedDate`，保留原发布时间。网址发布后尽量不改；必须改动时，应配置重定向。

## 配图和配套代码

图片放在 `public/images/`，正文中使用 `/images/文件名.png` 引用。可运行示例放在仓库的 `examples/`，并说明依赖、操作步骤和适用版本。

不要上传密码、API 密钥、服务器访问凭证或个人资料。配置示例用占位值，并清楚标注需要替换的部分。

## 关于推广链接

包含推广链接时，在文章信息中设置 `affiliate: true`，页面会显示推广声明。链接应放在真正相关的操作步骤中，解释产品用途和适用条件。

本站尚未配置任何实际返佣链接。这篇文章介绍发布流程，不构成对任何付费产品的购买建议。
