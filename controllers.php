<?php
   //sets the content type to javascript 
   header('Content-type: text/javascript');

   
   // includes all js files of the directory
   foreach(glob("src/services/*.js") as $file) {
    readfile($file);
    }

   // includes all js files of the directory
   foreach(glob("src/controllers/*.js") as $file) {
      readfile($file);
   }
?>