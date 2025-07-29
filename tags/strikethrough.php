<?php
// Strikethrough

return [
	'attr' => [
		'class'
	],
	'html' => function($tag) {
		$html = '';
		$s = $tag->s;
		$class = $tag->class;

		if($class == '') {
			// if no class attributes
			$html .= '<s>' . $s . '</s>';
		} else {
			$html .= '<s class="' . $class . '">' . $s . '</s>';
		}
		return $html;
	}
];
