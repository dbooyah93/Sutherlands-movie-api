import React from 'react';
import { Entry } from '../Styles/Entries.jsx';

const Form = ( { title, adult, submit, check } ) => {
  return (
    <div>
      <form onSubmit={ () => { submit( event ) } } >
        <div>
          <Entry>
            <div>
              Movie Title:
                <input
                type='text'
                name='new-ingredient'
                onChange={() => { type( 'ingredient', event ) } }
                placeholder='eg: Fight Club'
                />
            </div>
            <div>
              Adult content?
              <input
                type="checkbox"
                checked={ true }
                />
            </div>
          </Entry>
        </div>
      </form>
    </div>
  )
}

export default Form;