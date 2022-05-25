import React from 'react';

function Input({props}) {
  return (
    <div>
      <h1>Nome de usuário</h1>
      <input value={props.value} />
    </div>
  );
}

export default Input;