export const Abbreviation = {
  // abbreviation <abbr> tag
  get button() {
    return {
      icon: 'abbr',
      label: 'Abbreviation'
    }
  },

  commands() {
    return {
      abbr: () => {
        panel.dialog.open({
          component: 'markup-dialog',
          props: {
            value: {
              // get values from the mark or null
              class: this.editor.getMarkAttrs("abbr").class || null,
              title: this.editor.getMarkAttrs("abbr").title || null
            }
          },
          on: {
            submit: (values) => {
              this.editor.command("toggleAbbr", values);
              // console.log('submit', values);
              window.panel.dialog.close();
            },
            cancel: () => {
              this.editor.focus();
            }
          }
        });
      },

      insertAbbr: (attrs = {}) => {
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

      removeAbbr: () => {
        return this.remove();
      },

      toggleAbbr: (attrs = {}) => {
        const cleanAttrs = {
          class: attrs.class !== undefined ? attrs.class : null,
          title: attrs.title || null
        };

        if (cleanAttrs.class !== null || cleanAttrs.title?.length > 0) {
          // console.log('insert element with class:', cleanAttrs.class, 'and title:', cleanAttrs.title);
          this.editor.command("insertAbbr", cleanAttrs);
        } else {
          // console.log('removing element');
          this.editor.command("removeAbbr");
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
    return 'abbr'
  },

  get schema() {
    return {
      attrs: {
        class: { default: null },
        title: { default: null }
      },
      inclusive: false,
      priority: 60,
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
        return ['abbr', attrs, 0];
      },
      parseDOM: [{
        tag: 'abbr',
        getAttrs: (dom) => ({
          class: dom.getAttribute('class') || null,
          title: dom.getAttribute('title') || null
        })
      }],
    };
  }
};
