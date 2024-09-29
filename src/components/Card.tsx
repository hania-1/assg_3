// components/Card.tsx

import React from 'react';

// Define an interface for the props
interface CardProps {
  image: string; // Expected type for image URL
  title: string; // Expected type for title
  desc: string;  // Expected type for description
}

// Use the interface in the functional component
const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="border-2 border-white border-solid m-4 max-w-xs p-4">
      <img className="w-32 h-32" src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
