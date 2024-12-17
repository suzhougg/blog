<?php
// 由于没有服务器，所以只能用于展示效果图
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendors/PHPMailer/src/Exception.php';
require 'vendors/PHPMailer/src/PHPMailer.php';
require 'vendors/PHPMailer/src/SMTP.php';

$to = "herbert501@qq.com";
$from = $_POST['email'];
$name = $_POST['name'];
$csubject = $_POST['subject'];
$number = $_POST['number'];
$cmessage = $_POST['message'];

$subject = "你有一条留言。";

$logo = 'img/logo.png';
$link = '#';

$body = "<!DOCTYPE html><html lang='zh-CN'><head><meta charset='UTF-8'><title>投递邮件</title></head><body>";
$body .= "<table style='width: 100%;'>";
$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
$body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
$body .= "</td></tr></thead><tbody><tr>";
$body .= "<td style='border:none;'><strong>名字:</strong> {$name}</td>";
$body .= "<td style='border:none;'><strong>邮箱:</strong> {$from}</td>";
$body .= "</tr>";
$body .= "<tr><td style='border:none;'><strong>主题:</strong> {$csubject}</td></tr>";
$body .= "<tr><td></td></tr>";
$body .= "<tr><td colspan='2' style='border:none;'>{$cmessage}</td></tr>";
$body .= "</tbody></table>";
$body .= "</body></html>";

$mail = new PHPMailer(true);

try {
    // 服务器设置
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    // QQ的SMTP服务器
    $mail->Host = 'mail.qq.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'herbert501@qq.com';
    $mail->Password = 'ynfxwzfgesgrdifd';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // 接收者
    $mail->setFrom($from);
    $mail->addAddress($to);

    // 内容
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $body;

    $mail->send();
    echo '邮件发送成功';
} catch (Exception $e) {
    echo "邮件发送失败：{$mail->ErrorInfo}";
}
?>