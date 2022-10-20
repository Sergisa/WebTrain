![alt text](https://github.com/Sergisa/WebTrain/blob/master/webTrain.png?raw=true)

# Примеры подключения к базе данных

## Данные для подключения

Для подключения к серверу базы данных необходимо несколько параметров

* Расположение сервера
* Порт базы данных
* Имя базы данных
* Имя пользователя
* Пароль

Часть этих данных при подключении выражаются в виде строки типа ``mysql:host=localhost;port=3307;dbname=testdb``
Можно опустить параметр _**порт**_ если у MySQL сервера, к которому вы подключаетесь, порт используется стандартный:
3306

Для Создания подключения к базе в языке PHP используется объект PDO. Конструктор этого объекта требует в виде аргументов
строку для подключения, имя пользователя и пароль.

```injectablephp
$connection = new PDO(
    'mysql:host=sergisa.ru;dbname=students_test',
    'student',
    '20IT-PI(b/o)PIP-1'
)
```

Теперь при использовании переменной ``$connection`` можно выполнять запросы к базе данных. Так как база данных сама по
себе разговаривает не на языке PHP, а на языке **SQL** то запрос к ней мы будем передавать на этом языке в виде строки.
Вот так

```injectablephp
$students = getPDO()->query('SELECT * FROM students');
```

Функция ```query``` выполняет запрос к базе данных, переданный в виде строки, в качестве аргумента.
Данная функция возвращает объект ``PDOStatement``.

### FetchAll

```injectablephp
$students = getPDO()->query('SELECT * FROM students')->fetchAll(PDO::FETCH_OBJ);
echo $students[0]->name;
```

Далее вызывается функция ``fetchAll`` которая возвращает все строки данного запроса. Аргументом в данной функции
передаётся константа ``PDO::FETCH_OBJ`` которая указывает что возвращенный набор строк должен быть представлен в виде
объекта.  
Например: следующий код указывает что возвращаемый набор строк будет представлен в качестве массива

```injectablephp
$students = getPDO()->query('SELECT * FROM students')->fetchAll(PDO::FETCH_ASSOC);
echo $students[0]['name'];
```

Данный код вернёт массив массивов. На первом уровне это будет массив строк таблицы из базы данных, полученных в
результате SQL запроса. На втором уровне это тоже будет массив с ключами.

### Fetch

Функция ``fetch`` вызванная от объекта ``PDOStatement`` вернёт лишь один объект или массив с ключами, в зависимости от
того, какой аргумент был передан в эту функцию. Если результатом выполнения SQL запроса будет множество строк, то
функция ``fetch`` будет содержать первую из них в виде массива с ключами или объекта.

```injectablephp
$firstStudent = getPDO()->query('SELECT * FROM students')->fetch(PDO::FETCH_ASSOC);
echo $firstStudent->name;
```

### FETCH_OBJ и FETCH_ASSOC

Если мы представим и сами руками напишем тот массив который нам возвращает функция ``fetchAll()`` то выглядеть это будет
так для ``FETCH_ASSOC``

```injectablephp
// $students = getPDO()->query('SELECT * FROM students')->fetchAll(PDO::FETCH_ASSOC);
$students = [
    [ //Первая строка базы
        "name" => "Иван",
        "surname" => "Иванов",
        "group" => "20ИТ-ПИ(б/о)ПИП-1"
    ],
    [ //Вторая строка базы
        "name" => "Сергей",
        "surname" => "Исаков",
        "group" => "20ИТ-МО(б/о)ИСБД-1"
    ]
]
```

И следующим образом для ``FETCH_OBJ``:

```injectablephp
// $students = getPDO()->query('SELECT * FROM students')->fetchAll(PDO::FETCH_ASSOC);
$students = [
    [<Object>], //Первая строка базы
    [<Object>] //Вторая строка базы
]
```

То есть в последнем варианте это объекты никакого класса. Или же можно представить что это объекты класса _**Student**_
который мы не создавали. Именно поэтому мы не сможем обратиться к полям(столбцам) записи через ``['name']``. Как будто
бы мы создавали класс Student с полями name, surname, group и теперь в виде массива наблюдаем объекты этого класса.

### Цикл по элементам

По этому массиву можно пройтись циклом, как и всегда.

```injectablephp
foreach ($students as $studentObject) {
    echo $studentObject->name;
}
```

На каждой итерации цикла внутри него мы будем иметь переменную ``$studentObject`` которая будет представлять одного
студента на каждой итерации.
