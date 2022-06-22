import React from "react";

function Card(Prop) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{Prop.name}</h2>
          <img
            src={Prop.imgURL}
            alt="avatar_img"
            className="circle-img"
          />
        </div>
        <div className="bottom">
          <p className="info">{Prop.contactNumber}</p>
          <p className="info">{Prop.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
