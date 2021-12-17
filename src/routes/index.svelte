<script context="module" lang="ts">
	function videoUrl(id) {
		return `https://cdnvideo-api.appbazaar.com/hls/${id}/master.m3u8`;
	}
	export async function load({ fetch }) {
		const res = await fetch(`/api/videos.json`);
		const videos = await res.json();
		// const videos = new Uint8Array(buf);
		const filteredVideos = videos.map((video) => ({
			thumbnail: video.thumbnail,
			videoSrc: videoUrl(video.videoId)
		}));
		console.log(filteredVideos);
		return {
			props: {
				videos: filteredVideos
			}
		};
	}
</script>

<script lang="ts">
	import VerticalVideoContainer from '$lib/components/vertical-video-container/VerticalVideoContainer.svelte';
	export let videos: Uint8Array;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<VerticalVideoContainer {videos} />
