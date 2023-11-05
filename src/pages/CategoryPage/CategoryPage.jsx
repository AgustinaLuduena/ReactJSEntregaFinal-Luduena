import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { ProductContext } from '../../context/ProductContext';
import CardProduct from '../../components/CardProduct/CardProduct';

const CategoryPage = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);

  useEffect(() => {}, [category]);

  return (
    <div  className='grid'>
      {products
        .filter((product) => product.category === category)
        .map((data) => (
          <div key={data.id}>
            <Link to={`detail/${data.id}`} key={data.id} style={{ textDecoration: "none"}}>
              <CardProduct product={data} key={data.id} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CategoryPage;

