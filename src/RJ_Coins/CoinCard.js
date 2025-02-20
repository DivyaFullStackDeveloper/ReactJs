// coin-card container
import React from "react";
import "./CoinCard.css";
export default class CoinCard extends React.Component{
    render(){
        return(
            // coin-container
            <div className="coin-container"
               onClick={() => {
                this.props.onCoinClick(this.props.coin);
                this.props.incrementCounter(this.props.coin);
               }}
            >
                {/* coin-image */}
                <img className="coin-image" src={this.props.imageName} alt={this.props.coin}/>
                {this.props.coinCounter ? (
                // counte-cart container
                    <text className="coin-badge"> Total Coins={this.props.coinCounter}</text>
                ) : null}
           </div>
        )
    }
}