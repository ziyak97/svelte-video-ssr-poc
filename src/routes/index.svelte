<script context="module" lang="ts">
	import type { LoadInput } from '@sveltejs/kit';
	import shuffle from '$lib/utils/shuffle';

	function videoUrl(id) {
		return `https://cdnvideo-api.appbazaar.com/hls/${id}/master.m3u8`;
	}
	export async function load({ fetch, page }: LoadInput) {
		const seed = parseInt(page.query.get('seed')) || 0;

		const res = await fetch(`/api/videos.json`);
		const videos = await res.json();
		// const videos = new Uint8Array(buf);
		const filteredVideos = videos.map((video) => ({
			thumbnail: video.thumbnail,
			videoSrc: videoUrl(video.videoId)
		}));
		const shuffledVideos = shuffle(filteredVideos, seed);
		return {
			props: {
				videos: shuffledVideos
			}
		};
	}
</script>

<script lang="ts">
	import VerticalVideoContainer from '$lib/components/vertical-video-container/VerticalVideoContainer.svelte';
	export let videos: Uint8Array;
</script>

<VerticalVideoContainer {videos} />
