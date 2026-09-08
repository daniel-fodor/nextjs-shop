import ProductCard from "./product-card";
import { Product } from '@/types'

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const displayedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-10">
      <h2 className="text-2xl mb-4 font-bold">{title}</h2>
      {displayedData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedData.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No products available.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
