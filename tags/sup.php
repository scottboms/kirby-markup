<?php
// Superscript

return [
	'attr' => [
		'class'
	],
	'html' => function($tag) {
		$html = '';
		$sup = $tag->sup;
		$class = $tag->class;

		if($class == '') {
			// if no class attributes
			$html .= '<sup>' . $sup . '</sup>';
		} else {
			$html .= '<sup class="' . $class . '">' . $sup . '</sup>';
		}
		return $html;
	}
];
