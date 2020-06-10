import React, { useState } from 'react';

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
            </button>
            <div className="accordionContent"></div>
            <div className="accordionText" dangerouslySetInnerHTML={{ __html: props.content}} />
        </div>
    )
};

export default Accordion;