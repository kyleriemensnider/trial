import React, {Component} from 'react';
import img_coins_candle from './img_coins-candle@2x.png';
import { ReactComponent as IconCopy } from './icon_copy.svg';
import './App.css';
import Tooltip from './Tooltip';
const rowStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexFlow: 'row nowrap'
};
const colStyle = {
  position:'relative',
  flex: '1 1 0px'
}
const col2Style = {
  flex: '0 0 16.66666%',
  maxWidth: '16.66666%'
}
const col4Style = {
  flex: '0 0 33.33333%',
  maxWidth: '33.33333%'
}
const col6Style = {
  flex: '0 0 50%',
  maxWidth: '50%'
}
const col8Style = {
  flex: '0 0 66.66666%',
  maxWidth: '66.66666%'
}
const col10Style = {
  flex: '0 0 83.33333%',
  maxWidth: '83.33333%'
}
const refBox = {
  backgroundColor: '#ffffff',
  padding: '4px 12px',
}
const blackFontColor = {
  color: '#000000 '
}
const copyBox = {
  cursor: 'pointer',
  width: '50px',
  height: 'auto'

}
const Button = {
  background: 'transparent'
}

class App extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
      referalID: 'kuzuri27',
      hover: false,
      toolTip: 'Copy'
    };
  }
  toggle = () => {
    this.setState({isOn: !this.state.isOn})
  }
  handleMouseIn() {
    this.setState({ hover: true })
    navigator.clipboard.readText().then(
      clipText => {
        if(clipText === "https://splinterlands.com?ref="+this.state.referalID){
          this.setState({toolTip: 'Copied'});
        }
        else{
          this.setState({ toolTip: 'Copy'});
        }
      }
    );
  }
  
  handleMouseOut() {
    this.setState({ hover: false })
    
  }
  handleCopyEvent() {
    navigator.clipboard.writeText("https://splinterlands.com?ref="+this.state.referalID);
    this.setState({toolTip: 'Copied'});
  }
  render() {
    const tooltipStyle = {
      display: this.state.hover ? 'block' : 'none',
      
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Affiliate Program</h1>
        </header>
        <main>
        <div className="row" style={rowStyle} >
          <div className="col-4" style={{...colStyle, ...col4Style}}>
            <img src={img_coins_candle} className="" alt="Lit candle, coins, and dagger" />
          </div>
          <div className="col-8" style={{...colStyle, ...col8Style}}>
            <p>
            Receive 5% of the LIFETIME PURCHASES of Card Packs and Summoner Spellbooks that are made by referrals!<br />
            <small><i>Only accounts that log in for the first time using your referral link are eligible for affiliate rewards. Purchases made with Dark Energy Crystals (DEC) do not qualify for affiliate rewards. All reward payments are made in CREDITS.</i></small>
            </p>
          </div>
        </div>
        <div className="row" style={rowStyle} >
          <div className="col-4" style={{...colStyle, ...col4Style}}>
            <p >
              Share your link
            </p>
          </div>
          <div className="col-6" style={{...colStyle, ...col6Style, ...refBox}}>
            <p style={blackFontColor} >
              {"https://splinterlands.com?ref="+this.state.referalID}
            </p>
          </div>
          <div className="col-2" style={{...colStyle, ...col2Style}}>
          <Tooltip stylefromParent={tooltipStyle} dataFromParent = {this.state.toolTip} />
            <button 
            style={Button}
            onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}
            onClick={() => {this.handleCopyEvent()}}
            >
            <IconCopy style={copyBox} />
            </button>
          </div>
        </div>
        </main>
      </div>
    );
  }
}

export default App;
