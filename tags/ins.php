<?php
// Insert

return [
	'attr' => [
		'class'
	],
	'html' => function($tag) {
		$html = '';
		$ins = $tag->ins;
		$class = $tag->class;

		if($class == '') {
			// if no class attributes
			$html .= '<ins>' . $ins . '</ins>';
		} else {
			$html .= '<ins class="' . $class . '">' . $ins . '</ins>';
		}
		return $html;
	}
];
