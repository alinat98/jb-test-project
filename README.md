# JetBrains test project

Данный проект представляет из себя реализацию древовидного оглавления на странице. Для работы с данными был создан локальный веб-сервер, который возвращает данные в формате json. Для удобства пользования добавлена возможность поиска глав по строке.

### Дизайн макета

[Ссылка на дизайн.](https://app.zeplin.io/project/5e16f034b53d11940a75ce41)

### Запуск в режиме разработчика

Для запуска необходимо установить [Node.js](https://nodejs.org/ru/).

В терминале выполните команду `npm install`.

Для выполнения запросов отдельно запустите
локальный веб-сервер командой `node serve.js`.

Для запуска приложения введите `npm start`. Откройте [http://localhost:3000](http://localhost:3000), чтобы увидеть результат.

### Запуск в режиме продакшен

Для запуска приложения в режиме продакшен, по прежнему необходимо запустить
локальный веб-сервер `node serve.js`, а затем запустить файл `index.js` из папки build.
