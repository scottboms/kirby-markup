<?php
// Subscript

return [
	'attr' => [
		'class'
	],
	'html' => function($tag) {
		$html = '';
		$sub = $tag->sub;
		$class = $tag->class;

		if($class == '') {
			// if no class attributes
			$html .= '<sub>' . $sub . '</sub>';
		} else {
			$html .= '<sub class="' . $class . '">' . $sub . '</sub>';
		}
		return $html;
	}
];
