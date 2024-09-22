import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
// import vue from '@vitejs/plugin-vue'

const libName = 'duDialog'

export default defineConfig({
    build: {
        lib: {
            entry: `./src/${libName}.ts`,
            formats: ['es', 'umd'],
            name: libName,
            fileName: (format, entryName) => format == 'umd' 
                ? `${entryName}.js`
                : `${entryName}.${format}.js`,
        },
        minify: false,
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    return assetInfo.name === 'style.css'
                        ? `${libName}.css`
                        : assetInfo.name as string
                },
            }
        },
        target: 'ES2018',
    },
    plugins: [
        dts({
            exclude: [
                'node_modules/**',
                'src/helpers.ts',
            ],
        }),
        // vue(),
    ],
})
