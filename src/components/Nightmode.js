import React from 'react';
import StyledNightmode from './styles/StyledNightmode';

const Nightmode = ({nightModecallback, nightMode}) => ( 
    <StyledNightmode>
        <span>nightmode:</span>
        <label className="switch">
            <input type="checkbox" checked={nightMode} onChange={nightModecallback}/>
            <span className="slider round"/>
        </label>
    </StyledNightmode>
)

export default Nightmode;