import videos from './topApps';

export async function get(): Promise<{ body: any }> {
	// const videos = await videosJson.json();
	// console.log(videos);
	// function videoUrl(id) {
	// 	return `https://cdnvideo-api.appbazaar.com/hls/${id}/master.m3u8`;
	// }
	return {
		body: JSON.stringify(videos)
	};
}
