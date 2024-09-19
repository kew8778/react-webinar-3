import React from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function FooterCart({ total }) {
  const cn = bem('FooterCart');

  return (
    <div className={cn()}>
      <div className={cn('beforeTotal')}>Итого</div>
      <div className={cn('total')}>{total} ₽</div>
    </div>
  );
}

FooterCart.propTypes = {
  total: PropTypes.number,
};

export default React.memo(FooterCart);
