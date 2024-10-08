const maker = new SongMaker();
maker.song.note("sine", 0, 1, 60, 0.5);
maker.song.note("sine", 0, 1, 72, 0.5);
const audioBlob = await maker.render("blob");
const url = URL.createObjectURL(audioBlob);
const audio = new Audio(url);
audio.play();
setTimeout(function() {
	URL.revokeObjectURL(url);
}, 1000)
