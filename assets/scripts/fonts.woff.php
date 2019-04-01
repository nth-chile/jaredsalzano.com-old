<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/font-woff");
echo @file_get_contents("http://box5652.temp.domains/~jaredsal/jaredsalzanodotcom/assets/fonts/GT-America/GT-America-Standard-Regular.woff");