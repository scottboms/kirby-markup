export const InlineQuote = {
  // inline quote <q> tag with class and cite attributes
  get button() {
    return {
      icon: 'q',
      label: 'Inline Quote'
    }
  },

  commands() {
    return {
      q: () => {
        panel.dialog.open({
          component: 'cite-dialog',
          props: {
            value: {
              // get values from the mark or null
              class: this.editor.getMarkAttrs("q").class || null,
              cite: this.editor.getMarkAttrs("q").cite || null
            }
          },
          on: {
            submit: (values) => {
              this.editor.command("toggleQuote", values);
              // console.log('submit', values);
              window.panel.dialog.close();
            },
            cancel: () => {
              this.editor.focus();
            }
          }
        });
      },

      insertQuote: (attrs = {}) => {
        // console.log('insert called with attrs:', attrs);
        const { selection } = this.editor.state;

        // clean up attributes to ensure both class and cite are handled properly
        const cleanAttrs = {
          class: attrs.class !== undefined ? attrs.class : null,
          cite: attrs.cite || null
        };

        if (cleanAttrs.class !== null || cleanAttrs.cite?.length > 0) {
          return this.update(cleanAttrs);
        }
      },

      removeQuote: () => {
        return this.remove();
      },

      toggleQuote: (attrs = {}) => {
        const cleanAttrs = {
          class: attrs.class !== undefined ? attrs.class : null,
          cite: attrs.cite || null
        };

        if (cleanAttrs.class !== null || cleanAttrs.cite?.length > 0) {
          // console.log('insert element with class:', cleanAttrs.class, 'and cite:', cleanAttrs.cite);
          this.editor.command("insertQuote", cleanAttrs);
        } else {
          // console.log('removing element');
          this.editor.command("removeQuote");
        }
      }
    };
  },

  get defaults() {
    return {
      class: null,
      cite: null
    }
  },

  get name() {
    return 'q'
  },

  get schema() {
    return {
      attrs: {
        class: { default: null },
        cite: { default: null }
      },
      inclusive: false,
      priority: 60,
      toDOM: (node) => {
        const attrs = {};
        // explicitly check and assign attributes
        if (node.attrs.class !== null) {
          attrs.class = node.attrs.class;
        }

        if (node.attrs.cite) {
          attrs.cite = node.attrs.cite;
        }

        // console.log('attributes added to element', attrs);
        return ['q', attrs, 0];
      },
      parseDOM: [{
        tag: 'q',
        getAttrs: (dom) => ({
          class: dom.getAttribute('class') || null,
          cite: dom.getAttribute('cite') || null
        })
      }],
    };
  }
};
