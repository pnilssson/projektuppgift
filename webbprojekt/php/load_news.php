<?php
    require_once("db_connect.php");

    $connect = dbConnect();

    $sql = "SELECT * FROM news ORDER BY newsId DESC";
    $result = mysqli_query($connect, $sql);
    $i = 1;
    for($j = 0; $j < 3; $j++){
        $row = mysqli_fetch_assoc($result);
        echo "<article class='grid-news-$i'>";
        echo "<img src='img/newsImages/".$row['newsImg']."'>";
        echo "<h4>".$row['newsTitle']."</h4>";
        echo "<p class='news-text'>".$row['newsText']."</p>";
        echo "</article>";
        $i++;
    }
    ?>