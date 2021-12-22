<script lang="ts">
	import Video from '$lib/components/video/Video.svelte';
	import { onMount } from 'svelte';
	export let videos;

	onMount(() => {
		const width = window.innerWidth;
		const options = {
			root: null,
			rootMargin: '-10% 0px -85% 0px',
			threshold: width > 1600 ? 0.02 : 0.05
		};
		let observer = new IntersectionObserver(beTouching, options);
		document.querySelectorAll('video').forEach((v) => {
			observer.observe(v);
			//console.log("watching", v);
		});
		function beTouching(entries, ob) {
			console.log('beTouching', entries, ob);
			//entries all 30 paragraphs
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log('watching', entry.target);
					entry.target.play();
				} else {
					if (!entry.target.paused) {
						entry.target.pause();
					}
				}
			});
		}
	});
</script>

<section class="container">
	{#each videos as video}
		<Video thumbnail={video.thumbnail} videoSrc={video.videoSrc} />
	{/each}
</section>

<!-- <div class="cover" /> -->
<style>
	.cover {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 250px;
		left: 0;
		background-color: hsla(30deg, 40%, 80%, 0.9);
	}
</style>
