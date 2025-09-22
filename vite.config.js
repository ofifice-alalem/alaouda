import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
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
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		}
	},
	// Performance optimizations
	optimizeDeps: {
		include: ['react', 'react-dom']
	}
});


