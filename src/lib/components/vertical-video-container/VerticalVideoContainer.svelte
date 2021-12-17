<script lang="ts">
	import Video from '$lib/components/video/Video.svelte';
	import { onMount } from 'svelte';
	export let videos;

	onMount(() => {
		let options = {
			root: null,
			rootMargin: '-250px -50px',
			threshold: 0.05
		};
		let observer = new IntersectionObserver(beTouching, options);
		document.querySelectorAll('video').forEach((v) => {
			observer.observe(v);
			//console.log("watching", v);
		});
		function beTouching(entries, ob) {
			//entries all 30 paragraphs
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log('intersecting', entry.target.play());
					console.log(entry.target);
					console.log(entry.time, entry.intersectionRatio);
					// entry.target.classList.add('active');
					//ob.unobserve(entry.target);
				} else {
					if (!entry.target.paused) entry.target.pause();
					// entry.target.classList.remove('active');
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
