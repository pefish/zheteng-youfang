import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const site = process.env.SITE_URL || (process.env.CF_PAGES_URL && `${process.env.CF_PAGES_URL}`);
export default defineConfig({ site, integrations: site ? [sitemap()] : [], output: 'static' });
