import React from 'react';


export default function ContactButton() {
  function handleClick(e) {
    e.scrollToBottom();
  }
  
  return (
    <button onClick={handleClick}>Contact &darr;</button>
  );
}