<?php
// Small Caps

return [
	'attr' => [
		'class'
	],
	'html' => function($tag) {
		$html = '';
		$smallcaps = $tag->smallcaps;
		$class = $tag->class;

		if($class == '') {
			// if no class attributes
			$html .= '<span class="markup__smallcaps">' . $smallcaps . '</span>';
		} else {
			$html .= '<span class="' . $class . '">' . $smallcaps . '</span>';
		}
		return $html;
	}
];
