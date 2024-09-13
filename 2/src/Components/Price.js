import { Button } from "react-bootstrap"
import product from "../product"

const Price=()=>{
    return(
        // <h2>{product.price}</h2>
        <Button variant="primary">{product.price}</Button>
    )
}

export default Price