import React from 'react';
import PropTypes from 'prop-types';
import { formatNum } from '../../utils';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function ItemCart(props) {
  const cn = bem('ItemCart');

  const callbacks = {
    onBtn: () => {
      props.onBtn(props.item.code);
    },
  };

  return (
    <div className={cn()}>
      <div className={cn('code')}>{props.item.code}</div>
      <div className={cn('title')}>{props.item.title}</div>
      <div className={cn('price')}>{formatNum(props.item.count * props.item.price)} ₽</div>
      <div className={cn('count')}>{props.item.count} шт</div>
      <div className={cn('actions')}>
        <button onClick={callbacks.onBtn}>Удалить</button>
      </div>
    </div>
  );
}

ItemCart.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
  onBtn: PropTypes.func,
};

export default React.memo(ItemCart);
