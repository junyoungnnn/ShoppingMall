import React from "react";
import "./SavedCards.css";

function SavedCards({ cards }) {
  return (
    <div className="saved-cards-container">
      <div className="saved-cards-header">
        <span>보유카드</span>
        <button className="header-icon">?</button>
      </div>

      {cards.map((card, index) => (
        <div className="saved-card" key={index}>
          <div className="card">
            <div className="chip"></div>
            <div className="card-number">{card.cardNumber}</div>
            <div className="card-details">
              <div className="card-name">{card.cardholderName}</div>
              <div className="card-expiry">{card.expiryDate}</div>
            </div>
          </div>
        </div>
      ))}
      <button className="add-card-button">카드 추가하기</button>
    </div>
  );
}

export default SavedCards;
