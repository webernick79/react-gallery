import React, { Component } from "react";
// api key
import apiKey from "../config";

// Components
import Photo from "./Photo";

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true
    };
  }

  // call search on submit
  componentDidMount() {
    this.flickrSearch(this.props.match.params.query);
  }

  // checks for new query parameter
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.query !== this.props.match.params.query) {
      this.flickrSearch(this.props.match.params.query);
    }
  }

  flickrSearch = query => {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData.photos.photo);
        this.setState({ photos: responseData.photos.photo });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    const photoData = this.state.photos;
    let photos;
    photos = photoData.map(photo => (
      <Photo
        url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${
          photo.id
        }_${photo.secret}.jpg`}
        key={photo.id}
      />
    ));

    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>{photos}</ul>
      </div>
    );
  }
}
export default PhotoList;
