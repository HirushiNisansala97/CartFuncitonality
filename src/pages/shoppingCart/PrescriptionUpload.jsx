import React from "react";
import '../shoppingCart/Shoppingcart.css';
import  { useState, useEffect } from 'react';
import '../../assets/css/style.css';

const PrescriptionUpload =()=>{
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    

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
                    <b class='shoppingPage'>Prescription Upload</b> 
                </div>

                    <form id="checkout-form" className="checkout-form wow fadeInUp delay-0-2s" name="checkout-form" action="#" method="post" style={{ visibility: 'visible' }}>
                        <div className="row">
                            <div className="rowOne">
                                <div className="col-lg-12">
                                    <h4>Patient Information</h4>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        id="first-name"
                                        name="first-name"
                                        className="form-control"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <input
                                        type="text"
                                        id="last-name"
                                        name="last-name"
                                        className="form-control"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={handleLastNameChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="form-group">
                                <input
                                    type="text"
                                    id="number"
                                    name="number"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                            </div>
                            
                            <div className="col-lg-12">
                                <h4>Patient Address</h4>
                            </div>
                            {/* <div className="col-md-6 mb-30">
                                <div className="form-group">
                                    <select name="country" id="country" style={{ display: 'none' }}>
                                        <option value="value1">Select Country</option>
                                        <option value="value2">Australia</option>
                                        <option value="value3">Canada</option>
                                        <option value="value4">China</option>
                                        <option value="value5">Morocco</option>
                                        <option value="value6">Saudi Arabia</option>
                                        <option value="value7">United Kingdom (UK)</option>
                                        <option value="value8">United States (US)</option>
                                    </select>
                                    <div className="nice-select wide">
                                        <ul className="list">
                                            <li className="option">Select Country</li>
                                            <li className="option">Australia</li>
                                            <li className="option">Canada</li>
                                            <li className="option">China</li>
                                            <li className="option">Morocco</li>
                                            <li className="option">Saudi Arabia</li>
                                            <li className="option">United Kingdom (UK)</li>
                                            <li className="option">United States (US)</li>
                                        </ul>
                                        <span className="current">Select Country</span>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" id="city" name="house_unit" className="form-control" placeholder="House/Appartment/Unit" value="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" id="state" name="street" className="form-control" placeholder="Street" value="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" id="zip" name="district" className="form-control" placeholder="District" value="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" id="street-name" name="province" className="form-control" placeholder="Province" value="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" id="apartment-name" name="zipCode" className="form-control" placeholder="Zip Code" value="" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <h4>Attach Your Doctor's Prescription:</h4>
                            </div>
                            <div className="attachFile">
                                <span className="wpcf7-form-control-wrap" data-name="pfile1">
                                    <input
                                        size="40"
                                        className="wpcf7-form-control wpcf7-file wpcf7-validates-as-required"
                                        accept=".pdf,.jpg,.jpeg"
                                        aria-required="true"
                                        aria-invalid="false"
                                        type="file"
                                        name="pfile1"
                                    />
                                </span>
                            </div>
                            <div className="col-lg-12">
                                <h4>Order Notes (optional)</h4>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <textarea name="order-note" id="order-note" className="form-control" rows="5" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                </div>
                            </div>

                            <div className="submitBtn">
                            <button class="theme-btn flex-none" type="submit">Submit <i class="fas fa-angle-double-right"></i></button>
                            </div>
                        </div>
                    </form>
            </div>
            

        
        </>


    )
}
export default PrescriptionUpload;