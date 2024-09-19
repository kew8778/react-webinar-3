import React from 'react';
import PropTypes from 'prop-types';
import { plural } from '../../utils';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function Controls({ onOpenCart = () => {}, items, total }) {
  const cn = bem('Controls');

  return (
    <div className={cn()}>
      <div className={cn('beforeTotal')}>В корзине:</div>
      <div className={cn('total')}>{items} {plural(items, {
              one: 'товар',
              few: 'товара',
              many: 'товаров',
            })} / {total} ₽</div>
      <button className={cn('btn')} onClick={onOpenCart}>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  onOpenCart: PropTypes.func,
  items: PropTypes.number,
  total: PropTypes.number,
};

export default React.memo(Controls);
