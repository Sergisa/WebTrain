<?php
    include 'db.php';
    $request = $_SERVER['REQUEST_METHOD'];
    $data = json_decode(file_get_contents("php://input"), true);
    if ($data == null) $data = [];
    if (!empty($_GET)) $data = array_merge($data, $_GET);
    if (!empty($_POST)) $data = array_merge($data, $_POST);

    switch ($request) {
        case 'GET':
            echo processGet($data);
            break;
        case 'POST':
            processPost($data);
            break;
        case 'PUT':
            processPut($data);
            break;
        case 'DELETE':
            processDelete($data);
            break;
    }
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    function processGet($requestBody): false|string
    {
        return json_encode(DBConnection::getInstance()->query('SELECT * FROM users')->fetchAll(PDO::FETCH_ASSOC));
    }

    function processPost($requestBody): void//create
    {
        DBConnection::getInstance()->prepare(
            'INSERT INTO users (`name`, `email`, `password`) VALUES (:name, :email, :password)'
        )->execute([
            'name' => $requestBody['name'],
            'email' => $requestBody['email'],
            'password' => $requestBody['password']
        ]);
    }

    function processPut($requestBody): void//update
    {
        DBConnection::getInstance()->prepare(
            'UPDATE users SET `name`=:name, `email`=:email, `password`=:password WHERE ID=:id'
        )->execute([
            'id' => $requestBody['id'],
            'name' => $requestBody['name'],
            'email' => $requestBody['email'],
            'password' => $requestBody['password']
        ]);
    }

    function processDelete($requestBody)
    {
        DBConnection::getInstance()->prepare('DELETE FROM users WHERE ID=:id')->execute(['id' => $requestBody['id']]);
    }