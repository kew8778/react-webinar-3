import React, { useCallback, useState } from 'react';
import List from './components/list';
import Controls from './components/controls';
import Head from './components/head';
import PageLayout from './components/page-layout';
import Modal from './components/modal';
import FooterCart from './components/footer-cart';
import Item from './components/item';
import ItemCart from './components/itemCart';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const {list, cart} = store.getState();
  const [isShowCart, setShowingCart] = useState(false);
  const itemsInCart = cart.length;
  const totalPriceInCart = cart.reduce((sum, item) => sum + item.count * item.price, 0);

  const callbacks = {
    onAddToCart: useCallback(
      code => {
        store.addToCart(code);
      },
      [store],
    ),

    onOpenCart: useCallback(
      () => {
        setShowingCart(true);
      },
      [isShowCart],
    ),

    onCloseCart: useCallback(
      () => {
        setShowingCart(false);
      },
      [isShowCart],
    ),

    onDeleteCartItem: useCallback(
      code => {
        store.deleteCartItem(code);
      },
      [store],
    ),

    renderItem: useCallback(
      item => {
        return <Item onBtn={callbacks.onAddToCart} item={item} />
      },
      [store],
    ),

    renderItemCart: useCallback(
      item => {
        return <ItemCart onBtn={callbacks.onDeleteCartItem} item={item} />
      },
      [store],
    ),
  };

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Controls
        onOpenCart={callbacks.onOpenCart}
        items={itemsInCart}
        total={totalPriceInCart}
      />
      <List
        list={list}
        renderItem={callbacks.renderItem}
      />
      {isShowCart &&
        <Modal>
          <Head title="Корзина">
            <button onClick={callbacks.onCloseCart}>Закрыть</button>
          </Head>
          <List
            list={cart}
            renderItem={callbacks.renderItemCart}
          />
          <FooterCart total={totalPriceInCart} />
        </Modal>
      }
    </PageLayout>
  );
}

export default App;
