<?php
function render($view, array $vars = null){
	return Flight::render("../storage/views/$view.php", $vars);
}