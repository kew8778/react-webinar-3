import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import './style.css';

function List({ list, onBtn = () => {}, btnText }) {
  return (
    <div className="List">
      {list.map(item => (
        <div key={item.code} className="List-item">
          <Item item={item} onBtn={onBtn} btnText={btnText} />
        </div>
      ))}
    </div>
  );
}
 
List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    }),
  ).isRequired,
  onBtn: PropTypes.func,
  btnText: PropTypes.string,
};

export default React.memo(List);
