/**
 * Toast Notification Utility
 * Shows temporary notification messages with animations
 */

export interface ToastOptions {
	message: string;
	duration?: number; // milliseconds
	type?: 'success' | 'error' | 'info';
}

export function showToast(options: ToastOptions) {
	const { message, duration = 3000, type = 'success' } = options;

	// Create toast element
	const toast = document.createElement('div');
	toast.className = 'toast fixed bottom-8 right-8 z-50 px-6 py-4 rounded-lg shadow-lg max-w-sm';

	// Set colors based on type
	const colors = {
		success: 'bg-[var(--color-tertiary)] text-white',
		error: 'bg-[var(--color-secondary)] text-white',
		info: 'bg-[var(--color-primary)] text-white',
	};

	toast.className += ` ${colors[type]}`;

	// Add icon based on type
	const icons = {
		success: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
		</svg>`,
		error: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
		</svg>`,
		info: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
		</svg>`,
	};

	toast.innerHTML = `
		<div class="flex items-center gap-3">
			${icons[type]}
			<span class="font-medium">${message}</span>
		</div>
	`;

	// Add to document
	document.body.appendChild(toast);

	// Remove after duration
	setTimeout(() => {
		toast.classList.add('hiding');
		setTimeout(() => {
			document.body.removeChild(toast);
		}, 200); // Match animation duration
	}, duration);
}

export function copyToClipboard(text: string, successMessage = 'Copied to clipboard!') {
	navigator.clipboard.writeText(text).then(
		() => {
			showToast({ message: successMessage, type: 'success' });
		},
		() => {
			showToast({ message: 'Failed to copy', type: 'error' });
		}
	);
}
