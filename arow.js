let productsJSON = `[
        {
        "id": "1",
        "name": "Волк А",
        "price": "18$",
        "img": "https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fbase%2Fi9YO%252F4yHXUdJsWcTqhqvf%252BHEUKozl6pLwk%252BwDzjhjyEgM3R%252BxCf3PF%252BIQDaxeXfNGeihNjiln9o9q%252BLwrxa5nrlGzGxV5SO3mbP%252B3itfMR76cA5j4K6AUllqs7YuFX1j.png"
    },
    {
        "id": "2",
        "name": "Волк Б",
        "price": "25$",
        "img": "https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fbase%2Fi9YO%252F4yHXUdJsWcTqhqvf6CLPIqw2N2DU30blMpQBhGzYI5BdS%252FX%252F1EQpzjeuYXBolAcKxkNyTz8Mh5tkTUG9NBTj%252FGQmmL0BEVqz4TykuUV6vrhL54LZSb7kR7QhQAM.png"
    },
    {
        "id": "3",
        "name": "Волк В",
        "price": "35$",
        "img": "https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fbase%2Fi9YO%252F4yHXUdJsWcTqhqvf5a%252B%252FaozD63PvcEfgFTjd%252Bo9sKGEn1WJ9QSRgxrbxduzFPR51dB3ptFye2Byt6fLQRj0m73Ya9OzLQXVh7G8MBjayHpyFJ933y6nW%252Fz6eR0G.png"
    },
    {
        "id": "4",
        "name": "Волк Г",
        "price": "20$",
        "img": "https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fbase%2Fi9YO%252F4yHXUdJsWcTqhqvf3tkXDRDiFjH2vWVngfhRmFw5c2FqNbKkJN258ok6PUVe6rU5kPkkZur2xBOV1DAPxYL9%252BhgLYOWVIB%252Fb550VjbTOvH3%252BgSjqIxIF%252Bk5Q04z.png"
    },
    {
        "id": "5",
        "name": "Волк Д",
        "price": "19$",
        "img": "https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fbase%2Fi9YO%252F4yHXUdJsWcTqhqvfw5yhi1vHhVpOcNR33UEYR8hTsLxTe6arVIj1PDtVH63sjwDQZvl1OzZKBa%252FV77qpvHNd1DQ%252FU3QR0YBnesmKJMHvrCgs6eeDGUYFTircwuK.png"
    }
  
]`;

let main = document.querySelector("main");
let div = document.createElement("div");
div.className = "products";
main.appendChild(div);

let boxMag = JSON.parse(productsJSON);

for (let product of boxMag) {
  // console.log(product);
  // console.log(product.name);

  let divNew = document.createElement("div");
  div.append(divNew);
  divNew.className = 'product-item';

  let picture = document.createElement("img");
    picture.className = "imagePrice";
  picture.src = product.img;

  let p = document.createElement("h3");
  p.textContent = product.name;

  let price = document.createElement("p");
    price.textContent = product.price;

  let shopButton = document.createElement("div");
  shopButton.className = "add-button";
  shopButton.textContent = 'Купить';
    
  divNew.append(picture);
  divNew.append(shopButton)
  divNew.append(p);
  divNew.append(price);


  divNew.onclick = () => addToCart(product); /* функция добавляет  в нашем divNew по клику продукт */
}

function addToCart(product) {
  /*функция addToCart, которая при нажатии В корзину собирает данные о состоянии карточки товара ID - артикул, цвет и кол-во, которое нужно добавить. */

  let cart = JSON.parse(localStorage.getItem("cart")) || {}; /* в LokalStorege  получаем наши карточку продукта */

  if (cart[product.id]) {
    cart[product.id].amount += 1;
  } else {
    cart[product.id] = { ...product, amount: 1 };
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() { 
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  let itemCount = 0;

  for (const key in cart) {
    itemCount += cart[key].amount;
  }
  document.querySelector(".cart span").textContent = itemCount;
}
updateCartCount();
