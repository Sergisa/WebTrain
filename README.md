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

> Простой пример содержится в
> файле [smallSelfMadejQuery.html](https://github.com/Sergisa/WebTrain/blob/JQuery/smallSelfMadejQuery.html)
> и [jquery-small.selfMade.js](https://github.com/Sergisa/WebTrain/blob/JQuery/jquery-small.selfMade.js)
> Там описан простой аналог jquery библиотеки и её использование. Эта библиотека предоставляет набор функций для
> оперирования лишь над одним элементом.

> Усложненный вариант находится в
> файле [extendedSelfMadejQuery.html](https://github.com/Sergisa/WebTrain/blob/JQuery/extendedSelfMadejQuery.html)
> и [jquery-extended.selfMade.js](https://github.com/Sergisa/WebTrain/blob/JQuery/jquery-extended.selfMade.js).  
> Там добавлена поддержка работы с набором тегов и несколько дополнительных функций jQuery

Давайте попытаемся создать свой jQuery.
Давайте сделаем свой jQuery, который сможет работать лишь над одним элементом, с набором
операций: `html()`, `addClass()`, `removeClass()` и `append()`.  
Для начала образуем свой объект который будет нам возвращать функция `$()`.

```javascript
function $(stringSelector) {
    return {
        mainObject: document.querySelector(stringSelector),
    }
}
```

### html(), append(), removeClass(), addClass()

Отлично, теперь у нас есть объект с единственным пока свойством **mainObject**. Его теперь можно использовать:
``var myObject = $("#myDiv")`` Теперь рядом с этим объектом давайте создадим функции которые будут производить операции
над ним. Начнём с функции `html()`. В jQuery функция устроена таким образом, что если в функцию передан аргумент, то эта
функция должна заменить содержимое HTML блока и вернуть наш объект, который мы только что выстроили, для того чтобы
можно было продолжить использовать другие функции, имеющиеся в этом объекте. А если аргументов не передано то возвращать
она должна содержимое нашего HTML компонента. То есть каждая функция должна иметь где-либо в конце
строку ``return this``, что будет означать что функция вернёт ту область, тот контекст в которой сама находится. А
значит мы сможем снова вызывать другие функции лежащие рядом с ней и так без конца по цепочке.

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
            return this;
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
            return this;
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

### click(), click(callBackFunction)

В библиотеке так же есть такая функция как click(). Если её вызвать от jQuery объекта, то она вызовет это событие у
каждого элемента в наборе. Если же в функцию передать аргумент в виде анонимной функции, то это будет функция, которая
будет вызвана при наступлении этого события с каждым элементом набора.

```javascript
{
    click: function click(eventHandler) {
        this.elements.forEach((element) => {
            if (eventHandler) {
                element.addEventListener('click', eventHandler);
            } else {
                element.click()
            }
        });
    }
}
```

И использовать эту функцию мы теперь можем вот так:

```javascript
$('.block').click() //Вызов функции
$('.block').click(function () {//Обработчик события
    console.log("Clicked");
}) 
```

Однако у самого jquery есть одна маленькая особенность:

- Если передаваемая функция будет возвращать `false`, то это будет означать что мы хотим отменить действие этого события
  по-умолчанию. То есть это аналогично вызову ``event.preventDefault()``

Тогда для того что бы это было и в нашей функции нам нужно будет немного изменить код:

```javascript
{
    click: function click(eventHandler) {
        this.elements.forEach((element) => {
            if (eventHandler) {
                element.addEventListener('click', function (event) {
                    const callBackResult = eventHandler(event);
                    if (!callBackResult) {
                        event.preventDefault();
                        event.stopPropagation()
                    }
                });
            } else {
                element.click()
            }
        });


    }
}
```

Теперь мы не передаём просто функцию ``eventHandler`` в функцию ``addEventListener``, а сами при наступлении события
вызываем передаваемую функцию _eventHandler_ для того что бы выяснить вернула ли она нам _**false**_

### Копаем ещё глубжее (_Операции над множеством объектов_)

И так у нас есть небольшой функционал управления тэгом. Но наша цель была в создании возможности групповых действий над
набором элементов одновременно.
Давайте на примере двух функций (html, addClass) добьёмся этого.
Для начала поменяем значение объекта ``mainObject:document.querySelector(stringSelector)``. Теперь это будет переменная
elements, а её значение будет следующим:``elements: document.querySelectorAll(selector),``. Теперь в каждой из
имеющихся в нашем арсенале функций нам необходимо будет поменять алгоритм действий. Так как сейчас мы в каждой функции
оперируем со свойством одного элемента, а теперь у нас это целый набор таких элементов.

#### function html(text)

В принципе для нашей цели нужно изменить функцию совсем немного. А именно: просто вставить туда цикл, который будет
пробегаться по набору объектов и выполнять то действие, которое выполнялось в этой функции ранее.
Нам так же необходимо подумать над логикой операции, которую выполняет наша функция:  
Операция "Установи html содержимое", выполняемая над набором элементов крайне ясна - она означает "выполни с каждым", а
что значит "верни html содержимое" над несколькими элементами разом? Давайте решим по-умолчанию, что в таком случае мы
будем вести речь про первый объект в наборе.

```javascript
{
    html: function html(text) {
        if (text === undefined) {
            return this.elements[0].innerHTML;
        } else {
            this.elements.forEach(element => element.innerHTML = text);
            return this;
        }
    }
}
```

#### function addClass(className)

В данной функции всё намного проще: мы просто на каждый элемент набора добавляем класс, проверив что такого там еще нет.

```javascript
{
    addClass: function addClass(className) {
        this.elements.forEach((element) => {
            if (element.classList.contains(className)) {
                element.classList.add(className)
            }
        });
        return this;
    }
}
```

## Задача

Теперь можете подумать над тем как в эту конструкцию внедрить функцию ``show()``, которая будет отображать элемент
и ``hide()``, которая будет его скрывать. Но для этого необходимо будет разрешить некоторые дилеммы:

- можно управлять двумя свойствами объекта HTML _**visibility**_ и _**display**_ какое из них мы
  будем трогать что бы отображать и скрывать элемент?
- Элемент скрыт это ``display:none``, а отобразить элемент это ``display: block`` или ``display:flex``, а
  может ``display:grid``?
- Как узнать в каком состоянии объект? В каком состоянии у него свойство _**display**_ и свойство _**visibility**_?
  HTMLObject.style.display покажет нам лишь тот факт прописано ли у элемента в тэге свойство
  style: ``<div style="display:none"></div>``. Если же у тэга какое-либо стилевое свойство прописано в CSS
  через ``.style.`` мы про значение css свойства не узнаем.