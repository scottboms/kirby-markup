export const Definition = {
  // definition <dfn> tag
  get button() {
    return {
      icon: 'dfn',
      label: 'Definition'
    }
  },

  commands() {
    return {
      dfn: () => {
        panel.dialog.open({
          component: 'markup-dialog',
          props: {
            value: {
              // get values from the mark or null
              class: this.editor.getMarkAttrs("dfn").class || null,
              title: this.editor.getMarkAttrs("dfn").title || null
            }
          },
          on: {
            submit: (values) => {
              this.editor.command("toggleDfn", values);
              console.log('submit', values);
              window.panel.dialog.close();
            },
            cancel: () => {
              this.editor.focus();
            }
          }
        });
      },

      insertDfn: (attrs = {}) => {
        // console.log('insert called with attrs:', attrs);
        const { selection } = this.editor.state;

        // clean up attributes to ensure both class and title are handled properly
        const cleanAttrs = {
          class: attrs.class !== undefined ? attrs.class : null,
          title: attrs.title || null
        };

        if (cleanAttrs.class !== null || cleanAttrs.title?.length > 0) {
          return this.update(cleanAttrs);
        }
      },

      removeDfn: () => {
        return this.remove();
      },

      toggleDfn: (attrs = {}) => {
        const cleanAttrs = {
          class: attrs.class !== undefined ? attrs.class : null,
          title: attrs.title || null
        };

        if (cleanAttrs.class !== null || cleanAttrs.title?.length > 0) {
          // console.log('insert element with class:', cleanAttrs.class, 'and title:', cleanAttrs.title);
          this.editor.command("insertDfn", cleanAttrs);
        } else {
          // console.log('removing element');
          this.editor.command("removeDfn");
        }
      }
    };
  },

  get defaults() {
    return {
      class: null,
      title: null
    }
  },

  get name() {
    return 'dfn'
  },

  get schema() {
    return {
      attrs: {
        class: { default: null },
        title: { default: null }
      },
      inclusive: false,
      priority: 61,
      toDOM: (node) => {
        const attrs = {};
        // explicitly check and assign attributes
        if (node.attrs.class !== null) {
          attrs.class = node.attrs.class;
        }

        if (node.attrs.title) {
          attrs.title = node.attrs.title;
        }

        // console.log('attributes added to element', attrs);
        return ['dfn', attrs, 0];
      },
      parseDOM: [{
        tag: 'dfn',
        getAttrs: (dom) => ({
          class: dom.getAttribute('class') || null,
          title: dom.getAttribute('title') || null
        })
      }],
    };
  }
};
