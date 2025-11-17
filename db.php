<?php
    /*function getPDO(): PDO
    {
        return new PDO('mysql:host=sergisa.ru;dbname=students_test', 'student', '20IT-PI(b/o)PIP-1');
    }*/
    class DBConnection
    {
        static private $instance = null;
        private function __construct()
        {
        }

        static function getInstance(): PDO
        {
            if (self::$instance == null) {

                self::$instance = new PDO('mysql:host=10.3.50.241;dbname=demo_student', 'demo_student', 'qwerty123');
            }
            return self::$instance;
        }
    }

