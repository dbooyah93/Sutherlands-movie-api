import React from 'react';
import { Ui } from './Styles/Ui.jsx';
import { Searching } from './Styles/Searching.jsx';
import Form from './Components/Form.jsx';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state= {

    }
  }
  render() {
    return (
      <Ui>
        <Searching>
          Hello world
          <Form />
        </Searching>
      </Ui>
    )
  }
}

export default App;