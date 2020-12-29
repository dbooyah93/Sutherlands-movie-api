import React from 'react';
import Cast from './Cast.jsx';

const Response = ( { title, overview, releaseDate, runTime, top10Cast } ) => {
  let hours = runTime === '' ? '' : 'hours';
  let hr = '';
  let min = '';
  let colon = '';
  if ( runTime !== '' ) { // so runTime ~~~ 160
    hr = Math.floor( runTime / 60 );
    colon = ':';
    min = ( ( runTime % 60 ) + '0' ).slice( 0, 2 );
  }
  return (
    <div>
      <h1>Title: { title } </h1>
      <h3>Overview: { overview }</h3>
      <h3>Release Date: { releaseDate }</h3>
      <h3>Run Time: { hr + colon + min }</h3>
      <h3>Cast: <Cast top10Cast={ top10Cast }/></h3>
    </div>
  )
}

export default Response;