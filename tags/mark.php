<?php
// Mark

return [
	'attr' => [
		'class'
	],
	'html' => function($tag) {
		$html = '';
		$mark = $tag->mark;
		$class = $tag->class;

		if($class == '') {
			// if no class attributes
			$html .= '<mark>' . $mark . '</mark>';
		} else {
			$html .= '<mark class="' . $class . '">' . $mark . '</mark>';
		}
		return $html;
	}
];
