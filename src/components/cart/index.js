import React from 'react';
import PropTypes from 'prop-types';
import List from '../list';
import Head from '../head';
import FooterCart from '../footer-cart';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function Cart(props) {
  const cn = bem('Cart');

  const callbacks = {
    onDeleteCartItem: (code) => {
      props.onDeleteCartItem(code);
    },

    onCloseCart: () => {
      props.onCloseCart();
    }
  };

  return (
    <div className={cn()}>
      <div className={cn('content')}>
        <Head title="Корзина">
          <button onClick={callbacks.onCloseCart}>Закрыть</button>
        </Head>
        <List
          list={props.cart}
          onBtn={callbacks.onDeleteCartItem}
          btnText="Удалить"
        />
        <FooterCart total={props.total} />
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCloseCart: PropTypes.func,
  onDeleteCartItem: PropTypes.func,
  total: PropTypes.number,
};

export default React.memo(Cart);
