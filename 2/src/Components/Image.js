import product from "../product"
import Card from 'react-bootstrap/Card';
const Image=()=>{
    return(
        // <img src={product.url} alt="Not Found"/>
        <Card.Img variant="top" src={product.url} /> 
    )
}

export default Image