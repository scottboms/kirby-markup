export const Citation = {
  // citation <cite> tag with class attribute
  get button() {
    return {
      icon: 'cite',
      label: 'Citation'
    }
  },

  commands() {
    return {
      cite: () => {
        panel.dialog.open({
          component: 'class-dialog',
          props: {
            value: {
              // get values from the mark or null
              class: this.editor.getMarkAttrs("cite").class || null
            }
          },
          on: {
            submit: (values) => {
              this.editor.command("toggleCite", values);
              // console.log('submit', values);
              window.panel.dialog.close();
            },
            cancel: () => {
              this.editor.focus();
            }
          }
        });
      },

      insertCite: (attrs = {}) => {
        // console.log('insert called with attrs:', attrs);
        const { selection } = this.editor.state;

        if (
					selection.empty &&
					this.editor.activeMarks.includes("cite") === false
				) {
					this.editor.insertText(attrs.class, false);
				}

				if (attrs.class) {
					return this.update(attrs);
				}
      },

      removeCite: () => {
        return this.remove();
      },

      toggleCite: (attrs = {}) => {
        if(attrs.class?.length > 0) {
          this.editor.command("insertCite", attrs);
        } else {
          this.editor.command("removeCite");
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
    return 'cite'
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
        return ['cite', attrs, 0];
      },
      parseDOM: [{
        tag: 'cite',
        getAttrs: (dom) => ({
          class: dom.getAttribute('class') || null
        })
      }],
    };
  }
};
