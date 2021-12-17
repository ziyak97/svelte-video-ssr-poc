<script lang="ts">
	import Video from '$lib/components/video/Video.svelte';
	import * as flatbuffers from 'flatbuffers';
	import { MyGame } from '$lib/schemas/monster/monster_generated';

	export let videos: Uint8Array;

	console.log('videos', videos);

	let buf = new flatbuffers.ByteBuffer(videos);

	let monster = MyGame.Sample.Monster.getRootAsMonster(buf);

	let hp = monster.hp();
	let pos = monster.pos();
	let inventory = monster.inventoryArray();
	inventory.forEach((item) => {
		console.log(item);
	});

	console.log({ hp, pos, inventory });

	// let options = {
	// 	root: null,
	// 	rootMargin: '-250px -50px',
	// 	threshold: 0.05
	// };
	// let observer = new IntersectionObserver(beTouching, options);
	// document.querySelectorAll('video').forEach((v) => {
	// 	observer.observe(v);
	// 	//console.log("watching", p.textContent);
	// });
	// function beTouching(entries, ob) {
	// 	//entries all 30 paragraphs
	// 	entries.forEach((entry) => {
	// 		if (entry.isIntersecting) {
	// 			console.log('intersecting');
	// 			console.log(entry.target);
	// 			console.log(entry.time, entry.intersectionRatio);
	// 			// entry.target.classList.add('active');
	// 			//ob.unobserve(entry.target);
	// 		} else {
	// 			entry.target.classList.remove('active');
	// 		}
	// 	});
	// }
</script>

<section class="container">
	<Video />
	<Video />
	<Video />
	<Video />
	<Video />
	<Video />
	<Video />
	<Video />
	<Video />
	<iframe src="https://www.amazon.in/amazonprime" title="Amazon" />
</section>
<div class="cover" />

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
