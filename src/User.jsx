import React from "react";

export default function User(user) {
  return (
    <div className="user">
      <h3>Name: {user.name}</h3>
      <h4>Email: {user.email}</h4>
      <h4>Phone: {user.number}</h4>
      <h4>Website: {user.site}</h4>
    </div>
  );
}
