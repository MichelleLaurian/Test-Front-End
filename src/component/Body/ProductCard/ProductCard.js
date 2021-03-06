import React from "react";
import "./ProductCard.css";
import formatCurrency from 'format-currency';
import Rate from "../../Rate";

const ProductCard = ({ product }) => {
    let opts = {format:'%s%v', symbol: "$"}
 return (
  <div className="container list__wrapper">
      <div className="productCard__wrapper">
   <div>
    <img src={product.imageUrl} className="productCard
    __img" />
    <h5>{product.productName}</h5>
    <div className="ProductCard__price">
        <h5>Por {formatCurrency(`${product.price}`, opts)}</h5>

<div className="ProductCard__Rateing">
    <Rate value={product.starts}/>
</div>
        <button className="ProductCard__button">Comprar</button>
    </div>
   </div>
  </div>
  </div>
 );
};

export default ProductCard;
