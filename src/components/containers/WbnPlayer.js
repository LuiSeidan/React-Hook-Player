import React, {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import Video from '../Video';
import Playlist from './Playlist';
import StyledWbnPlayer from '../styles/StyledWbnPlayer';

const theme = {
    bgcolor: "#353535",
    bgcoloritem: "#414141",
    bgcolorItemActive: "#405c63",
    bgcolorPlayed: "#526d4e",
    border: "none",
    borderPlayed: "none",
    color: "#fff"
}

const themeLight = {
    bgcolor: "#fff",
    bgcoloritem: "#fff",
    bgcolorItemActive: "#80a7b1",
    bgcolorPlayed: "#7d9979",
    border: "1px solid #353535",
    borderPlayed: "none",
    color: "#353535"
}

const videos = JSON.parse(document.querySelector('[name="videos"]').value)

const {state, setState} = useState({
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    nightMode: true,
    playlistId: videos.playlistId,
    autoplay: false,
});

const nightModeCallback = () => {

}

const endCallback = () => {

}

const progressCallback = () => {

}

const WbnPlayer = props => {
    return(
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            {state.videos !== null ? (
            <StyledWbnPlayer>
            <Video 
                active={state.activeVideo}
                autoplay={state.autoplay}
                endCallBack={endCallback}
                progressCallBack={progressCallback}
            />
            <Playlist 
                videos={state.videos}
                active={state.activeVideo}
                nightModeCallback={nightModeCallback}
                nightMode={nightMode}
            />   
            </StyledWbnPlayer>
            ) : null }
        </ThemeProvider>
    )
}