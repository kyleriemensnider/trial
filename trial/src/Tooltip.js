import React, {Component} from 'react';
const toolTipStyle = {
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, -130%)',
  backgroundColor: '#ffffff',
  padding: '3px 5px',
  borderRadius: '5px'
}

class Tooltip extends Component {
  render() {
    return (
      <div className='tooltip' style={{...toolTipStyle, ...this.props.stylefromParent}} >
        {this.props.dataFromParent}
      </div>
    );
  }
}
export default Tooltip;