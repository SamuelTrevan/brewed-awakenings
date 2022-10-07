import { getProducts } from "./database.js";

const products = getProducts();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  console.log(clickEvent);
  if (itemClicked.id.startsWith("product")) {
    const [, productKey] = itemClicked.id.split("--");
    let matchedProduct = null;
    for (const product of products) {
      if (product.id === parseInt(productKey)) {
        matchedProduct = product;
      }
    }
    window.alert(`${matchedProduct.name} is ${matchedProduct.price}`);
  }
});

export const Products = () => {
  let html = "<ul>";

  for (const product of products) {
    html += `<li id="product--${product.id}">${product.name}</li>`;
  }

  html += "</ul>";

  return html;
};
