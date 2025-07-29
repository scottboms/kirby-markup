<?php
// Abbreviation

return [
	'attr' => [
		'title',
		'class'
	],
	'html' => function($tag) {
		$html = '';
		// tag options
		$abbr = $tag->abbr;
		$title = $tag->title;
		$class = $tag->class;

		if($title == '' && $class == '') {
			// if no title or class attributes
			$html .= '<abbr>' . $abbr . '</abbr>';
		} elseif($title !== '' && $class == '') {
			// title provided but no class
			$html .= '<abbr title="' . $title . '">' . $abbr . '</abbr>';
		} else {
			$html .= '<abbr title="' . $title . '" class="' . $class . '">' . $abbr . '</abbr>';
		}
		return $html;
	}
];
