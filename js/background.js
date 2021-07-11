const backgrounds = [
    {
        img: "leonhart.jpg",
        music: {
            title: "vol1_02_Leonhart.wav",
            author: "Smilegate RPG",
        },
    },//1
    {
        img: "bern.jpg",
        music: {
            title: "vol3_05_Bern Castle.wav",
            author: "Smilegate RPG",
        },
    },//2
    {
        img: "sail.jpg",
        music: {
            title: "vol1_01_Sailing the Dream.wav",
            author: "Smilegate RPG",
        },
    },//3
    {
        img: "anich.jpg",
        music: {
            title: "vol3_08_Delphi County.wav",
            author: "Smilegate RPG",
        },
    },//4
    {
        img: "shoeshire.jpg",
        music: {
            title: "vol2_01_Prelude.wav",
            author: "Smilegate RPG",
        },
    },//5
    {
        img: "faten.jpg",
        music: {
            title: "vol1_14_Faten.wav",
            author: "Smilegate RPG",
        },
    },//6
    {
        img: "nia_village.jpg",
        music: {
            title: "vol3_07_Nia Village.wav",
            author: "Smilegate RPG",
        },
    },//7
];

const chosenBackgrounds = backgrounds[Math.floor(Math.random() * backgrounds.length)]

const bgImage = document.createElement("img");

bgImage.src = `src/img/${chosenBackgrounds.img}`
bgImage.classList.add("bgImg")
/*
const bgMusic = document.createElement("audio");

bgMusic.loop = true;
bgMusic.classList.add("bgm")

const bgMusicSource = document.createElement("source");
bgMusicSource.src = `src/music/${chosenBackgrounds.music.title}`

document.body.appendChild(bgMusic);
*/

document.body.appendChild(bgImage);

/*
const bgmSelector = document.querySelector(".bgm");
bgmSelector.appendChild(bgMusicSource);
bgmSelector.volume = 0.015;
*/