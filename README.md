# Semantic Markup Kirbytags

![Plugin Preview](src/assets/semantic-markup-plugin.jpg)

A collection of kirbytags for Textarea and marks for Writer fields providing advanced options for semantic markup in the panel. Includes tags for: `abbr`, `cite`, `del`, `dfn`, `ins`, `mark`, `q`, `s`, `samp`, `sub`, `sup` along with a special shortcut for handling `small caps`.

## Installation

### [Kirby CLI](https://github.com/getkirby/cli)

```
kirby plugin:install scottboms/kirby-markup
```

### Git submodule

```
git submodule add https://github.com/scottboms/kirby-markup.git site/plugins/kirby-markup
```

### Copy and Paste

1. [Download](https://github.com/scottboms/kirby-markup/archive/master.zip) the contents of this repository as Zip file.
2. Rename the extracted folder to `kirby-markup` and copy it into the `site/plugins/` directory in your Kirby project.

## Usage

The following Textarea and Writer Field marks are included. To enable these in the panel, you need to add them explicitly to [your blueprints](https://getkirby.com/docs/reference/panel/fields/textarea). For example:

```yml
text:
  label: Content
  type: textarea
  buttons:
    - abbr
    - cite
    - del
    - dfn
    - ins
    - mark
    - q
    - s
    - samp
    - smallcaps
    - sub
    - sup

description:
  type: writer
  inline: true
  marks:
    - abbr
    - cite
    - del
    - dfn
    - ins
    - mark
    - q
    - samp
    - smallcaps
```

### Optional Tag Attributes

Most Textarea tags provide a convenience `class` attribute. The `abbr` and `dfn` tags also provide an optional `title` attribute per HTML markup standards. The `q` tag provides both a `class` and `cite` attributes and the `del` tag provides `cite` and `datetime` attributes.

* `class`: A CSS class/classes to append to the element [optional]
* `title`: A title attribute for `abbr`, `dfn`, and `` [optional]
* `cite`: A citation attribute for `del` [recommended]
* `datetime`: A date/time attribute for `del` [optional]

### [abbr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)

`(abbr: CSS title: Cascading Style Sheets class: markup__abbr)`

### [cite](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite)

`(cite: Nineteen Eighty-Four class: markup__cite) by George Orwell`

### [del](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)

`A (del: represents a range of text that has been deleted from a document)`

### [dfn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn)

`A (dfn: validator class: markup__dfn) is a program that checks for syntax errors in code or documents.`

### [ins](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins)

`You're late! (ins: A wizard is never late class: markup__ins).`

### [mark](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)

`... (mark: Rebel spies managed to steal secret plans) to the Empire's ultimate weapon, the DEATH STAR ...`

### [q](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q)

`When Dave asks HAL to open the pod bay door, HAL answers: (q: I'm sorry, Dave. I'm afraid I can't do that. cite: 2001: A Space Oddysey)`

### [s](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s)

`(s: There will be a few tickets available at the box office tonight.) SOLD OUT`

### [samp](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp)

`(samp: Keyboard not found. Press F1 to continue. class: markup__samp)`

### smallcaps
`(smallcaps: porsche class: markup__sc title: Proof of Rich Spoiled Children Having Everything)`

### [sub](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub)

`C(sub: 8)H(sub: 10)N(sub: 4)O(sub: 2), also known as caffeine.`

### [sup](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup)

`a(sup: 2) + b(sup: 2) = c(sup: 2)`

## Compatibility

* Kirby 4.x
* Kirby 5.x

## Disclaimer

This plugin is provided "as is" with no guarantee. Use it at your own risk and always test before using it in a production environment. If you identify an issue, typo, etc, please [create a new issue](/issues/new) so I can investigate.

## License

[MIT](https://opensource.org/licenses/MIT)
