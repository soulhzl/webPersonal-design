<?php 
if ($_FILES['file']) {
	foreach ($_FILES['file'] as $key) {
		echo $key;
	}
}
;
?>