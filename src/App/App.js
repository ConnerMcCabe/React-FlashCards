import React from 'react';
import Accordion from '../Component/Accordion';
import './App.css';

export default function App() {
  return (
    <div>
      <Accordion 
        title="What is your return policy"
        content="lorem ipsum"
      />
      <Accordion 
        title="What is your return policy"
        content="
          <p>lorem ipsum kappa kappa </p>
          <p>lorem ipsum kappa kappa </p>
        "
      />
      <Accordion 
        title="What is your return policy"
        content="
          <p>lorem ipsum kappa slappa </p>
          </br>
          <p>lorem ipsum kappa slappa </p>
          </br>
          <p>lorem ipsum kappa slappa </p>
        "
      />
    </div>
  )
};