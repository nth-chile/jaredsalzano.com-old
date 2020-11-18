<?php
header('Content-type: text/javascript; Charset=UTF-8');
require_once('getid3/getid3.php');
$array = [];
function listFolderFiles($arr, $dir, $date) {
	global $array;
	$ffs = scandir($dir);
	foreach($ffs as $ff){
		if($ff != '.' && $ff != '..') {
			if(is_dir($dir.'/'.$ff)) {
				listFolderFiles($arr, $dir.'/'.$ff, $ff);
			}
			else {
				$getID3 = new getID3;
				$ThisFileInfo = $getID3->analyze('tracks/'.$date.'/'.$ff);
				$track = array(
					'date'=>$date,
					'duration'=>$ThisFileInfo['playtime_string'],
					'src'=>'http://wedowedo.us/jamtracks/php/tracks/'.$date.'/'.$ff
					);
				array_push($array, $track);
			}
		}
	}
}
listFolderFiles($array, 'tracks', null);
foreach($array as &$v) {
  $v['src'] = utf8_encode($v['src']);
}
$json = 'module.exports ='.json_encode($array);
file_put_contents('../js/TRACKS.js', $json);


?>