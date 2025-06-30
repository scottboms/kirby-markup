export const textareaButtons = {
  'abbr': {
    label: 'Abbreviation',
    icon: 'abbr',
    click: function() {
      this.command('toggle', '(abbr: ', ' title: )');
    }
  },
	'cite': {
		label: 'Citation',
		icon: 'cite',
		click: function() {
			this.command('toggle', '(cite: ', ')');
		}
	},
  'del': {
		label: 'Deletion',
		icon: 'del',
		click: function() {
			this.command('toggle', '(del: ', ' cite: datetime: )');
		}
  },
	'dfn': {
		label: 'Definition',
		icon: 'dfn',
		click: function() {
			this.command('toggle', '(dfn: ', ' title: )');
		}
	},
	'ins': {
		label: 'Inserted Text',
		icon: 'ins',
		click: function() {
			this.command('toggle', '(ins: ', ')');
		}
	},
	'mark': {
		label: 'Highlight',
		icon: 'mark',
		click: function() {
			this.command('toggle', '(mark: ', ')');
		}
	},
	'q': {
		label: 'Inline Quote',
		icon: 'q',
		click: function() {
			this.command('toggle', '(q: ', ')');
		}
	},
	'samp': {
		label: 'Sample Output',
		icon: 'samp',
		click: function() {
			this.command('toggle', '(samp: ', ')');
		}
	},
	's': {
		label: 'Strikethrough',
		icon: 's',
		click: function() {
			this.command('toggle', '(s: ', ')');
		}
	},
  'smallcaps': {
    label: 'Small Caps',
    icon: 'smallcaps',
    click: function() {
      this.command('toggle', '(smallcaps: ', ' class: )');
    }
  },
	'sub': {
		label: 'Subscript',
		icon: 'sub',
		click: function() {
			this.command('toggle', '(sub: ', ')');
		}
	},
	'sup': {
		label: 'Superscript',
		icon: 'sup',
		click: function() {
			this.command('toggle', '(sup: ', ')');
		}
	},
};
