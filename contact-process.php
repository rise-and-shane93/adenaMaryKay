<?php

if(isset($_POST['contact_form_submit'])){
    //if the page does have post data, process it

    //gather post data
    $contactName = striptags(trim(htmlspecialchars($_POST['contact_name'])));
    $contactEmail = striptags(trim(htmlspecialchars($_POST['contact_email'])));
    $contactMessage = striptags(trim(htmlspecialchars($_POST['contact_message'])));

    //Create the email message
    $msg = "You have received a message from: ".$contactName.", ".$contactEmail.", Message = ".$contactMessage;

    //the message
    //$msg = "First line of text\nSecond line of text";

    //use wordwrap() if lines are longer than 70 characters
    $msg = wordwrap($msg,70);

    //send email
    mail("cdtharper@gmail.com","New Contact Form Submission",$msg);
    echo 'Email has been sent.';
    //if message successful, redirect user to thank you page
    header('Location: https://adenaharper.com/thank-you');

} else {
    //kick the user from the page
    echo 'Peace out!';
} 

?>