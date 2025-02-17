export const Mark = {
  // mark text <mark> tag with class attribute
  get button() {
    return {
      icon: 'mark',
      label: 'Highlight Text'
    }
  },

  commands() {
    return {
      mark: () => {
        panel.dialog.open({
          component: 'class-dialog',
          props: {
            value: {
              // get values from the mark or null
              class: this.editor.getMarkAttrs("mark").class || null
            }
          },
          on: {
            submit: (values) => {
              this.editor.command("toggleMark", values);
              console.log('submit', values);
              window.panel.dialog.close();
            },
            cancel: () => {
              this.editor.focus();
            }
          }
        });
      },

      insertMark: (attrs = {}) => {
        // console.log('insert called with attrs:', attrs);
        const { selection } = this.editor.state;

        if (
					selection.empty &&
					this.editor.activeMarks.includes("mark") === false
				) {
					this.editor.insertText(attrs.class, false);
				}

				if (attrs.class) {
					return this.update(attrs);
				}
      },

      removeMark: () => {
        return this.remove();
      },

      toggleMark: (attrs = {}) => {
        if(attrs.class?.length > 0) {
          this.editor.command("insertMark", attrs);
        } else {
          this.editor.command("removeMark");
        }
      }
    };
  },

  get defaults() {
    return {
      class: null
    }
  },

  get name() {
    return 'mark'
  },

  get schema() {
    return {
      attrs: {
        class: { default: null }
      },
      inclusive: false,
      priority: 60,
      toDOM: (node) => {
        const attrs = {};
        // explicitly check and assign attributes
        if (node.attrs.class !== null) {
          attrs.class = node.attrs.class;
        }

        // console.log('attributes added to element', attrs);
        return ['mark', attrs, 0];
      },
      parseDOM: [{
        tag: 'mark',
        getAttrs: (dom) => ({
          class: dom.getAttribute('class') || null
        })
      }],
    };
  }
};
