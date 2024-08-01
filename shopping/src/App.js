// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MyCard from "./MyCard"; // Ensure this path is correct
import Header from "./Header"; // Ensure this path is correct
import Item from "./Item"; // Ensure this path is correct

function App() {
  const items = [
    {
      id: 1,
      name: "브랜드A",
      intro: "편안하고 착용감이 좋은 신발",
      price: "35,000원",
      image: "./images/shoes.png",
    },
    {
      id: 2,
      name: "브랜드A",
      intro: "힙한 컬러가 매력적인 신발",
      price: "25,000원",
      image: "./images/shoes.png",
    },
    {
      id: 3,
      name: "브랜드B",
      intro: "편안하고 착용감이 좋은 신발",
      price: "35,000원",
      image: "./images/shoes.png",
    },
    {
      id: 4,
      name: "브랜드B",
      intro: "힙한 컬러가 매력적인 신발",
      price: "35,000원",
      image: "./images/shoes.png",
    },
    {
      id: 5,
      name: "브랜드C",
      intro: "편안하고 착용감이 좋은 신발",
      price: "35,000원",
      image: "./images/shoes.png",
    },
    {
      id: 6,
      name: "브랜드C",
      intro: "힙한 컬러가 매력적인 신발",
      price: "35,000원",
      image: "./images/shoes.png",
    },
  ];

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="items">
                {items.map((item) => (
                  <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    intro={item.intro}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
            }
          />
          <Route path="/mycard" element={<MyCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
