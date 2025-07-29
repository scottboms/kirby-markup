<?php

/**
 * Kirby Semantic Markup Plugin
 *
 * @author Scott Boms <plugins@scottboms.com>
 * @link https://github.com/scottboms/kirby-markup
 * @license MIT
**/

use Kirby\Sane\Html;

Html::$allowedTags['abbr'] = ['class','title'];
Html::$allowedTags['cite'] = ['class'];
Html::$allowedTags['del'] = ['cite','datetime'];
Html::$allowedTags['dfn'] = ['class','title'];
Html::$allowedTags['ins'] = ['class'];
Html::$allowedTags['mark'] = ['class'];
Html::$allowedTags['q'] = ['class','cite'];
Html::$allowedTags['s'] = ['class'];
Html::$allowedTags['samp'] = ['class'];
Html::$allowedTags['smallcaps'] = ['class','title'];

use Kirby\Cms\App;

// shamelessly borrowed from distantnative/retour-for-kirby
if (
	version_compare(App::version() ?? '0.0.0', '4.0.1', '<') === true ||
	version_compare(App::version() ?? '0.0.0', '6.0.0', '>=') === true
) {
	throw new Exception('Semantic Markup requires Kirby v4 or v5');
}

Kirby::plugin(
	name: 'scottboms/kirby-markup',
	info: [
		'homepage' => 'https://github.com/scottboms/kirby-markup'
	],
	version: '1.1.3',
	extends: [
		'tags' => [
			'abbr' => require __DIR__ . '/tags/abbr.php',
			'cite' => require __DIR__ . '/tags/cite.php',
			'del' => require __DIR__ . '/tags/del.php',
			'dfn' => require __DIR__ . '/tags/dfn.php',
			'ins' => require __DIR__ . '/tags/ins.php',
			'mark' => require __DIR__ . '/tags/mark.php',
			'q' => require __DIR__ . '/tags/quote.php',
			'samp' => require __DIR__ . '/tags/samp.php',
			'smallcaps' => require __DIR__ . '/tags/smallcaps.php',
			's' => require __DIR__ . '/tags/strikethrough.php',
			'sub' => require __DIR__ . '/tags/sub.php',
			'sup' => require __DIR__ . '/tags/sup.php',
		]
]);
