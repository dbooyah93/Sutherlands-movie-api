import React from 'react';

const Response = ( { title, overview, releaseDate, runTime, top10Cast } ) => {
  return (
    <div>
      <h1>Title: {title} </h1>
      <h3>Overview: {overview}</h3>
      <h3>ReleaseDate: {releaseDate}</h3>
      <h3>Run Time: {runTime}</h3>
      <h3>Top 10 Cast: {top10Cast}</h3>
    </div>
  )
}

export default Response;