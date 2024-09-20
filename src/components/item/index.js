import React from 'react';
import PropTypes from 'prop-types';
import { formatNum } from '../../utils';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function Item(props) {
  const cn = bem('Item');

  const callbacks = {
    onBtn: () => {
      props.onBtn(props.item.code);
    },
  };

  return (
    <div className={cn()}>
      <div className={cn('code')}>{props.item.code}</div>
      <div className={cn('title')}>{props.item.title}</div>
      <div className={cn('price')}>{formatNum(props.item.price)} ₽</div>
      <div className={cn('actions')}>
        <button onClick={callbacks.onBtn}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onBtn: PropTypes.func,
};

export default React.memo(Item);
