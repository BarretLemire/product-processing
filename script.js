const processProducts = (products, discountCategory, discountRate) => {
  const result = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.inStock) {
      let totalValue = product.price * product.quantity;

      if (product.category === discountCategory) {
        totalValue *= (1 - discountRate);
      }

      result.push({
        name: product.name,
        category: product.category,
        discountedTotalValue: totalValue.toFixed(2),
      });
    }
  }

  return result;
};

const startProcessing = () => {
  const products = [
    {
      name: "Laptop",
      category: "Electronics",
      price: 1000,
      quantity: 5,
      inStock: true,
    },
    {
      name: "Phone",
      category: "Electronics",
      price: 500,
      quantity: 0,
      inStock: false,
    },
    {
      name: "Shirt",
      category: "Apparel",
      price: 20,
      quantity: 100,
      inStock: true,
    },
    {
      name: "Jeans",
      category: "Apparel",
      price: 40,
      quantity: 50,
      inStock: true,
    },
    {
      name: "TV",
      category: "Electronics",
      price: 1500,
      quantity: 3,
      inStock: true,
    },
    {
      name: "Hat",
      category: "Apparel",
      price: 15,
      quantity: 200,
      inStock: true,
    },
  ];

  const discountCategory = "Apparel";
  const discountRate = 0.1; // 10% discount
  console.log(processProducts(products, discountCategory, discountRate));
};

startProcessing();
