import React from "react";
import { Card } from "react-bootstrap";

const Confirmation = ({ firstName, email }) => {
  const handleClick = () => {
    window.location.reload(false);
  };
  return (
    <Card>
      <Card.Body>
        <div className="card__title">Welcome</div>
        <h2>{firstName}!</h2>
        <div>
          <p>
            You have been registered for this awesome service. Please check your
            email listed below for instruction.
          </p>
          <p>
            <b>{email}</b>
          </p>
          <div className="position-relative my-4">
            <button className="submit" type="submit" onClick={handleClick}>
              sign in
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Confirmation;
