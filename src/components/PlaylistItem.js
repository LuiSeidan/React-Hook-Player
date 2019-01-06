import React from 'react';
import StyledPlaylistitem from './styles/StyledPlaylistItem';

const PlaylistItem = ({active, video, played}) => ( 
    <StyledPlaylistitem active={active} played={played}>
        <div className="wbn-player__video-nr">{video.num}</div>
        <div className="wbn-player__video-name">{video.titles}</div>
        <div className="wbn-player__video-time">{video.duration}</div>
    </StyledPlaylistitem>
)

export default PlaylistItem;