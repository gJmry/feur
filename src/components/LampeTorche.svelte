<script>
	let x = 0;
	let y = 0;
	let flicker = 1;
	let sway = 1;
	let badFlicker = false;
	let lastBadFlicker = 0;

	function handleMouseMove(event) {
		x = event.clientX;
		y = event.clientY;
	}

	function animateFlicker(now) {
		sway = 0.95 + 0.01 * Math.sin(now / 10000);
		let subtle = 0.98 + Math.random() * 0.03;
		if (!badFlicker && now - lastBadFlicker > 3500 + Math.random() * 3500) {
			badFlicker = true;
			lastBadFlicker = now;
			setTimeout(() => { badFlicker = false; }, 20 + Math.random()*120);
		}
		flicker = badFlicker ? 0.65 + Math.random()*0.08 : subtle;
		requestAnimationFrame(animateFlicker);
	}

	import { onMount } from 'svelte';
	onMount(() => {
		requestAnimationFrame(animateFlicker);
	});
</script>

<style>
	.torch-overlay {
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 11; /* lower than fireflies */
		--flash-x: 50vw;
		--flash-y: 50vh;
		transition: background 0.11s;
	}
</style>

<svelte:window on:mousemove={handleMouseMove} />

<div
		class="torch-overlay"
		style="
		--flash-x: {x}px;
		--flash-y: {y}px;
		background:
			radial-gradient(
				circle {120 * flicker * sway}px at var(--flash-x) var(--flash-y),
				rgba(0,0,0,{0.11 * sway}) 0 {90 * flicker * sway}px,
				rgba(0,0,0,0.85) {170 * flicker * sway}px
			);
	"
/>