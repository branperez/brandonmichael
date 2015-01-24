<?php
if (empty($_POST) === false) {
	$errors = array();
	
	$name 		= $_POST['name'];
	$email 		= $_POST['email'];
	$subject 	= $_POST['subject'];
	$message 	= $_POST['message'];
	
	if (empty($name) === true || empty($email) === true || empty($subject) === true || empty($message) === true) {
		$errors[] = header('Location: error.html');
	} else {
		if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
			$errors[] = header('Location: error.html');
		}
	}
	if (empty($errors) === true) {
		mail('info@brandonmichael.me', 'Contact form ' . $subject, $message, 'From: ' . $email);
		header('Location: sent.html?sent');
		exit();
	}
}
?>