<?php
include 'db.php';
getPDO()->prepare('INSERT INTO students (`name`, `surname`, `group`) VALUES (:name, :surname, :group)')->execute([
    'name' => $_GET['name'],
    'surname' => $_GET['surname'],
    'group' => $_GET['group']
]);
header('Location: index.php');