<?php
// Definition

return [
	'attr' => [
		'class',
		'title'
	],
	'html' => function($tag) {
		$html = '';
		$dfn = $tag->dfn;
		$class = $tag->class;
		$title = $tag->title;

		if($title == '' && $class == '') {
			// if no title or class attributes
			$html .= '<dfn>' . $dfn . '</dfn>';
		} elseif($title !== '' && $class == '') {
			// title provided but no class
			$html .= '<dfn title="' . $title . '">' . $dfn . '</dfn>';
		} else {
			$html .= '<dfn title="' . $title . '" class="' . $class . '">' . $dfn . '</dfn>';
		}
		return $html;
	}
];
