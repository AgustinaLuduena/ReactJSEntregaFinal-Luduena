import { useContext } from 'react';
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import CardProduct from '../CardProduct/CardProduct';

const ListProduct = () => {
    const { products } = useContext(ProductContext);

  return (
    <div>
      <div className='grid'>
        {products.map((product) => {
          return(
            <Link to={`detail/${product.id}`} key={product.id} style={{ textDecoration: "none"}}>
              <CardProduct product={product} />
            </Link>
          )
        })}
      </div>
    </div>
  )
};

export default ListProduct;