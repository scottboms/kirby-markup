export const Insert = {
  // inserted text <ins> tag with class attribute
  get button() {
    return {
      icon: 'ins',
      label: 'Inserted Text'
    }
  },

  commands() {
    return {
      ins: () => {
        panel.dialog.open({
          component: 'class-dialog',
          props: {
            value: {
              // get values from the mark or null
              class: this.editor.getMarkAttrs("ins").class || null
            }
          },
          on: {
            submit: (values) => {
              this.editor.command("toggleIns", values);
              console.log('submit', values);
              window.panel.dialog.close();
            },
            cancel: () => {
              this.editor.focus();
            }
          }
        });
      },

      insertIns: (attrs = {}) => {
        // console.log('insert called with attrs:', attrs);
        const { selection } = this.editor.state;

        if (
					selection.empty &&
					this.editor.activeMarks.includes("ins") === false
				) {
					this.editor.insertText(attrs.class, false);
				}

				if (attrs.class) {
					return this.update(attrs);
				}
      },

      removeIns: () => {
        return this.remove();
      },

      toggleIns: (attrs = {}) => {
        if(attrs.class?.length > 0) {
          this.editor.command("insertIns", attrs);
        } else {
          this.editor.command("removeIns");
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
    return 'ins'
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
        return ['ins', attrs, 0];
      },
      parseDOM: [{
        tag: 'ins',
        getAttrs: (dom) => ({
          class: dom.getAttribute('class') || null
        })
      }],
    };
  }
};
