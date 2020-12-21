import React from 'react';
import { Ui } from './Styles/Ui.jsx';
import { Searching } from './Styles/Searching.jsx';
import axios from 'axios';
import Form from './Components/Form.jsx';

import APIKEY from '../../APIKEY.jsx';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state= {
      searchTitle: '',
      explicit: true,
      title: '',
      overview: '',
      releaseDate: '',
      runTime: '',
      top10Cast: ''
    }
    this.type = this.type.bind( this );
    this.submit = this.submit.bind( this );
    this.check = this.check.bind( this );
  }



  submit ( event ) {
    event.preventDefault();
    const { searchTitle } = this.state;
    axios.get('https://api.themoviedb.org/3/search/movie?', {
      params: {
        api_key: APIKEY,
        language: `en-US`,
        query: 'Scott',
        page: 1,
        include_adult: false
      }
    })
    .then( ( response ) => {
      this.setState({
        title: response.data.results[0].title,
        overview: response.data.results[0].overview,
        releaseDate: response.data.results[0].release_date,
      })
      console.log(this.state.title)
      console.log(this.state.overview)
      console.log(this.state.releaseDate)

      axios.get(`https://api.themoviedb.org/3/movie/${ response.data.results[0].id }`, {
        params: {
          api_key: APIKEY
        }
      })
      .then( ( response ) => {
        console.log( response )
      })

    }, ( error ) => {
      console.log( error )
    });

  }

  type ( field, event ) {
    this.setState( { [ field ]: event.target.value } );
    console.log(this.state.searchTitle);

  }

  check ( event ) {
    this.setState( { explicit: !this.state.explicit } );
  }

  render() {
    return (
      <Ui>
        <Searching>
          <Form title={ this.state.searchTitle } explicit={ this.state.explicit } type={ this.type } submit={ this.submit } check={ this.check } />
        </Searching>
      </Ui>
    )
  }
}

export default App;