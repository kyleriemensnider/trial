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
const Tabs = {
  background: '#000',
  border: '1px solid #ffce00',
  borderRadius: '6px',
  cursor: 'pointer',
  opacity: '.7',
  padding: '8px 30px',
  transition: 'opacity .2s',
  color: '#ffeda0',
  fontFamily: 'OpenSans',
  fontSize: '12px',
  lineHeight: '20px',
  textAlign: 'center',
  minWidth: '150px'
}
const tabcontainerStyle = {
  padding: '10px 30px 30px'
}
const data = {
  referals:[
    {
      id:0,
      name:'breaker43',
      avatar: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/avatars/avatar-frame_novice.png',
      avatarFrame:'https://d36mxiodymuqjm.cloudfront.net/website/icons/avatars/avatar_0.png',
      joined:'March 6, 2022, 09:10:49 AM',
      rating: 0,
      battles: 0,
    },
    {
      id:1,
      name:'hitman1',
      avatar: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/avatars/avatar-frame_novice.png',
      avatarFrame:'https://d36mxiodymuqjm.cloudfront.net/website/icons/avatars/avatar_0.png',
      joined:'March 6, 2022, 09:10:49 AM',
      rating: 0,
      battles: 0,
    },
    {
      id:2,
      name:'onward',
      avatar: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/avatars/avatar-frame_novice.png',
      avatarFrame:'https://d36mxiodymuqjm.cloudfront.net/website/icons/avatars/avatar_0.png',
      joined:'March 6, 2022, 09:10:49 AM',
      rating: 0,
      battles: 0,
    },
    {
      id:3,
      name:'sharklock',
      avatar: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/avatars/avatar-frame_novice.png',
      avatarFrame:'https://d36mxiodymuqjm.cloudfront.net/website/icons/avatars/avatar_0.png',
      joined:'March 6, 2022, 09:10:49 AM',
      rating: 0,
      battles: 0,
    }
  ],
  payments:[
    {
      id:"0",
      name:"muscleblob23",
      date:"March 6, 2022, 09:10:49 AM",
      amount:"400",
      type:"packs"
    },
    {
      id:"1",
      name:"muscleblob23",
      date:"March 5, 2022, 09:10:49 AM",
      amount:"400",
      type:"packs"
    },
    {
      id:"2",
      name:"muscleblob23",
      date:"March 4, 2022, 09:10:49 AM",
      amount:"400",
      type:"packs"
    },
    {
      id:"3",
      name:"muscleblob23",
      date:"March 3, 2022, 09:10:49 AM",
      amount:"400",
      type:"packs"
    },
    {
      id:"4",
      name:"muscleblob23",
      date:"March 2, 2022, 09:10:49 AM",
      amount:"400",
      type:"packs"
    },

  ]
}

class App extends Component {

  dataList=data.referals.map((item,index)=>{
    console.log(item)
    return <li key={index}>{item.name}</li>
  })
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
    this.setState({ hover: true })
  }
  handleMouseOut() {
    this.setState({ hover: false })
  }
  handleCopyEvent() {
    navigator.clipboard.writeText("https://splinterlands.com?ref="+this.state.referalID);
    this.setState({toolTip: 'Copied'});
  }
  handleTabEvent(type){
    if(type === 'referrals'){
      this.dataList=data.referals.map((item,index)=>{
        return <li key={index}>{item.id}</li>
      })
    }
    else{
      this.dataList=data.payments.map((item,index)=>{
        return <li key={index}>{item.id}</li>
      })
    }
    console.log(this.dataList)
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
            <small><i>Only accounts that log in for the first time using your referral link are eligible for affiliate rewards. Purchases made with 
            Dark Energy Crystals (DEC) do not qualify for affiliate rewards. All reward payments are made in CREDITS.</i></small>
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
          <Tooltip stylefromParent={tooltipStyle}  dataFromParent = {this.state.toolTip} />
            <button 
            style={Button}
            onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}
            onClick={() => {this.handleCopyEvent()}}
            >
            <IconCopy style={copyBox} />
            </button>
          </div>
        </div>
        <div className="row tabs" style={{...rowStyle, ...tabcontainerStyle}}>
          <div className='columns' style={colStyle}>
            <button 
            onClick={() => {this.handleTabEvent('Referrals')}}
            style={Tabs}>Referrals</button>
          </div>
          <div className='columns' style={colStyle}>
            <button 
            onClick={() => {this.handleTabEvent('payments')}}
            style={Tabs}>Payments</button>
          </div>
        </div>
        <div className='row'>
          <div className='columns'>
          <ul>
            {this.dataList}
          </ul>
          </div>
        </div>
        </main>
      </div>
    );
  }
}

export default App;
