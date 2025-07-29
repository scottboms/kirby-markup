<?php
// Inline Quote

return [
	'attr' => [
		'class',
		'cite'
	],
	'html' => function($tag) {
		$html = '';
		$q = $tag->q;
		$class = $tag->class;
		$cite = $tag->cite;

		if($class == '' && $cite == '') {
			// if no class or cite attributes
			$html .= '<q>' . $q . '</q>';
		} elseif($class !== '' && $cite == '') {
			// class provided but no cite
			$html .= '<q class="' . $class . '">' . $q . '</q>';
		} else {
			$html .= '<q class="' . $class . '" cite="' . $cite . '">' . $q . '</q>';
		}
		return $html;
	}
];
