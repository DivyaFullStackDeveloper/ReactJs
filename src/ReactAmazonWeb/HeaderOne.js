import React from "react"
import "./HeaderOne.css"
import amazon from "./Assets/amazon-logo1.png";
// import CartOne from "./CartOne";
export default class HeaderOne extends React.Component {
    render() {
        return (
            <>
                <div className="header-container">
                    <img src={amazon} style={{ height: "80px", width: "180px" }} alt="Amazon Logo" />
                    {/* <CartOne /> */}
                </div>
            </>
        )
    }
}
