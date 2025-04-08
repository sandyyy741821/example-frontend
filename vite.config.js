import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://mainfrontendnet.netlify.app/', 
    },
    host: 'mainfrontendnet.netlify.app', 
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'D:/Internship/server-github-services/frontend/example.com+2-key.pem')),  
    //   cert: fs.readFileSync(path.resolve(__dirname, 'D:/Internship/server-github-services/frontend/example.com+2-cert.pem')),
    // },
    strictPort: true,
  },
});
