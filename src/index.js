import React from 'react';
import { createRoot } from 'react-dom/client';
import { createElement, count } from './utils.js';
import App from './app.js';
import Store from './store.js';

const store = new Store({
  list: [
    { code: count(), title: 'Название элемента' },
    { code: count(), title: 'Некий объект' },
    { code: count(), title: 'Заголовок' },
    { code: count(), title: 'Очень длинное название элемента из семи слов' },
    { code: count(), title: 'Запись' },
    { code: count(), title: 'Шестая запись' },
    { code: count(), title: 'Седьмая запись' },
  ],
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store} />);
});

// Первый рендер приложения
root.render(<App store={store} />);
