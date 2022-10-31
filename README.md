![alt text](https://github.com/Sergisa/WebTrain/blob/master/webTrain.png?raw=true)

# JQuery

## Особенности

Это библиотека, которая помогает манипулировать объектами страницы с помощью универсальных функций, которые будут
работать в любом браузере. Разработчик попросту взял и имеющимся в JS функциям управления DOM (Document Object Model)
сделал удобные для использования функции-обёртки. Например, функция прикрепления обработчика события `click` и
инициирование этого события на чистом JS будет выглядеть так:

```javascript
document.getElementById('some').click = function () {
    //Обработка события
}
document.getElementById('some').click() // вызов события
```

При использовании библиотеки jQuery это будет выглядеть вот так:

```javascript
$('#some').click(function () {
//Обработка события
});
$('#some').click() // вызов события
```

## Селекторы

То есть автор библиотеки заместил использование функций ``getElementById()``, ``getElementsByName()``
, ``getElementsByClassName()`` обычной функцией-селектором: ``$(' <CSS Selector> ')``. В чистом JS есть аналог этой
функции это ``querySelectorAll()``. Только querySelectorAll() нам возвращает массивоподобный объект и мы всегда должны
пробегаться по элементам этого массива и производить процедуру над каждым из них в цикле. В то время как функция $ нам
возвращает JqueryObject, а в этом объекте есть все необходимое для проведения каких-то манипуляций и с набором элементов
и с одним элементом. Допустим у меня задача всем div на странице дать красный цвет и класс **'active'** сменить на
**'disabled'** и при использовании Javascript решается она вот так:

```javascript
document.querySelectorAll('div').forEach(function (singleElement) {
    singleElement.style.backgroundColor = 'red';
    singleElement.classList.remove('active')
    singleElement.classList.add('disabled')
})
```

А при использовании jQuery код будет следующим:

```javascript
$('div').toggleClass('active', 'disabled').css('backgroundColor', 'red');
```

То есть цикл уже заложен внутрь библиотеки по-умолчанию.

## Цепочный вызов

> Данный пример содержится в файле [simple.html](https://github.com/Sergisa/WebTrain/blob/JQuery/simple.html)

Так же библиотеку jQuery отличает от обычного JS еще и тот факт, что функции, оперирующие над набором тегов можно
вызывать по цепочке. То есть когда мы хотим выполнить несколько действий мы должны их выполнять по одному на каждой
строчке, в то время как при использовании jQuery мы можем их выполнить цепочкой. Например:

```javascript
var element = document.getElementById('myElement')
element.style.color = '#5b5f97'; //установить css свойство
element.classList.remove('visible')//Удалить класс
var newSpan = document.createElement('span')
newSpan.innerHTML = 'SomeSpan'
newSpan.style.backgroundColor = "#B8B8D1"
newSpan.style.padding = "0.5rem"
newSpan.style.borderRadius = "0.25rem"
element.appendChild(newSpan)//Добавить тэг
```

На jQuery эти же задачи будут выглядеть вот так

```javascript
$('#myElement')
    .css('color', '#5b5f97') //установить css свойство
    .removeClass('visible') //Удалить класс
    .append( //Добавить в конец тэга
        $('<span></span>') //Создание нового тэга
            .html("SomeSpan") //Установка содержимого тега
            .css({ // Установка css свойств
                backgroundColor: "#B8B8D1",
                padding: "0.5rem",
                borderRadius: "0.25rem"
            })
    )
```

А можно даже было зайти и с другой стороны и начинать действия от создания внутреннего элемента:

```javascript
$('<span></span>') //Создание тега
    .html("SomeSpan") //Установка содержимого тэга
    .css({ //Установка css свойств
        backgroundColor: "#B8B8D1",
        padding: "0.5rem",
        borderRadius: "0.25rem"
    })
    .appendTo( //Добавить в конец К ->
        $('#myElement ').css('color', '#5b5f97').removeClass('visible') //Выборка элемента -> установка css -> удаление класса
    )
```

## Минусы

> Данный пример лежит в файле [problem.html](https://github.com/Sergisa/WebTrain/blob/JQuery/problem.html)

Если вы будете в цепочке оперировать несуществующим объектом, то вы об этом никогда не узнаете в консоли.

## Самодельный jQuery

> Данный пример содержится в файле [smallSelfMadejQuery.html](https://github.com/Sergisa/WebTrain/blob/JQuery/smallSelfMadejQuery.html)  
> Усложненный вариант находится в файле [extendedSelfMadejQuery.html](https://github.com/Sergisa/WebTrain/blob/JQuery/extendedSelfMadejQuery.html).  
> Там добавлена поддержка работы с набором тегов и несколько дополнительных функций jQuery

А что если мы сами попытаемся создать свой jQuery?
Давайте сделаем свой jQuery, который сможет работать лишь над одним элементом, и у которого есть операции `html()`,
`addClass()`, `removeClass()` и `append()`.  
Для начала образуем свой объект который будет нам возвращать функция `$()`.

```javascript
function $(stringSelector) {
    return {
        mainObject: document.querySelector(stringSelector),
    }
}
```

Отлично, теперь у нас есть объект с единственным пока свойством **mainObject**. Его теперь можно использовать:
``var myObject = $("#myDiv")`` Теперь рядом с этим объектом давайте создадим функции которые будут производить операции
над ним. Начнём с функции `html()`. В jQuery функция устроена таким образом, что если в функцию передан аргумент, то эта
функция должна заменить содержимое HTML блока и вернуть наш объект, который мы только что выстроили, для того чтобы
можно было продолжить использовать другие функции, имеющиеся в этом объекте. А если аргументов не передано то возвращать
она должна содержимое нашего HTML компонента.

```javascript
function $(stringSelector) {
    return {
        mainObject: document.querySelector(stringSelector),
        html: function (string) {
            if (string === undefined) {
                return this.mainObject.innerHTML;
            } else {
                this.mainObject.innerHTML = string;
                return this;
            }
        }
    }
}
```

Добавим так же функцию `append()` которая просто прибавляет к тэгу содержимое.

```javascript
function $(stringSelector) {
    return {
        mainObject: document.querySelector(stringSelector),
        html: function (string) {
            if (string === undefined) {
                return this.mainObject.innerHTML;
            } else {
                this.mainObject.innerHTML = string;
                return this;
            }
        },
        append: function (string) {
            this.mainObject.innerHTML += string;
        }
    }
}
```

Далее приступим к формированию removeClass и addClass функций. Они должны всего лишь производить операцию и опять же
возвращать ``this`` для того что бы можно было продолжить вызывать функции объекта.

```javascript
function $(stringSelector) {
    return {
        mainObject: document.querySelector(stringSelector),
        html: function (string) {
            if (string === undefined) {
                return this.mainObject.innerHTML;
            } else {
                this.mainObject.innerHTML = string;
                return this;
            }
        },
        append: function (string) {
            this.mainObject.innerHTML += string;
        },
        addClass: function (singleClassName) {
            this.mainObject.classList.add(singleClassName);
            return this;
        },
        removeClass: function (singleClassName) {
            this.mainObject.classList.add(singleClassName)
            return this;
        }
    }
}
```