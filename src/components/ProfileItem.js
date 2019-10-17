import React from "react";

const ProfileItem = props => {
  return (
    <div className="profile__text">
      <span className="profile__text__span">{props.quest}</span>
      {props.data}
    </div>
  );
};

export default ProfileItem
