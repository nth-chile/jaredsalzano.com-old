<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/x-font-ttf");
echo @file_get_contents("https://jaredsalzano.com/assets/fonts/GT-America/GT-America-Standard-Regular.ttf");