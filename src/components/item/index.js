import React from 'react';
import PropTypes from 'prop-types';
import { formatNum } from '../../utils';
import './style.css';

function Item(props) {
  const callbacks = {
    onBtn: () => {
      props.onBtn(props.item.code);
    },
  };

  return (
    <div className="Item">
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title}</div>
      <div className="Item-price">
        {formatNum(props.item.count * props.item.price || props.item.price)} ₽
      </div>
      {props.item.count && <div className="Item-count">{props.item.count} шт</div>}
      <div className="Item-actions">
        <button onClick={callbacks.onBtn}>{props.btnText}</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
  onBtn: PropTypes.func,
  btnText: PropTypes.string,
};

export default React.memo(Item);
