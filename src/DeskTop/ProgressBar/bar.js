import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Bar extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>{this.props.skill} <ProgressBar indeterminate className="mdl-progress-green" style={{margin: 'auto', width: '75%', height: "20px"}} progress={this.props.progress} /> </div>
        </Cell>
      </Grid>
    )
  }
}

export default Bar;
