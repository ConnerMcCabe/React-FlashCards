import React, { useState } from 'react';
import Chevron from './chevron';
import './Accordion';

function Accordion(props) {

    const [setActive, setActiveState] = useState('');

    function toggleAccordion() {
        setActiveState(setActive === '' ? 'active' : '')
    };

    return (
        <div className="accordionSection">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordionTitle">{props.title}</p>
            <Chevron width={10} fill={'#777'}/>
            </button>
            <div className="accordionContent"></div>
            <div 
                className="accordionText" 
                dangerouslySetInnerHTML={{ __html: props.content}} 
            />
        </div>
    )
};

export default Accordion;