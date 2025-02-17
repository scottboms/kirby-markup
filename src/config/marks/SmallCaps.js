export const SmallCaps = {
  // <span> tag with class attribute
  get button() {
    return {
      icon: 'smallcaps',
      label: 'Small Caps'
    }
  },

  commands() {
    return {
      smallcaps: () => {
        panel.dialog.open({
          component: 'class-dialog',
          props: {
            value: {
              // get values from the mark or null
              class: this.editor.getMarkAttrs("smallcaps").class || null
            }
          },
          on: {
            submit: (values) => {
              this.editor.command("toggleSpan", values);
              // console.log('submit', values);
              window.panel.dialog.close();
            },
            cancel: () => {
              this.editor.focus();
            }
          }
        });
      },

      insertSpan: (attrs = {}) => {
        // console.log('insert called with attrs:', attrs);
        const { selection } = this.editor.state;

        if (
					selection.empty &&
					this.editor.activeMarks.includes("smallcaps") === false
				) {
					this.editor.insertText(attrs.class, false);
				}

				if (attrs.class) {
					return this.update(attrs);
				}
      },

      removeSpan: () => {
        return this.remove();
      },

      toggleSpan: (attrs = {}) => {
        if(attrs.class?.length > 0) {
          this.editor.command("insertSpan", attrs);
        } else {
          this.editor.command("removeSpan");
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
    return 'smallcaps'
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
        return ['span', attrs, 0];
      },
      parseDOM: [{
        tag: 'span',
        getAttrs: (dom) => ({
          class: dom.getAttribute('class') || null
        })
      }],
    };
  }
};

