// import music from "https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/music/sad_scene.mp3"
// MusicPlayer.js
import React, { useEffect, useRef, useState } from 'react';
import { useToast } from "@chakra-ui/react";
import { Howl, Howler } from 'howler';
import { toastSuccess } from '../utilities/chakraui_toast';
import { useTranslation } from 'react-i18next';


const useMusicPlayer = () => {
	const soundRef = useRef(null);
	const [musicList, setMusicList] = useState([]);
	const [volume, setVolume] = useState(0.5);
	// let musicIndex = 0;
	let musicIndex = parseInt(Math.random() * musicList.length - 1);

	const toast = useToast();

	// translation
	const { t, i18n } = useTranslation();

	// get music list
	useEffect(() =>{
		fetch("https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/music/list.json").then(response => response.json()).then(response =>{
			setMusicList(response.list);
		});
	}, []);

	// Howler function
	Howler.volume(volume);
	function createPlayer(){
		const sound = new Howl({
			src: [musicList[musicIndex]],
			autoplay: false,
			html5: true,
			loop: false,
			onend: handleSongEnd,
		});

		soundRef.current = sound;
	}
	function play(){
		if(musicList.length === 0){
			return;
		}
		if (soundRef.current) {
			soundRef.current.stop();
			soundRef.current.unload();
		}
		createPlayer();
		console.log(musicIndex);
		soundRef.current.play();

		toast(toastSuccess(null, t("Music will start in a moment")));
	};

	function stop(){
		if(!soundRef.current){
			return;
		}
		soundRef.current.stop();
		toast(toastSuccess(null, t("Music stoped")));
	};
	function handleSongEnd(){
		console.log("End");
		// musicIndex = musicIndex > musicList.length ? 0 : musicIndex + 1;
		musicIndex = parseInt(Math.random() * musicList.length - 1);
		// toast(toastSuccess(null, t("Changing to : ") + musicIndex))
		console.log(musicIndex);
		play();
	};
	

	return {
		play,
		stop,
		setMusicList,
		musicList,
		setVolume,
		volume,
	};
};

export default useMusicPlayer;
