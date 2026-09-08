import { getLatestProducts } from "@/lib/actions/product.action";
import ProductList from "@/components/shared/product/product-list";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <div>
      <ProductList
        data={latestProducts}
        title="Featured Products"
        limit={4}
      />
    </div>
  );
};

export default HomePage;
