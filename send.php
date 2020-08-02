<?php
// подключаем Файлы phpmailer. С помощью функции require, мы заходим в нужную папку и подключаем файл
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Создаём Переменные, которые отправляет пользователь
$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Формирование самого письма/ Всё, что здесь хранится в дальнейшем будет передаваться, как тело письма.
$title = "Новое обращение Best Tout Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Почта:</b> $email<br><br>
<b>Сообщение:</b><br>$message
";

// Настройки PHPMailer $mail->SMTPAuth   = true; (авторизация с помощью логина и пароля)  $mail->SMTPDebug = 2; отлавливает ошибки
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'emelyanova.iuliia@gmail.com'; // Логин на почте
    $mail->Password   = 'm7i-cLu-ZyQ-5Lm'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('emelyanova.iuliia@gmail.com', 'Юлия Емельянова'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('russian.ballerina@yandex.ru');  

    // Отправка сообщения 1/ делаем HTML письмо 2. $mail->Subject = $title; (то, что мы обозначили ранее для titel )
    $mail->isHTML(true); 
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');