import React from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1>신발 상품 목록</h1>
      <p>현재 6개의 상품이 있습니다.</p>
    </header>
  );
}

function Item(props) {
  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.intro}</p>
      <h3>{props.price}</h3>
      <button>담기</button>
      <button>구매</button>
    </div>
  );
}

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
    <div className="app">
      <Header />
      <div className="items">
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            intro={item.intro}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
