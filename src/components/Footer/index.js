import React, { Component } from 'react';

import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    return(
       <p>Você tem { this.props.count } favoritos.</p>
    )
  }
}

const mapStateToProps = state => ({
  count: state.favorites.data.length,
});

export default connect(mapStateToProps)(Footer);

