import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
} from 'react-router-dom';

// api key
import apiKey from './config';

// components
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.flickrSearch();
  }

  flickrSearch = (query) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
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
            <SearchForm onSearch={this.flickrSearch} />
            <Nav />
            <Switch>
              <PhotoList data={this.state.photos} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
