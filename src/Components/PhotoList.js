import React from 'react';

// Components
import Photo from './Photo';

const PhotoList = props => {
  
  const photoData = props.data;
  let photos;
  photos = photoData.map(photo => 
    <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
  );

  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default PhotoList;