import React from 'react';
import { Ui } from './Styles/Ui.jsx';
import { Searching } from './Styles/Searching.jsx';
import axios from 'axios';
import Form from './Components/Form.jsx';
import Response from './Components/Response.jsx';
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
    axios.get('https://api.themoviedb.org/3/search/movie?', {
      params: {
        api_key: APIKEY,
        language: `en-US`,
        query: this.state.searchTitle,
        page: 1,
        include_adult: this.state.explicit
      }
    })
    .then( ( response ) => {
      this.setState({
        title: response.data.results[0].title,
        overview: response.data.results[0].overview,
        releaseDate: response.data.results[0].release_date,
      })

      axios.get(`https://api.themoviedb.org/3/movie/${ response.data.results[0].id }`, {
        params: {
          api_key: APIKEY
        }
      })
      .then( ( response ) => {
        let runtimeHours = Math.round( ( response.data.runtime / 60 ) * 100 ) / 100
        this.setState({
          runTime: runtimeHours
        })
      })
      .catch( ( error ) => {
        console.log( 'There was an error, talk to staff')
      });

      axios.get( `https://api.themoviedb.org/3/movie/${ response.data.results[0].id }/credits`, {
        params:{
          api_key: APIKEY
        }
      })
      .then( ( response ) => {
        this.setState({
          searchTitle: '',
          top10Cast: response.data.cast.slice( 0, 10 )
        })
      })
      .catch( ( error ) => {
        console.log( 'There was an error, talk to staff')
      });
    }, ( error ) => {
      console.log( 'There was an error talk to staff' )
    });

  }

  type ( field, event ) {
    this.setState( { [ field ]: event.target.value } );

  }

  check ( event ) {
    this.setState( { explicit: !this.state.explicit } );
  }

  render() {
    return (
      <Ui>
        <Searching>
          <Form title={ this.state.searchTitle } explicit={ this.state.explicit } type={ this.type } submit={ this.submit } check={ this.check } />
          <Response title={ this.state.title } overview={this.state.overview} releaseDate={this.state.releaseDate} runTime={this.state.runTime} top10Cast={this.state.top10Cast}/>
        </Searching>
      </Ui>
    )
  }
}

export default App;