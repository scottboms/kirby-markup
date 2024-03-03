panel.plugin("scottboms/kirby-markup", {
  icons: {
		'abbr': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21,5H3v-2h18v2ZM21,19H3v2h18v-2ZM5,15V7h-2v10h5v-2h-3ZM18,15V7h-2v10h5v-2h-3ZM14,7v10h-5V7h5ZM12,9h-1v6h1v-6Z"/></svg>',
		'cite': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18,17v-2h-10V5h2v-2H3c-.55,0-1,.45-1,1v16c0,.55.45,1,1,1h14c.55,0,1-.45,1-1v-1h-2v-2h2ZM4,5h2v10h-2V5ZM14,19H4v-2h10v2ZM18.44,11.84l-.45-.69c1.67-.9,1.64-2.35,1.64-2.66-.16.02-.32.02-.48,0-.9-.08-1.61-.82-1.61-1.74,0-.97.78-1.75,1.75-1.75.54,0,1.05.25,1.37.59.52.55.79,1.16.79,2.16,0,1.75-1.23,3.32-3.02,4.09ZM13.44,11.84l-.45-.69c1.67-.9,1.64-2.35,1.64-2.66-.16.02-.32.02-.48,0-.9-.08-1.61-.82-1.61-1.74,0-.97.78-1.75,1.75-1.75.54,0,1.05.25,1.37.59.52.55.79,1.16.79,2.16,0,1.75-1.23,3.32-3.02,4.09Z"/></svg>',
		'dfn': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12 2 6.47715 6.47715 2 12 2 17.5228 2 22 6.47715 22 12 22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12 20 7.58172 16.4183 4 12 4 7.58172 4 4 7.58172 4 12 4 16.4183 7.58172 20 12 20ZM13 10.5V15H14V17H10V15H11V12.5H10V10.5H13ZM13.5 8C13.5 8.82843 12.8284 9.5 12 9.5 11.1716 9.5 10.5 8.82843 10.5 8 10.5 7.17157 11.1716 6.5 12 6.5 12.8284 6.5 13.5 7.17157 13.5 8Z"></path></svg>',
		'ins': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7,17.17l-2.83,2.83-1.41-1.41,4.24-4.24,4.24,4.24-1.41,1.41-2.83-2.83Z"/><polygon points="15 6 15 19 13 19 13 6 7 6 7 4 21 4 21 6 15 6"/></svg>',
    'mark': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.1384 3C21.4146 3 21.6385 3.22386 21.6385 3.5C21.6385 3.58701 21.6157 3.67252 21.5725 3.74807L18 10L21.5725 16.2519C21.7095 16.4917 21.6262 16.7971 21.3865 16.9341C21.3109 16.9773 21.2254 17 21.1384 17H4V22H2V3H21.1384ZM18.5536 5H4V15H18.5536L15.6965 10L18.5536 5Z"></path></svg>',
		'q': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 4H3V6H21V4ZM21 11H8V13H21V11ZM21 18H8V20H21V18ZM5 11H3V20H5V11Z"></path></svg>',
		'samp': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8,20H3c-.55,0-1-.45-1-1V5c0-.55.45-1,1-1h5v2h-4v12h4v2ZM16,18h4s0-12,0-12h-4v-2h5c.55,0,1,.45,1,1v14c0,.55-.45,1-1,1h-5v-2ZM8.5,16h5.5c1.38,0,2.5-1.12,2.5-2.5s-1.12-2.5-2.5-2.5h-4c-.28,0-.5-.22-.5-.5s.22-.5.5-.5h5.5v-2h-5.5c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5h4c.28,0,.5.22.5.5s-.22.5-.5.5h-5.5v2Z"/></svg>',
		's': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.1538 14C17.3846 14.5161 17.5 15.0893 17.5 15.7196C17.5 17.0625 16.9762 18.1116 15.9286 18.867C14.8809 19.6223 13.4335 20 11.5862 20C9.94674 20 8.32335 19.6185 6.71592 18.8555V16.6009C8.23538 17.4783 9.7908 17.917 11.3822 17.917C13.9333 17.917 15.2128 17.1846 15.2208 15.7196C15.2208 15.0939 15.0049 14.5598 14.5731 14.1173C14.5339 14.0772 14.4939 14.0381 14.4531 14H3V12H21V14H17.1538ZM13.076 11H7.62908C7.4566 10.8433 7.29616 10.6692 7.14776 10.4778C6.71592 9.92084 6.5 9.24559 6.5 8.45207C6.5 7.21602 6.96583 6.165 7.89749 5.299C8.82916 4.43299 10.2706 4 12.2219 4C13.6934 4 15.1009 4.32808 16.4444 4.98426V7.13591C15.2448 6.44921 13.9293 6.10587 12.4978 6.10587C10.0187 6.10587 8.77917 6.88793 8.77917 8.45207C8.77917 8.87172 8.99709 9.23796 9.43293 9.55079C9.86878 9.86362 10.4066 10.1135 11.0463 10.3004C11.6665 10.4816 12.3431 10.7148 13.076 11H13.076Z"></path></svg>',
    'smallcaps': '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10,6.5v13h-2V6.5H2v-2h14v2h-6ZM22,10.5v-2h-10v2h4v9h2v-9h4Z"/></svg>',
		'sub': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.59567 4L10.5 9.92831L15.4043 4H18L11.7978 11.4971L18 18.9943V19H15.4091L10.5 13.0659L5.59092 19H3V18.9943L9.20216 11.4971L3 4H5.59567ZM21.8 16C21.8 15.5582 21.4418 15.2 21 15.2C20.5582 15.2 20.2 15.5582 20.2 16C20.2 16.0762 20.2107 16.15 20.2306 16.2198L19.0765 16.5496C19.0267 16.375 19 16.1906 19 16C19 14.8954 19.8954 14 21 14C22.1046 14 23 14.8954 23 16C23 16.5727 22.7593 17.0892 22.3735 17.4538L20.7441 19H23V20H19V19L21.5507 16.5803C21.7042 16.4345 21.8 16.2284 21.8 16Z"></path></svg>',
		'sup': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7V20H9V7H3V5H15V7H11ZM19.5507 6.5803C19.7042 6.43453 19.8 6.22845 19.8 6C19.8 5.55817 19.4418 5.2 19 5.2C18.5582 5.2 18.2 5.55817 18.2 6C18.2 6.07624 18.2107 6.14999 18.2306 6.21983L17.0765 6.54958C17.0267 6.37497 17 6.1906 17 6C17 4.89543 17.8954 4 19 4C20.1046 4 21 4.89543 21 6C21 6.57273 20.7593 7.08923 20.3735 7.45384L18.7441 9H21V10H17V9L19.5507 6.5803V6.5803Z"></path></svg>'
  },
  textareaButtons: {
    abbr: {
      label: 'Abbreviation',
      icon: 'abbr',
      click: function() {
        this.command('toggle', '(abbr: ', ' title: )');
      }
    },
		cite: {
			label: 'Citation',
			icon: 'cite',
			click: function() {
				this.command('toggle', '(cite: ', ')');
			}
		},
		dfn: {
			label: 'Definition',
			icon: 'dfn',
			click: function() {
				this.command('toggle', '(dfn: ', ' title: )');
			}
		},
		ins: {
			label: 'Inserted Text',
			icon: 'ins',
			click: function() {
				this.command('toggle', '(ins: ', ')');
			}
		},
		mark: {
			label: 'Highlight',
			icon: 'mark',
			click: function() {
				this.command('toggle', '(mark: ', ')');
			}
		},
		q: {
			label: 'Inline Quote',
			icon: 'q',
			click: function() {
				this.command('toggle', '(q: ', ')');
			}
		},
		samp: {
			label: 'Sample Output',
			icon: 'samp',
			click: function() {
				this.command('toggle', '(samp: ', ')');
			}
		},
		s: {
			label: 'Strikethrough',
			icon: 's',
			click: function() {
				this.command('toggle', '(s: ', ')');
			}
		},
    smallcaps: {
      label: 'Small Caps',
      icon: 'smallcaps',
      click: function() {
        this.command('toggle', '(smallcaps: ', ')');
      }
    },
		sub: {
			label: 'Subscript',
			icon: 'sub',
			click: function() {
				this.command('toggle', '(sub: ', ')');
			}
		},
		sup: {
			label: 'Superscript',
			icon: 'sup',
			click: function() {
				this.command('toggle', '(sup: ', ')');
			}
		}
  },
});

