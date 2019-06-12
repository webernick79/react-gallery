import React, { Component } from 'react';

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
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=flower&per_page=12&format=json&nojsoncallback=1`)
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
      <div className="container">
          <h1>Welcome to React Gallery</h1>
          <SearchForm />
          <PhotoList />
      </div>
    );
  }
}

export default App;
