import React from "react";
import '../shoppingCart/Shoppingcart.css';
import  { useState, useEffect } from 'react';
import '../../assets/css/style.css';

const Checkout = () => {
    const [selectedMethod, setSelectedMethod] = useState('methodone');
  
    const handleMethodChange = (event) => {
      setSelectedMethod(event.target.id);
    };
    

    return(

        <>
        <div className="checkoutMain">
            <div className="payment-cart-total pt-25">
                <div className="row justify-content-between">
                <table className="checkoutTable">
                        <tbody>
                           
                           
                            <td>

                                    <div className="col-lg-6">
                                        <div className="payment-method mt-45 wow fadeInUp delay-0-2s" style={{ visibility: 'visible' }}>
                                        <h4 className="form-title my-25">Payment Method</h4>
                                            <ul id="paymentMethod" className="mb-30 accordion">
                                            <li className="custom-control custom-radio">
                                            <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="methodone"
                                            name="defaultExampleRadios"
                                            checked={selectedMethod === 'methodone'}
                                            onChange={handleMethodChange}
                                            />
                                            <label
                                            className="custom-control-label"
                                            htmlFor="methodone"
                                            data-toggle="collapse"
                                            data-target="#collapseOne"
                                            > Direct Bank Transfer </label>
                                            <div data-parent="#paymentMethod" className={`collapse ${selectedMethod === 'methodone' && 'show'}`}>
                                            <p>
                                                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                                                Your order will not be shipped our account.
                                            </p>
                                            </div>
                                        </li>
                                        <li className="custom-control custom-radio">
                                            <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="methodtwo"
                                            name="defaultExampleRadios"
                                            checked={selectedMethod === 'methodtwo'}
                                            onChange={handleMethodChange}
                                            />
                                            <label
                                            className="custom-control-label collapsed"
                                            htmlFor="methodtwo"
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            > Cash On Delivery </label>
                                            <div data-parent="#paymentMethod" className={`collapse ${selectedMethod === 'methodtwo' && 'show'}`}>
                                            <p>Pay with cash upon delivery.</p>
                                            </div>
                                        </li>
                                        <li className="custom-control custom-radio">
                                            <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="methodthree"
                                            name="defaultExampleRadios"
                                            checked={selectedMethod === 'methodthree'}
                                            onChange={handleMethodChange}
                                            />
                                            <label
                                            className="custom-control-label collapsed"
                                            htmlFor="methodthree"
                                            data-toggle="collapse"
                                            data-target="#collapsethree"
                                            > Paypal </label>
                                            <div data-parent="#paymentMethod" className={`collapse ${selectedMethod === 'methodthree' && 'show'}`}>
                                            <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                            </div>
                                            </li>
                                            </ul>
                                        <p>
                                        Your personal data will be used to process your order, support your experience throughout this website, and
                                        for other purposes described in our privacy policy.
                                        </p>
                                        <button type="button" className="theme-btn mt-15">
                                        Place order
                                        </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="blank">


                                </td>

                                <td>

                                    <div className="col-lg-5">
                                    <div className="shoping-cart-total mt-45 wow fadeInUp delay-0-4s" style={{ visibility: 'visible' }}>
                                        <h4 className="form-title m-25">Cart Totals</h4>
                                        <table>
                                        <tbody>
                                            <tr>
                                            <td>Metforming 500mg <strong>× 1</strong></td>
                                            <td>LKR 50.00</td>
                                            </tr>
                                            <tr>
                                            <td>Metforming 500mg <strong>× 1</strong></td>
                                            <td>LKR 50.00</td>
                                            </tr>
                                            <tr>
                                            <td>Metforming 500mg <strong>× 1</strong></td>
                                            <td>LKR 50.00</td>
                                            </tr>
                                            <tr>
                                            <td>Shipping Fee</td>
                                            <td>LKR 10.00</td>
                                            </tr>
                                            <tr>
                                            <td>Vat</td>
                                            <td>LKR 112.50</td>
                                            </tr>
                                            <tr>
                                            <td><strong>Order Total</strong></td>
                                            <td><strong> LKR 272.50</strong></td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                        </td>
                </tbody>
                </table>           
                    
                </div>
            </div>
        </div>
        
        
        </>


    )
}
export default Checkout;