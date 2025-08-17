// vite.config.ts
import react from "file:///Users/debjyotimohapatra/learning%20projects/Portfolio-Projects/celestialUI-react/node_modules/.pnpm/@vitejs+plugin-react@4.3.3_vite@5.4.11_@types+node@22.9.0_sass@1.80.6_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import { defineConfig } from "file:///Users/debjyotimohapatra/learning%20projects/Portfolio-Projects/celestialUI-react/node_modules/.pnpm/vite@5.4.11_@types+node@22.9.0_sass@1.80.6/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/debjyotimohapatra/learning%20projects/Portfolio-Projects/celestialUI-react/node_modules/.pnpm/vite-plugin-dts@4.3.0_@types+node@22.9.0_rollup@4.25.0_typescript@5.6.3_vite@5.4.11_@types+node@22.9.0_sass@1.80.6_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/debjyotimohapatra/learning projects/Portfolio-Projects/celestialUI-react";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      outDir: "dist",
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      name: "CelestialUI",
      formats: ["es", "umd"],
      fileName: (format) => `celestial-ui.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime"
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "style.css";
          return assetInfo.name || "asset";
        }
      }
    },
    cssCodeSplit: false,
    sourcemap: true,
    emptyOutDir: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./lib/themes/base.css";`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGVianlvdGltb2hhcGF0cmEvbGVhcm5pbmcgcHJvamVjdHMvUG9ydGZvbGlvLVByb2plY3RzL2NlbGVzdGlhbFVJLXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZGVianlvdGltb2hhcGF0cmEvbGVhcm5pbmcgcHJvamVjdHMvUG9ydGZvbGlvLVByb2plY3RzL2NlbGVzdGlhbFVJLXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9kZWJqeW90aW1vaGFwYXRyYS9sZWFybmluZyUyMHByb2plY3RzL1BvcnRmb2xpby1Qcm9qZWN0cy9jZWxlc3RpYWxVSS1yZWFjdC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSwgXG4gICAgZHRzKHsgXG4gICAgICB0c2NvbmZpZ1BhdGg6ICcuL3RzY29uZmlnLmFwcC5qc29uJyxcbiAgICAgIG91dERpcjogJ2Rpc3QnLFxuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZVxuICAgIH0pXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdsaWIvbWFpbi50cycpLFxuICAgICAgbmFtZTogJ0NlbGVzdGlhbFVJJyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGNlbGVzdGlhbC11aS4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0L2pzeC1ydW50aW1lJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nLFxuICAgICAgICAgICdyZWFjdC9qc3gtcnVudGltZSc6ICdyZWFjdC9qc3gtcnVudGltZSdcbiAgICAgICAgfSxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09ICdzdHlsZS5jc3MnKSByZXR1cm4gJ3N0eWxlLmNzcydcbiAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWUgfHwgJ2Fzc2V0J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgZW1wdHlPdXREaXI6IHRydWVcbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCIuL2xpYi90aGVtZXMvYmFzZS5jc3NcIjtgXG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpYSxPQUFPLFdBQVc7QUFDbmIsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUhoQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUN2QyxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxDQUFDLFdBQVcsZ0JBQWdCLE1BQU07QUFBQSxJQUM5QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsYUFBYSxtQkFBbUI7QUFBQSxNQUNwRCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsVUFDYixxQkFBcUI7QUFBQSxRQUN2QjtBQUFBLFFBQ0EsZ0JBQWdCLENBQUMsY0FBYztBQUM3QixjQUFJLFVBQVUsU0FBUyxZQUFhLFFBQU87QUFDM0MsaUJBQU8sVUFBVSxRQUFRO0FBQUEsUUFDM0I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBYztBQUFBLElBQ2QsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
