import React from "react";
import '../shoppingCart/Shoppingcart.css';
import  { useState, useEffect } from 'react';
import '../../assets/css/style.css';

const PharmacistDahsBoard =()=>{
    const [selectedMethod, setSelectedMethod] = useState('methodone');
  
    const handleMethodChange = (event) => {
      setSelectedMethod(event.target.id);
    };
    
    

    return(

        <>
            <div className="mainBodypharmacistDashBoard">
                <div className="pharmacistDashBoardNavBar">
                    <div className="pharmaName"> 
                        <div className="space"> 
                        
                        </div>                      
                        <b>Pharmacist Dashboard</b> 
                    </div>
                </div>
                <div className="pharmaDashContent">
                <table className="pharmacistTable">
                        <tbody>
                            <td>
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

                            </td>

                            
                            <td>
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
                                            <td className="proceed"> 
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="methodone"
                                                name="defaultExampleRadios"
                                                checked={selectedMethod === 'methodone'}
                                                onChange={handleMethodChange}
                                            />
                                            
                                            </td>
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
        
        </>
     )
}
export default PharmacistDahsBoard;