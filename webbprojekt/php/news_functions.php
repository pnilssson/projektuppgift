<?php
require_once("db_connect.php");

$connect = dbConnect();

if (isset($_POST['upload'])){
$news_img = $_FILES['newsImg']['name'];
$news_title = mysqli_real_escape_string($connect, $_POST['newsTitle']);
$news_text = mysqli_real_escape_string($connect, $_POST['newsText']);

$target = "../img/newsImages/".basename($news_img);

$sql = "INSERT INTO news (newsImg, newsTitle, newsText) VALUES ('$news_img', '$news_title', '$news_text')";
mysqli_query($connect, $sql);
if(move_uploaded_file($_FILES['newsImg']['tmp_name'], $target)){
    echo "Nyhet & bild uppladdad. <a href='post_news.html'>Tillbaka</a>";
}else {
    echo "ERROR: Nyheten eller bilden kunde inte läggas till. <a href='post_news.html'>Tillbaka</a>";
}
}

mysqli_close($connect);
?>
