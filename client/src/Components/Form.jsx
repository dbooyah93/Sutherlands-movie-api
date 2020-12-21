import React from 'react';
import { Entry } from '../Styles/Entries.jsx';

const Form = ( { title, explicit, type, submit, check } ) => {
  return (
    <div>
      <Entry onSubmit={ () => { submit( event ) } }>
          Movie Title:
            <input
            type='text'
            name='new-ingredient'
            onChange={() => { type( 'title', event ) } }
            placeholder='eg: Fight Club'
            />
          Adult content?
          <input
            type='checkbox'
            checked={ explicit }
            onChange={ () => { check( event ) }}
            />
            <input type='submit' value='Submit' />
      </Entry>
    </div>
  )
}

export default Form;