<?php
// Citation

return [
	'attr' => [
		'class'
	],
	'html' => function($tag) {
		$html = '';
		$cite = $tag->cite;
		$class = $tag->class;

		if($class == '') {
			// if no class attributes
			$html .= '<cite>' . $cite . '</cite>';
		} else {
			$html .= '<cite class="' . $class . '">' . $cite . '</cite>';
		}
		return $html;
	}
];
