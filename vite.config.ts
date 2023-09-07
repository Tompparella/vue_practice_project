import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ _command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_PORT");
  const port = env.VITE_PORT;
  if (port === undefined) {
    console.warn(
      `No port defined in environment (${mode}) file! Running on default port 8000`
    );
  }
  return {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        vue: "vue/dist/vue.esm-bundler.js",
      },
    },
    plugins: [vue()],
    server: {
      port: port ?? 8000,
    },
  };
});
