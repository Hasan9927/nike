import PopularProductCard from '../Components/PopularProductCard';
import { products } from '../Constants';
const PopulerProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Populer</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and styles with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-col-3 sm:grid-col-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map(product => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopulerProducts;
