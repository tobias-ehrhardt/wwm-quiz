<?php
include("./php/functions.php");
if(!empty($_GET)) {
editQuestion();
displayDelete();
finishEdit();
$edit = true;
$enoughtest = displayDelete();
$edresult = editQuestion();
    
$edc = $edresult['correct'];
$eddi = $edresult['difficulty'];
} else {
newQuestion();
$edit = false;
$enoughtest = false;
}
?>
<html>
    <head>
       <link rel="icon" href="./wwm.png" sizes="32x32">
       <meta charset="UTF-8">
       <title>Wer wird Millionär 2.0</title> 
    </head>
    
    <body>
   <form class="editor" method="post">
    <label class="edit-question"><textarea name="editq" placeholder="Frage" maxlength="120" required><?php if($edit == true){echo $edresult['question'];} ?></textarea></label>
    <label class="answer-editor">
        <label class="ans-ed"><input name="edita1" placeholder="Antwort A" required autocomplete="off" value="<?php if($edit == true){echo $edresult['a'];} ?>"></label>
        <label class="ans-ed"><input name="edita2" placeholder="Antwort B" required autocomplete="off" value="<?php if($edit == true){echo $edresult['b'];} ?>"></label>
        <label class="ans-ed"><input name="edita3" placeholder="Antwort C" required autocomplete="off" value="<?php if($edit == true){echo $edresult['c'];} ?>"></label>
        <label class="ans-ed"><input name="edita4" placeholder="Antwort D" required autocomplete="off" value="<?php if($edit == true){echo $edresult['d'];} ?>"></label>
    </label>
    <label class="corr-answer"><select name="editc" required>
        <option value="">Bitte die richtige Antwort angeben.</option>   
        <option value="A" <?php if($edit == true && $edc=="a"){echo "selected";} ?>>A</option>
        <option value="B" <?php if($edit == true && $edc=="b"){echo "selected";} ?>>B</option>
        <option value="C" <?php if($edit == true && $edc=="c"){echo "selected";} ?>>C</option>
        <option value="D" <?php if($edit == true && $edc=="d"){echo "selected";} ?>>D</option>
    </select></label>
    <label class="difficulty-editor"><select name="editd" required>
        <option value="">Bitte die Schwierigkeit angeben.</option>
        <option value="1" <?php if($edit == true && $eddi=="1"){echo "selected";} ?>>1</option>
        <option value="2" <?php if($edit == true && $eddi=="2"){echo "selected";} ?>>2</option>
        <option value="3" <?php if($edit == true && $eddi=="3"){echo "selected";} ?>>3</option>
        <option value="4" <?php if($edit == true && $eddi=="4"){echo "selected";} ?>>4</option>
        <option value="5" <?php if($edit == true && $eddi=="5"){echo "selected";} ?>>5</option>
        <option value="6" <?php if($edit == true && $eddi=="6"){echo "selected";} ?>>6</option>
        <option value="7" <?php if($edit == true && $eddi=="7"){echo "selected";} ?>>7</option>
        <option value="8" <?php if($edit == true && $eddi=="8"){echo "selected";} ?>>8</option>
        <option value="9" <?php if($edit == true && $eddi=="9"){echo "selected";} ?>>9</option>
        <option value="10" <?php if($edit == true && $eddi=="10"){echo "selected";} ?>>10</option>
        <option value="11" <?php if($edit == true && $eddi=="11"){echo "selected";} ?>>11</option>
        <option value="12" <?php if($edit == true && $eddi=="12"){echo "selected";} ?>>12</option>
        <option value="13" <?php if($edit == true && $eddi=="13"){echo "selected";} ?>>13</option>
        <option value="14" <?php if($edit == true && $eddi=="14"){echo "selected";} ?>>14</option>
        <option value="15" <?php if($edit == true && $eddi=="15"){echo "selected";} ?>>15</option>
    </select></label>
    <label class="edit-submit"><input type="submit" value="Speichern" name="edits"></label>
    <label class="delete-submit <?php if($enoughtest == false){echo"phide";} ?>"><input type="submit" name="delete" value="Löschen"></label>
</form>
<a href="./list.php" class="quest-link">Fragen</a>
<link rel="stylesheet" type="text/css" href="style.css">
        
        
    </body>
</html>