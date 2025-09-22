import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
	base: '/alaouda-deploy/',
	plugins: [react()],
	server: {
		host: '0.0.0.0',
		port: 5173
	},
	build: {
		// Code splitting optimization
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom'],
					utils: ['./src/utils/constants']
				}
			}
		},
		// Optimize bundle size
		minify: 'esbuild',
		// Copy and optimize assets
		copyPublicDir: true,
		assetsDir: 'assets'
	},
	// Performance optimizations
	optimizeDeps: {
		include: ['react', 'react-dom']
	}
});


