'use strict';
(function () {
  window.backend = {
    // Загрузка данных
    load: function (onLoad, onError) {
      var url = 'https://js.dump.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        onLoad(xhr.response);
      });

      xhr.open('GET', url);
      xhr.send();
    },
    // Сохранение данных и закрытие диалогового окна
    save: function (data, onLoad, onError) {
      var url = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        onLoad(xhr.response);
      });

      xhr.open('POST', url);
      xhr.send(data);
    }
  }

/*
    xhr.addEventListener('load', function (evt) {
      console.log(xhr.responseText);

      var error;
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;

        case 400:
          error = 'Неверный запрос';
          break;
        case 401:
          error = 'Пользователь не авторизован';
          break;
        case 404:
          error = 'Ничего не найдено';
          break;
        default:
          error = 'Статус ответа: ' + xhr.status + ' ' + xhr.statusText;
      }

      if (error) {
        onError(error);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполнится в течение ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10; //10ms

    */
})();