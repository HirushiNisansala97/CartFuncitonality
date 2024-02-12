import React from "react";
import '../shoppingCart/Shoppingcart.css';
import  { useState, useEffect } from 'react';
import '../../assets/css/style.css';

const PharmacistDahsBoard =()=>{

    

    return(

        <>
            <div className="mainBodypharmacistDashBoard">
                <div className="pharmacistDashBoardNavBar">
                    <div className="pharmaName"> 
                        <div className=""> 
                        
                        </div>                      
                        <b>Pharmacist Dashboard</b> 
                    </div>
                </div>

                <div className="pharmaDashContent">
                    <div className="rightSidePanel">
                        <div className="rightPanel">
                        <div className="phrmaIcon">
                            <span className="uPharma">United Pharma </span>
                        </div>
                        <div>
                            <hr className="textDarker" />
                            <div className="listGroup list-group-flush">
                                <div className="divone"> 
                                    <a className="listGroupItem ">
                                            <span className="dashBoard">Dashboard</span>
                                    </a>
                                </div>
                                <div className="divtwo">
                                    <a className="listGroupItem">
                                        <span className="Home">Home</span>
                                    </a>
                                </div>
                                <div>
                                    <a className="listGroupItem">
                                        <span className="products">Products</span>
                                    </a>
                                </div>
                                <div>
                                    <a className="listGroupItem">
                                        <span className="report">Report</span>
                                    </a>
                                </div>
                                <div>
                                    <a className="listGroupItem">
                                        <span className="customers">Customers</span>
                                    </a>
                                </div>
                                <div>
                                    <a className="listGroupItem">
                                        <span className="logout">Logut</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>


                    <div className="leftSidePanel">
                        <div className="navBar">
                            <div className="searchIcon"></div>
                            <div className="searchTab"><form action="#" className="prescriptionSearch">                             
                                    <input type="text" placeholder="Search Prescription" className="searchbox" />
                                    <button type="submit" className="searchbutton far fa-search"></button></form>
                        
                            </div>
                        </div>

                        <div className="prescriptionDetails">
                        <table className="prescriptionTable">
                        <tbody>
                            <tr>
                                <td className="prescriptionName">Patient Details </td>
                                <td class="prescriptionimg">Prescription</td>
                                <td className="proceed" >Proceed</td>
                            </tr>
                            <tr>
                                <td className="prescriptionName"> Mr.Amal</td>
                                <td class="Prescriptionimg">
                                    <td className="checkbtn">
                                        <button class="theme-btn flex-none" type="submit">Check <i class="fas fa-angle-double-right"></i></button>    
                                    </td>
                                    <td className="presimg">
</td>
                                </td>
                                <td className="proceed"> <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="false" focusable="false">
            <path d="M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z m238.933333 347.733334l-277.333333 266.666666c-6.4 6.4-17.066667 10.666667-25.6 10.666667h-2.133333c-10.666667 0-19.2-6.4-27.733334-14.933333l-128-160c-12.8-17.066667-10.666667-40.533333 6.4-53.333334 17.066667-12.8 40.533333-10.666667 53.333334 6.4l102.4 128 247.466666-238.933333c14.933333-14.933333 38.4-12.8 53.333334 0 12.8 17.066667 12.8 40.533333-2.133334 55.466667z"></path>
        </svg></td>
                            </tr>
                           
                        </tbody>
                    </table>
                        </div>
                     
                    </div>
                </div>

            </div>
        
        </>
     )
}
export default PharmacistDahsBoard;