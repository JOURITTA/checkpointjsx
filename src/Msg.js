import React from 'react';

const Msg = ({ prenom }) => {
  return (
    <div>
      <p>Bonjour, {prenom ? prenom : 'là'}!</p>
      {prenom && <img src="/jouri.jpg" alt="Image" width={200} height={200}/>}
    </div>
  );
}
export default Msg;