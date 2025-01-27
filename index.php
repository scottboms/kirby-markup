<?php

/**
 * Kirby Semantic Markup Plugin
 *
 * @author Scott Boms <plugins@scottboms.com>
 * @link https://github.com/scottboms/kirby-markup
 * @license MIT
**/

Kirby\Sane\Html::$allowedTags['abbr'] = true;
Kirby\Sane\Html::$allowedTags['cite'] = true;
Kirby\Sane\Html::$allowedTags['dfn'] = true;
Kirby\Sane\Html::$allowedTags['ins'] = true;
Kirby\Sane\Html::$allowedTags['mark'] = true;
Kirby\Sane\Html::$allowedTags['q'] = true;
Kirby\Sane\Html::$allowedTags['s'] = true;
Kirby\Sane\Html::$allowedTags['samp'] = true;
Kirby\Sane\Html::$allowedTags['smallcaps'] = true;

use Composer\Semver\Semver;
use Kirby\Cms\App as Kirby;

// validate Kirby version
if (Semver::satisfies(Kirby::version() ?? '0.0.0', '~4.0 || ~5.0') === false) {
	throw new Exception('Kirby Remix Icons Plugin requires Kirby 4 or 5');
}

Kirby::plugin(
  name: 'scottboms/kirby-markup', 
  info: [
    'homepage' => 'https://github.com/scottboms/kirby-markup'
  ],
  version: '1.0.3',
  extends: [
    'tags' => [
      // Abbreviation
      'abbr' => [
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
        },
      ],

      // Citation
      'cite' => [
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
      ],

      // Definition
      'dfn' => [
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
      ],

      // Insert
      'ins' => [
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
      ],

      // Mark
      'mark' => [
        'attr' => [
          'class'
        ],
        'html' => function($tag) {
          $html = '';
          $mark = $tag->mark;
          $class = $tag->class;

          if($class == '') {
            // if no class attributes
            $html .= '<mark>' . $mark . '</mark>';
          } else {
            $html .= '<mark class="' . $class . '">' . $mark . '</mark>';
          }
          return $html;
        }
      ],

      // Inline Quote
      'q' => [
        'attr' => [
          'class'
        ],
        'html' => function($tag) {
          $html = '';
          $q = $tag->q;
          $class = $tag->class;

          if($class == '') {
            // if no class attributes
            $html .= '<q>' . $q . '</q>';
          } else {
            $html .= '<q class="' . $class . '">' . $q . '</q>';
          }
          return $html;
        }
      ],

      // Sample
      'samp' => [
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
      ],

      // Small Caps
      'smallcaps' => [
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
      ],

      // Strikethrough
      's' => [
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
      ],

      // Subscript
      'sub' => [
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
      ],

      // Superscript
      'sup' => [
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
      ],
    ]
]);