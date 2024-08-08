import React from "react";
import "./SavedCards.css";

function SavedCards({ cards }) {
  return (
    <div className="saved-cards-container">
      <div className="saved-cards-header">
        <span>����ī��</span>
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
      <button className="add-card-button">ī�� �߰��ϱ�</button>
    </div>
  );
}

export default SavedCards;
