import React from "react";
import '../shoppingCart/Shoppingcart.css';
import  { useState, useEffect } from 'react';
import '../../assets/css/style.css';


const ShoppingCart =()=>{

 
    

    return(

        <>
        <div className="mainBody">
            <div className="navBar">
                <div className="logo"></div>
                <div className="name"><b>UNITED PHARMA</b>
                    <div className="healthShop">Health Shop</div>
                </div>
                <div className="slogan">
                    <i>A Novel Experience on your Drug purchase</i>
                </div>
            </div>
            <div className="headerImg">
                 <b class='shoppingPage'>SHOPPING CART</b> 
            </div>

            <div className="cartTable">
            <div className="cart-item-wrap mb-35 wow fadeInUp delay-0-2s" style={{ visibility: 'visible' }}>
      <div className="cart-single-item">
        <button type="button" className="close">
           <span aria-hidden="true">×</span>
        </button>
        <div className="cart-img">
          
        </div>
        <h5 className="product-name">Metforming 500mg</h5>
        <span className="product-price">50.00</span>
        <div className="quantity-input">
          <button className="quantity-down">-</button>
          <input className="quantity" type="text" name="quantity" value="1" />
          <button className="quantity-up">+</button>
        </div>
        <span className="product-total-price">50.00</span>
      </div>
      <div className="cart-single-item">
        <button type="button" className="close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="cart-img">
          
        </div>
        <h5 className="product-name">Metforming 500mg</h5>
        <span className="product-price">50.00</span>
        <div className="quantity-input">
          <button className="quantity-down">-</button>
          <input className="quantity" type="text" name="quantity" value="1" />
          <button className="quantity-up">+</button>
        </div>
        <span className="product-total-price">50.00</span>
      </div>
      <div className="cart-single-item">
        <button type="button" className="close">
          <span aria-hidden="true">×</span>
        </button>
        <div className="cart-img">
        {/* <img src={require('../../assets/img/')} alt="bread"/> */}
          {/* <img src="assets/images/" alt="Product Image" /> */}
        </div>
        <h5 className="product-name">Metforming 500mg</h5>
        <span className="product-price">50.00</span>
        <div className="quantity-input">
          <button className="quantity-down">-</button>
          <input className="quantity" type="text" name="quantity" value="1" />
          <button className="quantity-up">+</button>
        </div>
        <span className="product-total-price">50.00</span>
      </div>
    </div>
            </div>
            <div className="btnLine">
                <div className="btnAlign">
                    
                    <button class="theme-btn flex-none" type="submit">Coupon Code <i class="fas fa-angle-double-right"></i></button>
                    <button class="theme-btn flex-none" type="submit">Apply Coupon <i class="fas fa-angle-double-right"></i></button>
                    <button class="theme-btn flex-none" type="submit">Shopping <i class="fas fa-angle-double-right"></i></button>
                    <button class="theme-btn flex-none" type="submit">Update Cart <i class="fas fa-angle-double-right"></i></button>
                  
                    {/* <button className="couponCode" type="submit"> Coupon Code <i class="fas fa-angle-double-right"></i></button>
                
                    <button className="applyCoupon " type="submit">Apply Coupon <i class="fas fa-angle-double-right"></i></button>
                
                    <button className="shopping " type="submit"> Shopping <i class="fas fa-angle-double-right"></i></button>
                
                    <button className="updateCart " type="submit">Update Cart <i class="fas fa-angle-double-right"></i></button> */}
                    </div>
            </div>

            <div className="navBar">
                
                <div className="address"><b>Address</b>
                    <div class="addressLines" data-pl="pl-address-detail">
                        <div class="addressHead">
                            <div className="phoneNumber">0715900395</div>
                            <div class="shippingName">M.A.H. Nisansala</div>
                        </div>
                            <div class="addressContent large">195/d, alubovila, delgoda</div>
                            <div class="pladdressContent large">Gampaha </div>
                        </div>
                        <div className="addressChangeBtn">
                            <button class="theme-btn flex-none" type="submit">Change <i class="fas fa-angle-double-right"></i></button>
                        </div>
                </div>

                <div className="cartTotal"><b>Cart Total</b>
                    <table className="cartTotalTable">
                        <tbody>
                            <tr>
                                <td>Cart Subtotal</td>
                                <td class="sub-total-price">150.00</td>
                            </tr>
                            <tr>
                                <td>Shipping Fee</td>
                                <td class="shipping-price">10.0</td>
                            </tr>
                            <tr>
                                <td>Vat</td>
                                <td class="vat">112.50</td>
                            </tr>
                            <tr>
                                <td><strong>Order Total</strong></td>
                                <td><strong class="total-price">282.50</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="checkoutBtn">
                         <button class="theme-btn flex-none" type="submit">Proceed to Checkout <i class="fas fa-angle-double-right"></i></button>
                    </div>
                    
                </div>
            </div>
        </div>


        </>


    )
}
export default ShoppingCart;