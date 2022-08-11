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

$res = "INSERT INTO questions (question, a, b, c, d, correct) VALUES('a', 'b', 'c', 'd', 'e', 'f')";

if ($conn->query($res) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $res . "<br>" . $conn->error;
}

$sql = "SELECT id, question, a, b, c, d, correct FROM questions";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br> id: ". $row["id"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>