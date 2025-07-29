<?php
// Deletion

return [
	'attr' => [
		'cite',
		'datetime'
	],
	'html' => function($tag) {
		$html = '';
		// tag options
		$del = $tag->del;
		$cite = $tag->cite;
		$datetime = $tag->datetime;

		if($cite == '' && $datetime == '') {
			// if no cite or datetime attributes
			$html .= '<del>' . $del . '</del>';
		} elseif($cite !== '' && $datetime == '') {
			// cite provided but not datetime
			$html .= '<del cite="' . $cite . '">' . $del . '</del>';
		} else {
			$html .= '<del cite="' . $cite . '" datetime="' . $datetime . '">' . $del . '</del>';
		}
		return $html;
	}
];
