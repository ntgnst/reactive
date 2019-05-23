import React from 'react';
import ReactDomServer from 'react-dom/server';
import ReactDom from 'react-dom';
import TryingHOCComponent from '../src/components/TryingHOCComponent';
import fetch from 'isomorphic-fetch';

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(data => data.json())
  .then(data => {
    const result = ReactDomServer.renderToString(<TryingHOCComponent list={data} />);
    console.log(result);
  });
