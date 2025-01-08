import { defineConfig } from "vite";

export default defineConfig({
	server: {
		proxy: {
			"/api": {
				target: "https://www.fruityvice.com/api/fruit",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
		cors: true,
	},
});
