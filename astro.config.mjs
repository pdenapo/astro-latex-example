import { defineConfig } from 'astro/config';

// https://astro.build/config
// https://ileumas.com/writing/2022/03/astro-math-katex/

export default defineConfig({
    markdown: {
        remarkPlugins: [
            'remark-math',
        ],
        rehypePlugins: [
            ['rehype-katex', {
                trust: true
            // Katex plugin options
            }]
        ]
    }
});
