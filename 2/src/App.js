import './App.css';
import Description from './Components/Description';
import Image from './Components/Image';
import Name from './Components/Name';
import Price from './Components/Price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
  return (
    <div>
   
      
   

      
      <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Image/>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Name/>
        <Description/>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="primary"></Button> */}
        <Price/>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
