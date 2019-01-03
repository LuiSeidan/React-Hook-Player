import React from 'react';
import StyledPlaylistHeader from '../components/styles/StyledPlaylistHeader';
import StyledJouney from '../components/styles/StyledJourney';

const PlaylistHeader = ({ active, total}) => (
    <StyledPlaylistHeader>
        <p>{active.title}</p>
        <StyledJouney>
            {active.num} / {total}
        </StyledJouney>
    </StyledPlaylistHeader>
    )

export default PlaylistHeader