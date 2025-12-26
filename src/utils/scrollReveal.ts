/**
 * Scroll Reveal Utility
 * Adds reveal animations to elements when they enter the viewport
 */

export function initScrollReveal() {
	// Check if IntersectionObserver is supported
	if (!('IntersectionObserver' in window)) {
		// Fallback: just show all elements
		document.querySelectorAll('.reveal, .reveal-fade').forEach((el) => {
			el.classList.add('is-visible');
		});
		return;
	}

	const observerOptions = {
		root: null,
		rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
		threshold: 0.1,
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-visible');
				// Optional: stop observing after animation
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe all elements with reveal classes
	document.querySelectorAll('.reveal, .reveal-fade').forEach((el) => {
		observer.observe(el);
	});
}

// Initialize on page load
if (typeof window !== 'undefined') {
	// Initial load
	document.addEventListener('DOMContentLoaded', initScrollReveal);

	// Re-initialize after Astro view transitions
	document.addEventListener('astro:page-load', initScrollReveal);
}
