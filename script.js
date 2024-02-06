const rightSection = document.getElementsByClassName("right-section")[0];
const leftSection = document.getElementsByClassName("left-section")[0];
let defaultImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJhajFxlmV7z28PjobcPjua_aa-tCuihzbg&usqp=CAU";
let countToshow;
// --------------------------------------
let productInfo = {};
let noOfproducts = 1;
let CartsProducts = [];

let selectedProduct = {
  color: "Yellow",
  noOfproducts: noOfproducts,
  price: "$12999",
  productType: "Cloth",
  size: "X",
  title: "Embrace Sideboard",
};
// -------------------------------------

function SelectColor(color) {
  let listOfcolors = document.getElementsByClassName("material-icons");

  for (let i = 0; i < listOfcolors.length; i++) {
    listOfcolors[i].classList.remove("show");
  }
  color.children[0].classList.add("show");

  selectedProduct = { ...selectedProduct, color: color.id };
}

function SelectSize(size) {
  const list = document.getElementsByClassName("radio");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("blue-color");
  }

  size.children[1].children[0].classList.add("blue-color");

  selectedProduct = { ...selectedProduct, size: size.id };
}

function AddToCart() {
  const messageEle = document.getElementsByClassName("Message-of-buy")[0];
  selectedProduct = {
    ...selectedProduct,
    price: productInfo.price,
    title: productInfo.title,
    productType: productInfo.product_type,
  };
  console.log(selectedProduct);
  messageEle.textContent = `${selectedProduct.title} with color ${selectedProduct.color} and size ${selectedProduct.size} added to cart. `;
  CartsProducts.push(selectedProduct);
  localStorage.setItem("cartsProducts", JSON.stringify(CartsProducts));

  selectedProduct = {
    color: "Yellow",
    noOfproducts: noOfproducts,
    price: "$12999",
    productType: "Cloth",
    size: "Small",
    title: "Embrace Sideboard",
  };
  console.log(selectedProduct);
}

function countNoOfproducts(btn) {
  countToshow = document.getElementById("countProducts");
  btn.value == "incre"
    ? noOfproducts++
    : noOfproducts == 1
    ? 1
    : noOfproducts--;

  selectedProduct = { ...selectedProduct, noOfproducts: noOfproducts };
  countToshow.innerHTML = selectedProduct.noOfproducts;
}

function showProductOnUI() {
  rightSection.innerHTML = `
    
    <div>
    <div class="vendor">Marmeto</div>
    <div class="title">Embrace Sideboard</div>
  </div>
  <hr />
  <div class="price-box">
    <div class="price-and-off">
      <div class="price" >${productInfo.price}.00</div>
      <div class="off">${productInfo.OffPercent}%off</div>
    </div>
    <div>
    <div class="cut-price">
    <div class="underline">________</div>
    <div>${productInfo.compare_at_price}</div>
    </div>
    
    </div>
  </div>
  <hr />
  <div class="colors-box">
    <p>choose a color</p>
    <div class="check-boxes">
      <div class="checkbox" onclick="SelectColor(this)" 
      id="Yellow" style="background-color:${productInfo?.options[0]?.values[0]?.Yellow}">
      <span class="material-icons">done</span>
            
      </div>
      <div class="checkbox" onclick="SelectColor(this)" 
      id="Green" style="background-color:${productInfo.options[0].values[1].Green}">
      <span class="material-icons">done</span>
      </div>
      <div class="checkbox" onclick="SelectColor(this)" 
      id="Blue" style="background-color:${productInfo.options[0].values[2].Blue}">
      <span class="material-icons">done</span>
      </div>
      <div class="checkbox" onclick="SelectColor(this)" 
      id="Pink" style="background-color:${productInfo.options[0].values[3].Pink}">
      <span class="material-icons">done</span>
      </div>
    </div>
    
  </div>
  <hr />
  <div class="sizes-box">
    <p>choose a size</p>
    <div class ="all-radios">
            <div class="radio-boxes" onclick="SelectSize(this)" id=${productInfo.options[1].values[0]}>
            <div class="radio-box">
                <div class="radio blue-color">
                
                </div>
                </div>
                <div>small</div>
            </div>
            <div class="radio-boxes" onclick="SelectSize(this)" id=${productInfo.options[1].values[1]}>
            <div class="radio-box">
            <div class="radio"></div>
            </div>
            <div>Medium</div>
          </div>
          <div class="radio-boxes" onclick="SelectSize(this)" id=${productInfo.options[1].values[2]}>
          <div class="radio-box">
          <div class="radio"></div>
          </div>
          <div>Large</div>
          </div>

        <div class="radio-boxes" onclick="SelectSize(this)" id=${productInfo.options[1].values[3]}>
        <div class="radio-box">
        <div class="radio"></div>
        </div>
        <div>Extra Large</div>
      </div>
      <div class="radio-boxes" onclick="SelectSize(this)" id=${productInfo.options[1].values[4]}>
      <div class="radio-box">
      <div class="radio"></div>
      </div>
      <div>XXL</div>
    </div>

  </div>
            
          </div>
         
  <div class="counter-add-tocart">
    <div class="counter">
      <button onclick="countNoOfproducts(this)" value="decre">-</button>
      <div id="countProducts">1</div>
      <button onclick="countNoOfproducts(this)" value="incre">+</button>
    </div>
    <div class="add-to-cart">
      <button onclick="AddToCart()">Add to Cart</button>
    </div>
  </div>
  <div class="Message-of-buy"></div>
  <div class="Description">
   ${productInfo.description}
  </div>
       
    
    `;
}

function showLeftPartOfUI() {
  leftSection.innerHTML = `
    <div class="upper-part-img">
          <img
          src=${productInfo.url1}
        
            alt="img"
          />
          
        </div>
        <div class="lower-part-imgs">
          <div class="box-thumbnail">
            <img
            src=${productInfo.url1}
              alt="img"
            />
          </div>
          <div class="box-thumbnail">
            <img
            src=${productInfo.url2}
              alt="img"
            />
          </div>
          <div class="box-thumbnail">
            <img
            src=${productInfo.url3}

              alt="img"
            />
          </div>
          <div class="box-thumbnail">
            <img
            src=${productInfo.url4}

              alt="img"
            />
          </div>
        </div>
    
    
    
    `;
}

function calculateOffPercent({ ...productInfo }) {
  let priceOnPrinted = Number(productInfo.compare_at_price.slice(1));
  let price = Number(productInfo.price.slice(1));
  let diff = priceOnPrinted - price;
  let percent = Math.floor((diff * 100) / priceOnPrinted);

  return percent;
}

function fetchPruducts() {
  fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json"
  )
    .then((res) =>
      res.json().then((data) => {
        productInfo = data.product;
        productInfo.url1 = defaultImg;
        productInfo.url2 = defaultImg;
        productInfo.url3 = defaultImg;
        productInfo.url4 = defaultImg;
        productInfo.OffPercent = calculateOffPercent(productInfo);
        showProductOnUI();
        showLeftPartOfUI();
        localStorage.setItem("product", JSON.stringify(productInfo));
      })
    )
    .catch((error) => {
      console.log(error);
    });
}

fetchPruducts();
