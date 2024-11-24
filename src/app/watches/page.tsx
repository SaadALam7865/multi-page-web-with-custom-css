import { title } from "process";
import React from "react";


const watchesData = [
  {
    name: "Rolex",
    id: 1,
    title: "Luxury Watch",
    price: 12000,
    img: "/img-1.jpg",
  },
  {
    name: "Omega",
    id: 2,
    title: "Sporty Design",
    price: 8000,
    img: "/img-2.jpg",
  },
  {
    name: "Patek Philippe",
    id: 3,
    title: "Elegant timepiece",
    price: 6000,
    img: "/img3.jpg",
  },
  {
    name: "Tag Heuer",
    id: 4,
    title: "Sporty and Stylish",
    price: 5000,
    img: "/img-4.jpg",
  },
  {
    name: "Breitling",
    id: 5,
    title: "Bold and rugged",
    price: 11000,
    img: "/img-5.jpg",
  },
  {
    name: "Seiko",
    id: 6,
    title: "Reliable & Affordable",
    price: 9000,
    img: "/img-7.jpg",
  },
];

const watches = () => {
  return (
    <div>
      <div className="watches">
        {watchesData.map((watch) => (
          <div key={watch.id} className="watch-card">
           <img src={watch.img} alt={watch.name} />
           <h3>{watch.name}</h3>
           <p>{watch.title}</p>
           <div  className="price">${watch.price}</div>
           <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default watches;
