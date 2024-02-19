import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import { Card } from 'react-bootstrap';
import Msg from './Msg';

const App = () => {
  const prenom = "Joury";
  return (
    <div>
      <Card style={{ width: '18rem', margin: 'auto', marginTop: '20px' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div>
      <Msg prenom={prenom}/>
      </div>
      
    </div>
  );
};

export default App;
