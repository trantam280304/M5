import { useParams } from "react-router-dom";

function Product() {
  let { categoryId } = useParams();
  return (
    <div>
      <h3>Công việc: {categoryId}</h3>
    </div>
  );
}

export default Product;