<?php
include("./php/functions.php");

$questions = createArray();    
?>
<html lang="de">
<head>
    <link rel="icon" href="./wwm.png" sizes="32x32">
    <meta charset="UTF-8">
    <title>Wer wird Millionär 2.0</title>
</head>
<body>
<h1>Wer wird Millionär 2.0</h1>
<div id="end" ><button id="endb" class="hidden">Hauptmenü</button></div>
<div id="started" class="not-hidden"><button id="start">Start</button></div>
<div id="add" class="not-hidden"><button id="adder">Fragen Editor</button></div>
<div class="quiz-container hidden show">
  <div id="quiz"></div>
</div>


<div id="jokers" class="hidden show"><button class="joker fifty">50:50</button><button class="joker tel">Tel.</button><button class="joker audience">&equiv;</button><button id="abort">Ende</button></div>
<div id="timer" class="hidden show"></div>
<div class="hidden tel-out"></div>
    <div class="hidden aud-out"><div class="out"></div><div class="out"></div><div class="out"></div><div class="out"></div><div class="bar-container"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div><div class="aud-text">A</div><div class="aud-text">B</div><div class="aud-text">C</div><div class="aud-text">D</div></div>
<div id="money" class="hidden show"><span class="money-row current-row" data-columns="1">50€</span><span class="money-row" data-columns="2">100€</span><span class="money-row" data-columns="3">200€</span><span class="money-row" data-columns="4">300€</span><span class="money-row checkpoint" data-columns="5">500€</span><span class="money-row" data-columns="6">1.000€</span><span class="money-row" data-columns="7">2.000€</span><span class="money-row" data-columns="8">4.000€</span><span class="money-row" data-columns="9">8.000€</span><span class="money-row checkpoint" data-columns="10">16.000€</span><span class="money-row" data-columns="11">32.000€</span><span class="money-row" data-columns="12">64.000€</span><span class="money-row" data-columns="13">125.000€</span><span class="money-row" data-columns="14">500.000€</span><span class="money-row checkpoint" data-columns="15">1.000.000€</span></div>

<link rel="stylesheet" type="text/css" href="style.css">
<script>
    window.questions = <?php echo json_encode($questions) ?>
</script>
<script type="text/javascript" src="quiz.js"></script>
</body>
</html>
