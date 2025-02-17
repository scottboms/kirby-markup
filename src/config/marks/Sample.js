export const Sample = {
  // sample text <samp> tag with class attribute
  get button() {
    return {
      icon: 'samp',
      label: 'Sample Text'
    }
  },

  commands() {
    return {
      samp: () => {
        panel.dialog.open({
          component: 'class-dialog',
          props: {
            value: {
              // get values from the mark or null
              class: this.editor.getMarkAttrs("samp").class || null
            }
          },
          on: {
            submit: (values) => {
              this.editor.command("toggleSample", values);
              console.log('submit', values);
              window.panel.dialog.close();
            },
            cancel: () => {
              this.editor.focus();
            }
          }
        });
      },

      insertSample: (attrs = {}) => {
        // console.log('insert called with attrs:', attrs);
        const { selection } = this.editor.state;

        if (
					selection.empty &&
					this.editor.activeMarks.includes("samp") === false
				) {
					this.editor.insertText(attrs.class, false);
				}

				if (attrs.class) {
					return this.update(attrs);
				}
      },

      removeSample: () => {
        return this.remove();
      },

      toggleSample: (attrs = {}) => {
        if(attrs.class?.length > 0) {
          this.editor.command("insertSample", attrs);
        } else {
          this.editor.command("removeSample");
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
    return 'samp'
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
        return ['samp', attrs, 0];
      },
      parseDOM: [{
        tag: 'samp',
        getAttrs: (dom) => ({
          class: dom.getAttribute('class') || null
        })
      }],
    };
  }
};
