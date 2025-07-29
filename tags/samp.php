<?php
// Sample

return [
	'attr' => [
		'class'
	],
	'html' => function($tag) {
		$html = '';
		$samp = $tag->samp;
		$class = $tag->class;

		if($class == '') {
			// if no class attributes
			$html .= '<samp>' . $samp . '</samp>';
		} else {
			$html .= '<samp class="' . $class . '">' . $samp . '</samp>';
		}
		return $html;
	}
];
