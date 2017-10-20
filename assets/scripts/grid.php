<?php

if(isset($_POST['data'])) {
	$data = json_encode($_POST['data']);
	//rewrite GRID_DATA.js
	//$json = 'module.exports ='.$data;
	$json = 'var GRID_DATA = '.$data;
	file_put_contents('GRID_DATA.js', $json);
	//append to GRID_VERSIONS_LOG.txt
	$txt = "### ".date('F jS Y h:i:sA')." ###".PHP_EOL.PHP_EOL.$data;
 	$myfile = file_put_contents('GRID_VERSIONS_LOG.txt', $txt.PHP_EOL.PHP_EOL.PHP_EOL , FILE_APPEND | LOCK_EX);
}