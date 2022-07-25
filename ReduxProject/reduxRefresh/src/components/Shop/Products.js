import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const Dummy_Product = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "Firt book I wrote",
  },
  {
    id: "p2",
    price: 10,
    title: "My Second Book",
    description: "Second book I wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Product.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
