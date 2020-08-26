import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as testAction from 'Actions';

import './HelloWorld.less';

class HelloWorld extends React.Component {

  render() {
    const { count } = this.props;
    return (
      <div className="HelloWorld">
        Hello World!
        <div>redux数据：{ count }</div>
        <button onClick={() => {
          const { testAction: { testAdd } } = this.props;
          testAdd({
            data: 5
          })
        }}>加5</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    index
  } = state;

  return {
    ...index
  }
}

const mapStateToDispatch = dispatch => {

  return {
    testAction: bindActionCreators(testAction, dispatch)
  }
}

export default connect(
  mapStateToProps, 
  mapStateToDispatch
)(HelloWorld);