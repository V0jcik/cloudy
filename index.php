<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="gallery/icon.png">
  <title>VojBot</title>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="index.php"><img src="gallery/icon.png"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span><img src="https://img.icons8.com/material-rounded/24/000000/double-down.png"/></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.php">Główna</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Komendy
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="user.php">Użytkownik</a></li>
              <li><a class="dropdown-item" href="mod.php">Moderator</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="admin.php">Administrator</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="author.php">Twórca</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="header">
      <span class="h1">VojBot</span>
      <span class="fs-4"> to chat bot, odpowiada na zadane mu komendy. Lecz potrafi też samodzielnie działać, na przykład skanować wiadomości wysyłane na chacie. Przykładem mogą być słowa obraźliwe które wykrywa i banuje autora takowej wiadomości na określony czas.
      <br><br>
      Bot posiada za równo komendy dla Moderatorów (osób z uprawnieniami zarządzania chatem) jak i komendy dla Użytkowników, którzy mogą wchodzić z nim w interakcję.</span>
    </div>
    <div class="row my-5">
      <div class="chatarea col-md-8">
        <span class="h1">Chat</span> <br>
        <div class="chat" id="chat">
        <div id="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
        <input type="text" id="name" placeholder="!hi">
      </div>
      <div class="rengar col-md-4 align-middle"></div>
    </div>
  </div>
<?php
  include 'ComF.html'
  ?>
<script src="bot.js"></script>