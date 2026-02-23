import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const isProd = process.env.BRANCH === 'main';
const isDev = process.env.BRANCH === 'dev';
const siteUrl = isProd ? 'https://sprints.minions.help' : (isDev ? 'https://sprints.minions.help' : 'http://localhost:4321');

export default defineConfig({
    site: siteUrl,
    integrations: [
        starlight({
            customCss: ['./src/styles/custom.css'],
            title: 'Minions Sprints',
            description: 'Sprint definitions, scope, and velocity tracking',
            defaultLocale: 'root',
            locales: {
                root: { label: 'English', lang: 'en' },
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/mxn2020/minions-sprints' },
                { icon: 'external', label: 'App', href: 'https://sprints.minions.wtf' },
            ],
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'Introduction', link: '/getting-started/introduction/' },
                        { label: 'Installation', link: '/getting-started/installation/' },
                        { label: 'Quick Start', link: '/getting-started/quick-start/' },
                    ],
                },
                {
                    label: 'Guides',
                    autogenerate: { directory: 'guides' },
                },
                {
                    label: 'API Reference',
                    items: [
                        { label: 'TypeScript', link: '/api/typescript/' },
                        { label: 'Python', link: '/api/python/' },
                    ],
                },
            ],
        }),
    ],
});
