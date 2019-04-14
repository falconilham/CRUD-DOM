import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        matauang : [{
          uang : "14.00",
          currency : "IDR - Indonesia Rupiah",
          result : "14.500"
        }]
      }
    }

    add = (e) => {
      e.preventDefault()
        let {matauang} = this.state;
        matauang.push({
          uang : Math.floor(Math.random() * Math.floor(90)),
          currency : "IDR - Indonesia Rupiah",
          result : Math.floor(Math.random() * Math.floor(10))
        })
        this.setState({
          matauang
        })
      console.log(matauang)
    }

    remove = (i, e) => { 
      let {matauang} = this.state;
      matauang.splice(i, 1)
      this.setState({
      matauang
    })
  }
    

  render() {
    return (
      <div className="container">  
        <div className="card">
          <div className="card-header">
            <div className="baseCurrency">
              <i>USD - United States Dollars</i>
            </div>
            <div className="baseCurrency1">
              <div className="currency">
              USD
              </div>
              <div className="Money">
              10000
              </div>
            </div>
          </div>
          <div className="card-body">
            {this.state.matauang.map((x,i) => {
              return (
                <div className="list-currency">
              <div className="currencykanan">
                <div className="top">  
                  <div className="currency">
                    USD
                  </div>
                  <div className="Money">
                  {x.uang}
                  </div>
                </div>
                <div className="middle">
                  <i>{x.currency}</i>
                </div>
                <div className="bottom">
                  <text className="total">1 USD
                  </text>
                  =
                  <text className="total">{x.result}
                  </text>
                </div>
                </div>
                <button onClick={this.remove.bind(this, i)} className="currencykiri">
                  (-)
                </button>
            </div>
              )
            })}
            
            <button className="tambah" onClick={this.add}>

              (+) Add more currencies            
            </button>
          </div>
        </div>
      </div> 
        
    );
  }
}

export default App;
