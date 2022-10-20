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
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');

        body {
            font-family: Montserrat, sans-serif;
            background: #F4F6FF;
            color: #2A46FF;
            font-weight: 400;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: "Roboto Condensed", sans-serif;
        }

        h1 {
            font-weight: 700;
            color: #333984;
        }

        button {
            background: none;
            border: 2px solid #00D495;
            color: #00D495;
            border-radius: 4px;
            padding: .5rem 1rem;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background-color: #00D495;
            color: white;
        }

    </style>
</head>
<body>
<h1>Список групп</h1>
<p>
    <?php
    $groups = getPDO()->query('SELECT DISTINCT `group` FROM students')->fetchAll(PDO::FETCH_ASSOC);
    foreach ($groups as $groupObject) {
        echo $groupObject['group'] . "<br>";
    }
    ?>
</p>
<h1>Список студентов</h1>
<p>
    <?php
    $students = getPDO()->query('SELECT * FROM students')->fetchAll(PDO::FETCH_OBJ);
    foreach ($students as $studentObject) {
        echo "$studentObject->name $studentObject->surname <br>";
    }
    ?>
</p>
<button>Click me</button>
</body>
</html>
