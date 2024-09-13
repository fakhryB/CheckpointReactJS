import product from "../product"
import Card from 'react-bootstrap/Card';

const Name=()=>{
    return(
        <Card.Title>{product.name}</Card.Title>
        // <h1>{product.name}</h1>
    )
}

export default Name