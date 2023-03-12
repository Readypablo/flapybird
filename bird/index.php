<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flappy Owl
    </title>
    <link rel="icon" href="../dorabotki/iconka.ico" type="image/x-icon">
    <link rel="stylesheet" href="../style/style.css">

</head>
<body>

<header>
    <div class="left-header">
            <img src="../img/iconka.ico" alt="" class="logo-header" >
        <p>Flappy Owl</p>    
    </div>
    <!-- меню горизонтальное -->
    <div class="center-header">
        <p>MEGA SUPER GAMING OWL</p>
    </div>
    <!-- меню горизонтальное -->
    <div class="right-header">
        <a href="pagers/profile.php"> <input type="button" value="Регистрация" class="btn-header"></a>
    </div>
</header>

<main>

    <canvas id="canvas" width="288" height="512"></canvas>
    <input type="button" value="заного" id="btn-restart" onclick="restart_btn()">
</main>





    <script src="../js/birdscript.js"></script>
    <!-- <script src="../js/script.js"></script> -->
</body>
</html>