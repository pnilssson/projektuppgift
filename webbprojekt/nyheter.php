<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Campus Mölndal</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <link rel="stylesheet" type="text/css" href="style/nyheter.css">
</head>
<body>
<nav class="navbar">
    <div class="mobile-logo"></div>
    <div class="navbar-toggle" id="js-navbar-toggle">
        <i class="fas fa-bars"></i>
    </div>
    <ul id="js-navbar">
        <li><a href="#"><i class="far fa-compass icon"></i>Studie- och yrkesväglednig</a></li>
        <li><a href="#"><i class="fas fa-book icon"></i>Dina studier</a></li>
        <li><a href="#" class="desktop-logo"></a></li>
        <li><a href="#"><i class="far fa-building icon"></i>Företag och organisationer</a></li>
        <li><a href="#"><i class="fas fa-mobile-alt icon"></i>Kontakta oss</a></li>
    </ul>
</nav>

<div class="news-top-image"></div>
<section class="news-grid-container">

    <div class="headline">
        <h1>Nyheter</h1>
    </div>

    <?php
    require_once("php/db_connect.php");

    $connect = dbConnect();

    $sql = "SELECT * FROM news ORDER BY newsId DESC";
    $result = mysqli_query($connect, $sql);
    $i = 1;
    while($row = mysqli_fetch_assoc($result)){

        echo "<article class='grids-news-$i'>";
        echo "<img src='img/newsImages/".$row['newsImg']."'>";
        echo "<h4>".$row['newsTitle']."</h4>";
        echo "<a href= <p class='news-text'>".$row['newsText']."</p>";
        echo "</article>";
        $i++;
        if ($i == 10){
            break;
        }
    }
    ?>
</section>
<footer class="footer" id="footer">

</footer>

<script src="script/footer.js"></script>
<script src="script/navbar-toggle.js"></script>
</body>
</html>
