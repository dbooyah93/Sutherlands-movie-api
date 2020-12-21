import React from 'react';

const Cast = ( { top10Cast } ) => {
  if (top10Cast.length > 0) {
    return(
      <div>
        { top10Cast.map( ( cast, index ) => {
          return (
            <h4 key={index}>
              { cast.name }
            </h4>
          )
        })}
      </div>
    )
  } else {
    return (
      null
    )
  }
}

export default Cast;