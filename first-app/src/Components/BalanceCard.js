import React from "react";
import './BalanceCard.css';

class BalanceCard extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            name : "Felycia Angelo", 
            balance : "IDR. 11.000.000,00", 
        };
    }
        render() {
            return (
                <section className='balance_card'>
                    <div className='balance_card_container bd-grid'>
                        <span className='greetings'> {this.state.name} </span>
                        <span> <h4 className='balance-info'> Total Balance <br></br> {this.state.balance}</h4></span>
                    </div>
                </section>
            );
        }
}
    


export default BalanceCard;