import React, { useState } from "react";
import "./CardForm.css";
import { FaArrowLeft, FaTimes } from "react-icons/fa"; // Import icons

function CardForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [cvc, setCvc] = useState("");
  const [password, setPassword] = useState("");

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // 숫자가 아닌 문자는 제거
    if (value.length <= 16) {
      setCardNumber(value);
    }
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,4}$/.test(value)) {
      setExpiryDate(value);
    }
  };

  const handleCvcChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,3}$/.test(value)) {
      setCvc(value);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,2}$/.test(value)) {
      setPassword(value);
    }
  };

  const maskCardNumber = (number) => {
    if (number.length <= 8) {
      return number.padEnd(16, "•");
    }
    const visiblePart = number.slice(0, 8);
    const maskedPart = "*".repeat(number.length - 8);
    return visiblePart + maskedPart.padEnd(8, "•");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newCard = {
    //   cardNumber: maskCardNumber(cardNumber),
    //   expiryDate: expiryDate
    //     ? `${expiryDate.slice(0, 2)}/${expiryDate.slice(2, 4)}`
    //     : "MM/YY",
    //   cardholderName: cardholderName || "NAME",
    // };
  };

  return (
    <div className="card-form-container">
      <div className="card-form-header">
        <FaArrowLeft className="header-icon" />
        <span>카드 추가</span>
        <FaTimes className="header-icon" />
      </div>

      <div className="card-preview">
        <div className="card">
          <div className="chip"></div>
          <div className="card-number">{maskCardNumber(cardNumber)}</div>
          <div className="card-details">
            <div className="card-name">{cardholderName || "NAME"}</div>
            <div className="card-expiry">
              {expiryDate
                ? `${expiryDate.slice(0, 2)}/${expiryDate.slice(2, 4)}`
                : "MM/YY"}
            </div>
          </div>
        </div>
      </div>

      <form className="card-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>카드 번호</label>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="16"
            minLength="16"
            placeholder="1234 5678 9012 3456"
          />
        </div>

        <div className="form-group">
          <label>만료일</label>
          <input
            type="text"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            maxLength="4"
            minLength="4"
            placeholder="MMYY"
          />
        </div>

        <div className="form-group">
          <label>카드 소유자 이름</label>
          <input
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            minLength="1"
            placeholder="CARDHOLDER NAME"
          />
        </div>

        <div className="form-group">
          <label>보안 코드(CVC/CVV)</label>
          <input
            type="password"
            value={cvc}
            onChange={handleCvcChange}
            maxLength="3"
            minLength="3"
            placeholder="123"
          />
        </div>

        <div className="form-group">
          <label>카드 비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            maxLength="2"
            minLength="2"
            placeholder="••"
          />
        </div>

        <button type="submit">작성 완료</button>
      </form>
    </div>
  );
}

export default CardForm;
