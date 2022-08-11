<?php
include("./php/functions.php");
$questions = $dboutput;

$difficulty =0;
$difficulty1 =1;

?>
<html>
    <head>
       <link rel="icon" href="./wwm.png" sizes="32x32">
       <meta charset="UTF-8">
       <title>Wer wird Millionär 2.0</title>  
    </head>
     <body>
        
        <a href="./editor.php" class="new-question">Neue Frage</a>
        <a href="./index.php" class="main">Hauptmenü</a>
        <div class="questions">
            <?php foreach($questions as $question): ?>
                <?php if($difficulty != $question['difficulty']) {
                    if($difficulty != 0){
                        echo ("</div></div>");
                    }
                    echo ('<div class="list-toggle-container"><button class="toggle-list data-list="'.$difficulty1.'">Schwierigkeit '.$difficulty1.'</button><div class="list-style stretch diff'.$difficulty1.'">');
                    $difficulty += 1;
                    $difficulty1 = $difficulty + 1;
                } ?> 
                <div class="quest-ed"><div><?= $question['question'] ?></div>
                <a href="editor.php?questionId=<?= $question['id']?>"></a></div>
            <?php endforeach ?>
         <?= "</div>" ?>
         </div>
         <div class="Notifications <?php if(!empty($_GET['delete'])  || !empty($_GET['edit']) || !empty($_GET['create'])){} else {echo "hidden";} ?>">
         <?php if(!empty($_GET['delete'])){echo "Die Frage wurde erfolgreich gelöscht";} ?>
         <?php if(!empty($_GET['edit'])){echo "Die Frage wurde erfolgreich geändert";} ?>
         <?php if(!empty($_GET['create'])){echo "Die Frage wurde erfolgreich erstellt";} ?>
         </div>
        <link rel="stylesheet" type="text/css" href="list.css">
        <script type="text/javascript" src="list.js"></script>
    </body>
</html>