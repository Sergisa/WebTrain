<?php
include 'db.php';
$name = "Иван";
$surname = "Иванов";
$group = "20ИТ-ПИ(б/о)ПИП-1";
//$students = getPDO()->query("INSERT INTO students (`surname`, `name`, `group`) VALUES ('" . $name . "', '" . $surname . "', '" . $group . "')")->execute();
getPDO()->prepare('INSERT INTO students (`surname`, `name`, `group`) VALUES (:name, :surname, :group)')->execute([
    'name' => $name,
    'surname' => $surname,
    'group' => $group
]);