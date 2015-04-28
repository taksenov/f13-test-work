/**
 * Created by admin on 12.03.2015.
 */





(function() {

    var app = {

        // -- инициализация при загрузке js
        initialize : function () {
            var _this = this;

            _this.setUpListeners();
            _this.divResizable();
            _this.gradientForText();



        },
        // -- инициализация при загрузке js

        // -- настройки градиента для текста
        gradientForText: function () {

                //$('.resizable-block p').gradientText();

        },




        // -- настройки градиента для текста

        // -- ресайз дива
        divResizable: function () {

            $("#resizable").resizable({
                maxHeight: 250,
                maxWidth: 350,
                minHeight: 150,
                minWidth: 200
            });

        },
        // -- ресайз дива




        // -- обработчик событий над DOM элементами на странице
        setUpListeners: function () {

            // -- нажата кнопка заказа услуги
            $('#check-email').on('click', app.sendOrderData);
            // -- нажата кнопка заказа услуги

        },
        // -- обработчик событий над DOM элементами на странице

        // -- функции вызываемые из setUpListeners ===============


        // -- отправка данных из модальной формы
        sendOrderData: function (e) {
            e.preventDefault();

            var valEmail =  $('#inputEmail').val(),
                reEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;


            if (valEmail.length != 0) {
                var validEmail = reEmail.test(valEmail);
                if (!validEmail) {
                    $('.navbar__email-submit').css(
                        {
                            //'display' : 'block',
                            'background': 'red'
                        }
                    );
                    return false;
                } else {
                    $('.navbar__email-submit').css(
                        {
                            //'display' : 'block',
                            'background': 'green'
                        }
                    );
                }
            }



        },
        // -- отправка данных из модальной формы



        // -- пустая функция чтоб не было ошибки с запятой у сетаплистенеров
        someFunction: function () {}
        // -- пустая функция чтоб не было ошибки с запятой у сетаплистенеров

        // -- функции вызываемые из setUpListeners ===============

    }

    app.initialize();




}());






























