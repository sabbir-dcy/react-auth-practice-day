import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const {mealId} = useParams()
  console.log(mealId)
  return (
    <div>
      <h2>this is details</h2>
    </div>
  );
};

export default Details;