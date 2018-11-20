<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Campus Mölndal</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../style/style.css">
</head>
<body>

<section>
    <form action="news_functions.php" method="post" id="newsForm">
        <?php include('errors.php'); ?>
        <label for="newsImg">Nyhetens bild</label>
        <input type="file" name="newsImg" id="newsImg">
        <label for="newsTitle">Nyhetens titel</label>
        <input type="text" name="newsTitle" id="newsTitle">
        <label for="newsText">Nyhetens innehåll</label>
        <textarea name="newsText" form="newsForm" id="newsText"></textarea>
        <input type="submit" value="Lägg till nyhet">
    </form>
</section>

</body>
</html>