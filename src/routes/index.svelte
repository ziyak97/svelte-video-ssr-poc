<script context="module" lang="ts">
	//getStatic
	export async function load({ fetch }) {
		const res = await fetch(`/api/videos.json`);
		const buf = await res.arrayBuffer();
		const videos = new Uint8Array(buf);

		return {
			props: {
				videos
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
