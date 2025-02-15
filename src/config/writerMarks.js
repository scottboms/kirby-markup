export const writerMarks = {
  // abbreviation (abbr)
  'abbr': {
    get button() {
      return {
        icon: 'abbr',
        label: 'Abbreviation'
      }
    },

    commands() {
      return () => this.toggle();
    },

    get name() {
      return 'abbr'
    },

    get schema() {
      return {
        parseDOM: [{ tag: 'abbr' }],
        toDOM: () => ['abbr', 0]
      };
    }
  },

  // citation (citation)
  'cite': {
    get button() {
      return {
        icon: 'cite',
        label: 'Citation'
      }
    },

    commands() {
      return () => this.toggle();
    },

    get name() {
      return 'cite'
    },

    get schema() {
      return {
        parseDOM: [{ tag: 'cite' }],
        toDOM: () => ['cite', 0]
      };
    }
  },

  // dfn (definition)
  'dfn': {
    get button() {
      return {
        icon: 'dfn',
        label: 'Definition'
      }
    },

    commands() {
      return {
        def: (event) => {
          if (event.altKey || event.metaKey) {
            return this.remove();
          }
          this.editor.emit('dfn', this.editor);
        },
        insertDfn: (attrs = {}) => {
          const { selection } = this.editor.state;

          // if no text is selected, we do nothing
          if (selection.empty) {
            //return null;
          }

          if (attrs.class) {
            return this.update(attrs);
          }
        },
        removeDfn: () => {
          return this.remove();
        },
        toggleDfn: (attrs = {}) => {
          if (attrs.class?.length > 0) {
            this.editor.command('insertDfn', attrs);
          } else {
            this.editor.command('removeDfn');
          }
        }
      }
      //return () => this.toggle();
    },

    get defaults() {
      return {
        class: null
      };
    },

    get name() {
      return 'dfn'
    },

    plugins() {
      return [
        {
          props: {
            handleClass: (view, pos, event) => {
              const attrs = this.editor.getMarkAttrs('dfn');

              if(
                attrs.class &&
                event.altKey === true &&
                event.target instanceof HTMLAnchorElement
              ) {
                event.stopPropagation();
                window.open(attrs.class);
              }
            }
          }
        }
      ];
    },

    get schema() {
      return {
        attrs: {
          class: {
            default: null
          },
          title: {
            default: null
          }
        },
        inclusive: false,
        parseDOM: [
          {
            tag: 'dfn' ,
            getAttrs: (dom) => ({
              class: dom.getAttribute('class'),
              title: dom.getAttribute('title')
            })
          }
        ],
        toDOM: (node) => ['dfn', { ...node.attrs }, 0]
      };
    }
  },

  // ins (insert)
  'ins': {
    get button() {
      return {
        icon: 'ins',
        label: 'Insert'
      }
    },

    commands() {
      return () => this.toggle();
    },

    get name() {
      return 'ins'
    },

    get schema() {
      return {
        parseDOM: [{ tag: 'ins' }],
        toDOM: () => ['ins', 0]
      };
    }
  },

  // mark (highlight)
  'mark': {
    get button() {
      return {
        icon: 'mark',
        label: 'Highlight'
      }
    },

    commands() {
      return () => this.toggle();
    },

    get name() {
      return 'mark'
    },

    get schema() {
      return {
        parseDOM: [{ tag: 'mark' }],
        toDOM: () => ['mark', 0]
      };
    }
  },

  // q (quote)
  'q': {
    get button() {
      return {
        icon: 'q',
        label: 'Inline Quote'
      }
    },

    commands() {
      return () => this.toggle();
    },

    get name() {
      return 'q'
    },

    get schema() {
      return {
        parseDOM: [{ tag: 'q' }],
        toDOM: () => ['q', 0]
      };
    }
  },

  // smallcaps (span only currently)
  'smallcaps': {
    get button() {
      return {
        icon: 'smallcaps',
        label: 'Small Caps'
      }
    },

    commands() {
      return () => this.toggle();
    },

    get name() {
      return 'smallcaps'
    },

    get schema() {
      return {
        draggable: false,
        priority: 60,
        parseDOM: [{ tag: "span", getAttrs: (mark) => mark.classList.contains('smallcaps') ? {} : false, }],
        toDOM: () => ["span", { class: 'smallcaps' }, 0]
      };
    }
  },
};
