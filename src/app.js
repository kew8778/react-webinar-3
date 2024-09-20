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
        onBtn={callbacks.onAddToCart}
        childNode={<Item/>}
      />
        

      {isShowCart &&
        <Modal>
          <Head title="Корзина">
            <button onClick={callbacks.onCloseCart}>Закрыть</button>
          </Head>
          <List
            list={cart}
            onBtn={callbacks.onDeleteCartItem}
            childNode={<ItemCart/>}
          />
          <FooterCart total={totalPriceInCart} />
        </Modal>
      }

    </PageLayout>
  );
}

export default App;
