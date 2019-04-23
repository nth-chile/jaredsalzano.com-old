<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/vnd.ms-fontobject");
echo @file_get_contents("https://jaredsalzano.com/assets/fonts/GT-America/GT-America-Standard-Regular.eot");