<?php

function dbConnect(){
    $connect = mysqli_connect("localhost", "root", "", "webbprojekt")
        or die("Could not connect to webbprojekt");
    mysqli_select_db($connect, "webbprojekt") or die("Could not connect to webbprojekt");
    return $connect;
}

function dbDisconnect($connect){
    mysqli_close($connect);
}