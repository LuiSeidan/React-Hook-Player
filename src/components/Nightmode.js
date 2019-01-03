import React from 'react';
import StyledNightmode from './styles/StyledNightmode';

const Nightmode = ({nightModeCallback, Nightmode}) => (
    <StyledNightmode>
        <span>Nightmode: </span>
        <label>
            <input type="checkbox" checked={Nightmode} onChange={nightModeCallback}/>
            <span className="slider round"/>
        </label>
    </StyledNightmode>
    )

export default Nightmode