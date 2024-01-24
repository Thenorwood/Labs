function playNoteWithSleep(note, duration){
    const melodyOutput = document.getElementById("melodyOutput");
    melodyOutput.innerHTML +=`Play ${note}`;

    setTimeout(() =>{
        melodyOutput.innerHTML +=`Sleep ${duration}s`;
    },duration * 1000);


}
playNoteWithSleep(72, 0.25);
playNoteWithSleep(76, 0.25);
playNoteWithSleep(76, 0.25);
playNoteWithSleep(72, 0.25);
playNoteWithSleep(83, 0.25);
playNoteWithSleep(74, 0.25);
playNoteWithSleep(83, 0.25);
playNoteWithSleep(79, 0.25);
playNoteWithSleep(84, 0);

function attachMp3() {

    const audioPlayer = document.querySelector("audio");
    audioPlayer.src = "https://sonic-pi.mehackit.org/assets/audio/c-major-melody.mp3";
}

attachMp3();

