<?php

require_once("php/db_connect.php");

$connect = dbConnect();

$sql = "SELECT * FROM news ORDER BY newsId DESC";
$result = mysqli_query($connect, $sql);
$i = 1;
while($row = mysqli_fetch_assoc($result)){

    echo "<article class='grids-news'>";
    echo "<a href='#'><img src='img/newsImages/".$row['newsImg']."'></a>";
    echo "<h4>".$row['newsTitle']."</h4>";
    echo "<p class='news-date'>".$row['newsDate']."</p>";
    echo "<a href='#'><p class='news-text'>".$row['newsText']."</p></a>";
    echo "</article>";
    $i++;
    if ($i == 5){
        break;
    }
}
?>