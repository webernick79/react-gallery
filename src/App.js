import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// api key
import apiKey from './config';

// components
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';


class App extends Component {
  
  constructor() {
    super();
    this.state ={
      photos: []
    };
  }

  componentDidMount() {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=flower&per_page=12&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData.photos.photo);
        this.setState({ photos: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <h1>Welcome to React Gallery</h1>
            <SearchForm />
            <PhotoList data={this.state.photos} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
