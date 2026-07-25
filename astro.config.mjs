import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';

// https://starlight.astro.build/reference/configuration
export default defineConfig({
  site: 'https://kitty-hivens.github.io',
  base: '/YukiUI-wiki',
  integrations: [
    starlight({
      plugins: [
        starlightThemeNova(/* options */),
      ],
      title: 'YukiUI',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Kitty-Hivens/YukiUI', },
        { icon: 'pen', label: 'GitHub (wiki)', href: 'https://github.com/Kitty-Hivens/YukiUI-wiki', },
      ],
      editLink: {
        baseUrl: 'https://github.com/Kitty-Hivens/YukiUI-wiki/tree/main',
      },
      customCss: ['./src/styles/custom.css'],
      tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 2, },
      favicon: './favicon.ico',
      lastUpdated: true,
      defaultLocale: 'en',
      // English docs in `src/content/docs/en/`
      // Other lang docs in `src/content/docs/<lang>/`
      // See also https://github.com/CloudCannon/pagefind/tree/main/pagefind_ui/translations
      locales: {
        'en': {
          label: 'English', // Engligh
          lang: 'en',
        },

        'ru': {
          label: 'Русский', //Russian
          lang: 'ru',
        },
      },
      sidebar: [
        {
          label: 'General',
          translations: {
            'ru': 'Общее',
          },
          autogenerate: { directory: 'general' },
        },
        {
          label: 'YukiUI',
          collapsed: false,
          autogenerate: { directory: 'ii-qs' },
        },
        {
          label: 'Dev Notes',
          collapsed: true,
          badge: { text: 'Dev' },
          translations: {
            'ru': 'Для разработчиков',
          },
          autogenerate: { directory: 'dev' },
        },
      ],
    }),
  ],
});
