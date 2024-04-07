import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import  { createProxyMiddleware } from "http-proxy-middleware"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    proxy: {
      "/v3.5": {
        target: "wss://spark-api.xf-yun.com",
        changeOrigin: true,
        secure: false, // 设置为 false，因为我们将通过代理服务器转发请求
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
