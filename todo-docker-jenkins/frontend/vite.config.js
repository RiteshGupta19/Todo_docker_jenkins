// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0', // This makes your app accessible externally
//     allowedHosts: ['43.204.131.219', 'localhost', 'frontend_cluster'], // Add the IP and hostname you want to allow
//   },
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This makes your app accessible externally
    allowedHosts: ['43.204.131.219', 'localhost', 'frontend_cluster'], // Add the IP and hostname you want to allow
    hmr: {
      host: '43.204.131.219', // This ensures WebSocket connects to public IP
      port: 5173, // WebSocket port
    },
    proxy: {
      '/api': 'http://43.204.131.219:5000', // Proxy API requests to backend
    },
  },
})
