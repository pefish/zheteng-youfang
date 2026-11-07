import {writeFileSync,existsSync} from 'node:fs';
const slug=process.argv[2];
if(!slug||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)){console.error('用法：npm run new-post -- my-article');process.exit(1);}
const path=`src/content/blog/${slug}.md`;
if(existsSync(path)){console.error('文章已存在，未覆盖。');process.exit(1);}
const date=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Shanghai'}).format(new Date());
writeFileSync(path,`---\ntitle: "新文章标题"\ndescription: "说明这篇文章解决的问题。"\npubDate: ${date}\ncategory: "实践笔记"\ntags: []\ndraft: true\naffiliate: false\n---\n\n## 准备工作\n\n正文……\n`);console.log(`已创建 ${path}（草稿）`);
