import { defineConfig } from 'vite'
import { exec } from 'child_process'

export default defineConfig({
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
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
