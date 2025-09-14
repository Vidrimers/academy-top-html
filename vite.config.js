import { defineConfig } from 'vite'
import { exec } from 'child_process'

export default defineConfig({
  // base: './',
  plugins: [
    {
      name: 'custom-browser-opener',
      configureServer(server) {
        server.httpServer?.once('listening', () => {
          const url = `http://localhost:${server.config.server.port}`
          const browserPath = `"C:\\Users\\vidri\\AppData\\Local\\CentBrowser\\Application\\chrome.exe"`
          exec(`${browserPath} ${url}`, (err) => {
            if (err) {
              console.error('Ошибка при запуске браузера:', err)
            }
          })
        })
      },
    },
  ],
  server: {
    port: 666,
    open: false,
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       entryFileNames: 'src/assets/[name].js',
  //       chunkFileNames: 'src/assets/[name].js',
  //       assetFileNames: 'src/assets/[name][extname]',
  //     },
  //   },
  // },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       entryFileNames: 'assets/[name].js',
  //       chunkFileNames: 'assets/[name].js',
  //       assetFileNames: (assetInfo) => {
  //         if (assetInfo.name && assetInfo.name.endsWith('.css')) {
  //           return 'assets/css/[name][extname]'
  //         }
  //         return 'src/assets/[name][extname]'
  //       },
  //     },
  //   },
  // },
})
