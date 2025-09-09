/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tscanfigPaths from "vite-tsconfig-paths";

function getPlugins() {
  const plugins = [react(), tscanfigPaths()];
  return plugins;
}

export default defineConfig({
  plugins: getPlugins(),
  base: '/web99/', // 添加这一行
});
