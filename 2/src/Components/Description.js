import product from "../product"
import Card from 'react-bootstrap/Card';
const Description=()=>{
    return(
        // <h3>{product.description}</h3>
        <Card.Text>
          {product.description}
        </Card.Text>
    )
}

export default Description