/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление товара в корзину
   * @param code
   */
  addToCart(code) {
    // Если товар есть в корзине, ...
    if (this.isCartItem(code)) {
      // ... добавляем его кол-во
      this.addNumOfCartItem(code);
    } else {
      // Если нет, добавляем новый товар в корзину
      this.addCartItem(code);
    }
  }

  /**
   * Добавление кол-ва существующего товара в корзине
   * @param code
   */
  addNumOfCartItem(code) {
    this.setState({
      ...this.state,
      cart: this.state.cart.map(item => {
        if (item.code === code) {
          return {
            ...item,
            count: item.count + 1,
          };
        }

        return item;
      }),
    });
  }

  /**
   * Добавление нового (уникального) товара (пункта) в корзине
   * @param code
   */
  addCartItem(code) {
    this.setState({
      ...this.state,
      cart: [...this.state.cart, {
        ...(this.state.list.find(item => item.code === code)),
        count: 1,
      }],
    });
  }

  /**
   * Проверка наличия товара в корзине
   * @param code
   * @returns {Boolen}
   */
  isCartItem(code) {
    return this.state.cart.some((item) => item.code === code);
  }

  /**
   * Удаление товара из корзины
   * @param code
   */
  deleteCartItem(code) {
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      cart: this.state.cart.filter(item => item.code !== code),
    });
  }
}

export default Store;
