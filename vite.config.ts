import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
    const isProduction = command === 'build';

    return {
        // Handle WGSL shader files as raw text
        assetsInclude: ['**/*.wgsl'],

        build: {
            target: 'es2022',
            minify: isProduction ? 'esbuild' : false,
            sourcemap: !isProduction,
            emptyOutDir: true,
            rollupOptions: {
                output: isProduction
                    ? {
                          compact: true,
                          generatedCode: {
                              symbols: false,
                              constBindings: true,
                          },
                      }
                    : undefined,
            },
        },

        server: {
            open: true,
            hmr: true,
        },

        preview: {
            open: true,
        },
    };
});
