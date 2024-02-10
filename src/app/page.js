import ProductList from "./../components/ProductList/ProductList";
import { Steps } from "./../components/Steps/Steps";
import BlogSection from "./../components/BlogSection/BlogSection";
import LogoClouds from "./../components/LogoClouds/LogoClouds";
export default function Home() {
  const Recomended = [1, 2, 3, 4];
  const Products = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <div>
        <img
          src="https://picsum.photos/600/200"
          alt="img"
          className="hero_img"
        />
      </div>
      <h1 className="title">Recomeded</h1>
      <ProductList products={Recomended} />
      <Steps />
      <h1 className="title">Products</h1>
      <ProductList products={Products} />
      <BlogSection />
      <LogoClouds />
    </div>
  );
}
