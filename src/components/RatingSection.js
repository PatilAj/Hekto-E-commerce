import React, {useState} from 'react';
import {Rating} from 'react-simple-star-rating';

export default function RatingSection (props) {
  const [setRating] = useState (0);

  // Catch Rating value
  const handleRating = rate => {
    setRating (rate);
  };
 
  const onPointerEnter = () => console.log ('Enter');
  const onPointerLeave = () => console.log ('Leave');
  const onPointerMove = (value, index) => console.log (value, index);

  return (
    <div className="App">
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        initialValue={props.rating}
        size={18}
      />
    </div>
  );
}
