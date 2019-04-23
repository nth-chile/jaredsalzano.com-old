<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/font-woff");
echo @file_get_contents("https://jaredsalzano.com/assets/fonts/GT-America/GT-America-Standard-Regular.woff");