<script lang="ts">
	import Hls from 'hls.js';
	import { onMount, onDestroy } from 'svelte';
	import { play, pause } from './events';
	export let thumbnail;
	export let videoSrc;

	let videoElement: HTMLVideoElement;
	let hls: Hls;

	onMount(() => {
		hls = new Hls();

		hls.attachMedia(videoElement);
		hls.on(Hls.Events.MEDIA_ATTACHED, function () {
			console.log('video and hls.js are now bound together !');
			hls.loadSource(videoSrc);
			hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
				console.log('manifest loaded, found ' + data.levels.length + ' quality level');
			});
		});
	});

	onDestroy(() => {
		if (hls) hls.destroy();
	});
</script>

<div>
	<!-- maybe we should add captions as an option for deaf users -->
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		bind:this={videoElement}
		on:click={() => (videoElement.paused ? play(videoElement) : pause(videoElement))}
		poster={thumbnail}
	/>
</div>

<style>
	video {
		width: 100%;
		height: 50vw;
		object-fit: fill;
	}
</style>
