import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function List({ list, onBtn = () => {}, childNode }) {
  return (
    <div className="List">
      {list.map(item => (
        <div key={item.code} className="List-item">
          {cloneElement(childNode, {item: item, onBtn: onBtn})}
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
  childNode: PropTypes.node.isRequired,
  onBtn: PropTypes.func,
};

export default React.memo(List);
