<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<title>We Do - Contact</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<title>We Do</title>
		<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
		<link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32">
		<link rel="manifest" href="manifest.json">
		<link rel="mask-icon" href="safari-pinned-tab.svg" color="#000000">
		<meta name="theme-color" content="#ffffff">
		<link rel="stylesheet" type="text/css" href="css/normalize.css">
		<link rel="stylesheet" type="text/css" href="css/main.css">
		<link href="https://fonts.googleapis.com/css?family=Work+Sans:500,700" rel="stylesheet">
	</head>
	<body>
		<header>
			<a href="index.html" id="logo">
				<img src="images/wedo_logo.svg" alt="logo">
			</a>
			<nav>
				<a href="index.html" class="navlinks" id="home">
					<img src="images/home.svg" alt="home">
				</a>
				<a href="about.html" class="navlinks">
					<img src="images/about.svg" alt="about">
				</a>
				<a href="jams.html" class="navlinks">
					<img src="images/jams.svg" alt="jams">
				</a>
				<a href="videos.html" class="navlinks">
					<img src="images/videos.svg" alt="videos">
				</a>
				<a href="discography.html" class="navlinks">
					<img src="images/discography.svg" alt="discography">
				</a>
				<a href="contact.php" class="navlinks">
					<img src="images/contact.svg" alt="contact">
				</a>
			</nav>
		</header>
		<main id="mobilemain">
			<h1 id="contactheader">Contact Us</h1>

			<?php
$recipientEmail = "us@wedowedo.us";
$emailSubject = "From We Do contact form";
$successMessage = "Your message has been sent.";

$error  = ""; //leave blank
if(isset($_POST['submit'])){
    $name   = $_POST['name'];
    $email   = $_POST['email'];
    $message   = $_POST['message'];
	$result = checkForSpam(Array($name));
	if(trim($name) == "" || trim($email) == "" || trim($message) == ""){
    $error = "All fields are required.";
	}
	else if($result){
		$error = 'You have entered invalid characters.';
	}
	else if(!validEmail($email)){
		$error = 'Please enter a valid email address.';
		$email = '';
	} 
	if($error == ''){
	$priority = 3;
	$php_version = phpversion();
	$headers = "From: $name <$email>\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/plain; charset=iso-8859-1\n";
	$headers .= "X-Priority: $priority\n";
	$headers .= "X-Mailer: PHP $php_version\n";
	$subject = $emailSubject;
	$to_email = $recipientEmail;
	mail($to_email, $subject, $message, $headers);

echo $successMessage;
	}
}
if(!isset($_POST['submit']) || $error != '')
{
echo $error;
?>
<form method="post" action="contact.php">
<div class="formblocks">
	<label for="name">Name:</label>
	<input type="text" name="name" value="<?php echo $name; ?>">
</div>
<div class="formblocks">
	<label for="email">Email:</label>
	<input type="text" name="email" value="<?php echo $email; ?>">
</div>
<div class="formblocks">
	<label for="message">Message:</label>
	<textarea name="message"><?php echo $message; ?></textarea>

	<input type="submit" name="submit" value="Submit">
</div>
</form>
<?php
}
//utility functions
function validEmail($email)
{
	return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i"
			,$email));
}
function checkForSpam($fields){
    $spam = false;
    for ($i=0;$i<count($fields);$i++){
        if (eregi("%0A",$fields[$i]) || eregi("%0D",$fields[$i]) || eregi("\r",$fields[$i]) || eregi("\n",$fields[$i])){
            $spam = true;
        }
    }
    return $spam;
}
?>

			<div id="links">
				<h1>We've got links.</h1>
					<div id="socmedia">
						<a href="http://soundcloud.com/wedowedo" target="_blank"><img src="images/soundcloud_logo.png" alt="Soundcloud"></a>
						<a href="" target="_blank"><img src="images/TwitterLogo_white.png" alt="Twitter"></a>
						<a href="" target="_blank"><img src="images/FB-f-Logo_blue_50.png" alt="Facebook"></a>
						<a href="" target="_blank"><img src="images/YouTube-social-square_dark_48px.png" alt="YouTube"></a>
					</div>
			</div>
		</main>
	</body>
	<script type="text/javascript" src="js_nav_only.js"></script>
</html>
	