const songMaker = new SongMaker();
songMaker.song.note("sine", 0, 1, 60, 0.5)
songMaker.song.note("sine", 1, 2, 64, 0.5)
songMaker.render().then(blob => {
	const url = URL.createObjectURL(blob);
	const audio = new Audio(url);
	audio.play();
	setTimeout(function() {
		URL.revokeObjectURL(url);
	}, 1000)
})
