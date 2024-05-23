<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HuGif - Free Online Hosting</title>
    <!--Reviewed By Staff In HuGif-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
</head>
<body>
<div style="text-align: center;">
    <h2 style="color:#000000;"><strong>Free Online Hosting (NO SIGN IN NEEDED!) Unlimited Sites!</strong></h2>
    <form action="" method="post">
        <label for="folderName">Folder Name (Random):</label>
        <input type="text" id="folderName" name="folderName" readonly value="<?php echo generateRandomString(8); ?>"><br><br>
        <label for="fileName">File Name:</label>
        <input type="text" id="fileName" name="fileName" placeholder="example, index.html Or PHP"><br><br>
        <label for="fileContent">File Content (PHP or HTML code):</label><br>
        <textarea id="fileContent" name="fileContent" rows="6" cols="50" placeholder="Enter Your PHP/HTML Code Here..."></textarea><br><br>
        <input class="btn btn-success btn-xl" type="submit" value="Create Folder and File" name="submit">
    </form>
</div>
    <?php
    if(isset($_POST["submit"])) {
        $folderName = $_POST["folderName"];
        $fileName = $_POST["fileName"];
        $fileContent = $_POST["fileContent"];

        // Create folder
        $folderPath = "" . $folderName;
        if (!file_exists($folderPath)) {
            mkdir($folderPath, 0777, true);
            echo "Your Site has been created successfully. check it out <a href='http://hugif.rf.gd/$folderName'>http://hugif.rf.gd/$folderName</a> <br>";
        } else {
            echo "Folder '$folderName' already exists.<br>";
        }

        // Create file
        $filePath = $folderPath . "/" . $fileName;
        $file = fopen($filePath, "w");
        fwrite($file, $fileContent);
        fclose($file);
        echo "File '$fileName' created successfully with hugif hosting<br><pre><h1><strong>Ad Free Hosting With HuGif</strong></h1></pre>";
    }

    function generateRandomString($length = 8) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, strlen($characters) - 1)];
        }
        return $randomString;
    }
    ?>
</body>
</html>
