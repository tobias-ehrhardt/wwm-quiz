<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "wwm";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$dboutput = [];


$sql = "SELECT * FROM questions ORDER BY difficulty ASC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $dboutput[] = $row;
        
    }
} else {
    echo "0 results";
}



function createArray() {
    global $dboutput;
    $questions = [];
foreach ($dboutput as $dbquestion) {
    //print_r($question['difficulty']);
    
    $question = [];
    $question['id'] = $dbquestion['id'];
    $question['question'] = $dbquestion['question'];
    $question['correctAnswer'] = $dbquestion['correct'];
    $question['answers'] = [
        'a' => $dbquestion['a'],
        'b' => $dbquestion['b'],
        'c' => $dbquestion['c'],
        'd' => $dbquestion['d']
    ];
          
    $questions[$dbquestion['difficulty']-1][]=$question;
};
    return $questions;
}

function newQuestion(){
    global $conn;
    
    if (!empty($_POST['editq'])) {
        $question = $_POST['editq'];
        $ans1 = $_POST['edita1'];
        $ans2 = $_POST['edita2'];
        $ans3 = $_POST['edita3'];
        $ans4 = $_POST['edita4'];
        $correct = strtolower($_POST['editc']);
        $difficulty = $_POST['editd'];
        
        $question = $conn->real_escape_string($question);
        $ans1 = $conn->real_escape_string($ans1);
        $ans2 = $conn->real_escape_string($ans2);
        $ans3 = $conn->real_escape_string($ans3);
        $ans4 = $conn->real_escape_string($ans4);
        
        $tab = "INSERT INTO questions (question, a, b, c, d, correct, difficulty) 
        VALUES('$question', '$ans1', '$ans2', '$ans3', '$ans4', '$correct', '$difficulty')";

    if ($conn->query($tab) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $tab . "<br>" . $conn->error;
    }
        echo '<meta http-equiv=refresh content="0; url=./list.php?create=1">';
    }
    
}

function editQuestion() {
    global $conn;
    $edsql = "SELECT * FROM questions WHERE id=".$_GET['questionId'];
    $editresult = $conn->query($edsql);
    $edrow = $editresult->fetch_assoc();
    return $edrow;
        
}

function finishEdit(){
    global $conn;
    if(!empty($_POST['delete'])) {
        $deletesql = "DELETE FROM questions where id=".$_GET['questionId'];
        $delete = $conn->query($deletesql);
        echo '<meta http-equiv=refresh content="0; url=./list.php?delete=1">';
    } else {
    if (!empty($_POST['editq'])) {
        $question = $_POST['editq'];
        $ans1 = $_POST['edita1'];
        $ans2 = $_POST['edita2'];
        $ans3 = $_POST['edita3'];
        $ans4 = $_POST['edita4'];
        $correct = strtolower($_POST['editc']);
        $difficulty = $_POST['editd'];
        
        $question = $conn->real_escape_string($question);
        $ans1 = $conn->real_escape_string($ans1);
        $ans2 = $conn->real_escape_string($ans2);
        $ans3 = $conn->real_escape_string($ans3);
        $ans4 = $conn->real_escape_string($ans4);
        
        $fedsql = 'UPDATE questions SET question="'.$question.'", a="'.$ans1.'", b="'.$ans2.'", c="'.$ans3.'", d="'.$ans4.'", correct="'.$correct.'", difficulty="'.$difficulty.'" WHERE id='.$_GET['questionId'];
        $fiedsql = $conn->query($fedsql);
    
        echo '<meta http-equiv=refresh content="0; url=./list.php?edit=1">'; 
    }
    }
    
}


function displayDelete(){
    global $conn;
    $delsql = 'SELECT difficulty FROM questions WHERE id='.$_GET['questionId'];
    $deresult = $conn->query($delsql);
    
    $desql = $deresult->fetch_assoc();
    
    $testsql = "SELECT * FROM questions WHERE difficulty=".$desql['difficulty'];
    $ttsql = $conn->query($testsql);
    
    while($ttested = $ttsql->fetch_assoc()) {
        $tested[] = $ttested;
        
    }
    
    $ifsql = count($tested);
    
    if($ifsql > 1){
        $enoughtest = true;
    } else {
        $enoughtest = false;
    }
    
    
    
    return $enoughtest;
    
}
//$conn->close();    
    
?>