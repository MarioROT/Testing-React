import React from 'react';
import ReactDOM from 'react-dom/client';
import P from './components/paragraphLink/ParagraphLink';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <p href="http"> texto</p> */}
    <P href="https://legacy.reacjs.org/" color="red"> Pagina React </P>
    <P href="https://youtube.com" color="green" > Pagina Youtube </P>
    <P href="https://linkedin.com" color="purple">Pagina linkedin</P>
  </React.StrictMode>
);

