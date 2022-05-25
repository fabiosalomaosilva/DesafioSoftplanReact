import React from 'react';

export default function MenuBarItem(props) {
  return (
    <>
      <div className="box-menu-bar-item">
        {props.image}
        <span className="item-menu-bar-title">{props.title}</span>
      </div>
    </>
  );
}
