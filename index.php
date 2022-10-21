<?php
include 'db.php';
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

        body {
            font-family: Jost, sans-serif;
            background: #F4F6FF;
            color: #333984;
            font-weight: 400;
            max-height: 100vh;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: "Roboto Condensed", sans-serif;
            color: #333984;
            margin-bottom: .25rem;
        }

        p {
            color: #2A46FF;
            font-size: 1.4em;
        }

        h1 {
            font-weight: 700;
        }

        button {
            background: none;
            border: 2px solid #5B7FA7;
            color: #5B7FA7;
            border-radius: 4px;
            padding: .5rem 1rem;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background-color: #5B7FA7;
            color: white;
        }

        hr {
            border-color: #85BFCD;
            border-style: solid;
            margin: 0;
            width: 30%;
        }

    </style>
</head>
<body>
<h1>Список групп</h1>
<h2>Выборка по одному</h2>
<hr>
<p>
    <?php
    echo getPDO()->query('SELECT * FROM students')->fetch(PDO::FETCH_ASSOC)['name'] . " ";
    echo getPDO()->query('SELECT * FROM students')->fetch(PDO::FETCH_ASSOC)['name'] . " ";
    echo getPDO()->query('SELECT * FROM students')->fetch(PDO::FETCH_ASSOC)['name'] . " ";
    ?>
    <br>
    <?php
    $PDOStatement = getPDO()->query('SELECT * FROM students');
    echo $PDOStatement->fetch(PDO::FETCH_ASSOC)['name'] . " ";
    echo $PDOStatement->fetch(PDO::FETCH_ASSOC)['name'] . " ";
    echo $PDOStatement->fetch(PDO::FETCH_ASSOC)['name'] . " ";
    ?>
</p>
<h2>Выборка всех (Одна строка массив)</h2>
<hr>
<p>
    <?php
    $groups = getPDO()->query('SELECT DISTINCT `group` FROM students')->fetchAll(PDO::FETCH_ASSOC);
    foreach ($groups as $groupObject) {
        echo json_encode($groupObject, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . " " . $groupObject['group'] . "<br>";
    }
    ?>
</p>
<h2>Выборка всех (одна строка объект)</h2>
<hr>
<p>
    <?php
    $students = getPDO()->query('SELECT * FROM students')->fetchAll(PDO::FETCH_OBJ);
    foreach ($students as $studentObject) {
        echo "$studentObject->name $studentObject->surname <br>";
    }
    ?>
</p>
<form action="addStudent.php">
    <button type="submit">Добавить студента</button>
</form>
</body>
</html>
