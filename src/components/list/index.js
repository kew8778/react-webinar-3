import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function List({ list, childNode }) {
  const cn = bem('List');

  return (
    <div className={cn()}>
      {list.map(item => (
        <div key={item.code} className={cn('item')}>
          {cloneElement(childNode, {item: item})}
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
};

export default React.memo(List);
