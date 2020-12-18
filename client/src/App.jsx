import React from 'react';
import { Ui } from './Styles/Ui.jsx';
import { Searching } from './Styles/Searching.jsx';
import Form from './Components/Form.jsx';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state= {
      title: '',
      explicit: true,
    }
    //this.function = this.function.bind(this)
  }
  //function
  render() {
    return (
      <Ui>
        <Searching>
          <Form title={this.state.title} explicit={ this.state.explicit } />
        </Searching>
      </Ui>
    )
  }
}

export default App;