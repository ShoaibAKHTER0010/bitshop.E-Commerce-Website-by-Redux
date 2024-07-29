"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/users?_quantity=6')
      .then(response => response.json())
      .then(data => setReviews(data.data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Client Reviews</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map(review => (
          <li key={review.id} className="p-4 border rounded shadow flex">
            <Image src={review.image} alt={review.firstname} width={"200"} height={"200"}  className="w-24 h-24 rounded-full mr-4" />
            <div>
              <h2 className="text-xl font-bold">{review.firstname} {review.lastname}</h2>
              <p>{review.email}</p>
              <span className="text-sm text-gray-500">{review.phone}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
