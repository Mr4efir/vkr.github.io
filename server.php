<?php
session_start();
$users = [
    "test@example.com" => "12345"
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST["action"] == "login") {
        $email = $_POST["email"];
        $password = $_POST["password"];
        if (isset($users[$email]) && $users[$email] == $password) {
            $_SESSION["user"] = $email;
            header("Location: profile.html");
            exit();
        } else {
            echo "Неверный логин или пароль";
        }
    }
} elseif (isset($_GET["action"]) && $_GET["action"] == "logout") {
    session_destroy();
    header("Location: login.html");
    exit();
}
?>
