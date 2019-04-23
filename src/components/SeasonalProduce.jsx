import React from 'react';
import PropTypes from 'prop-types';

function SeasonalProduce(props){
  const seasonalProduce = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '5px'
  };
  return (
    <div style={seasonalProduce}>
      <h3>{props.month}</h3>
      <h3>{props.selection}</h3>
    </div>

  );
}

SeasonalProduce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};
export default SeasonalProduce;
