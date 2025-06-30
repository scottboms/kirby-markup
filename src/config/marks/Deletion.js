export const Deletion = {
  // deletion <del> tag
  get button() {
    return {
      icon: 'del',
      label: 'Deletion'
    }
  },

  commands() {
    return {
      del: () => {
        panel.dialog.open({
          component: 'datetime-dialog',
          props: {
            value: {
              // get values from the mark or null
              cite: this.editor.getMarkAttrs("del").cite || null,
              datetime: this.editor.getMarkAttrs("del").datetime || null
            }
          },
          on: {
            submit: (values) => {
              this.editor.command("toggleDel", values);
              console.log('submit', values);
              window.panel.dialog.close();
            },
            cancel: () => {
              this.editor.focus();
            }
          }
        });
      },

      insertDel: (attrs = {}) => {
        // console.log('insert called with attrs:', attrs);
        const { selection } = this.editor.state;

        // clean up attributes to ensure both cite and datetime are handled properly
        const cleanAttrs = {
          cite: attrs.cite !== undefined ? attrs.cite : null,
          datetime: attrs.datetime || null
        };

        if (cleanAttrs.cite !== null || cleanAttrs.datetime?.length > 0) {
          return this.update(cleanAttrs);
        }
      },

      removeDel: () => {
        return this.remove();
      },

      toggleDel: (attrs = {}) => {
        const cleanAttrs = {
          cite: attrs.cite !== undefined ? attrs.cite : null,
          datetime: attrs.datetime || null
        };

        if (cleanAttrs.cite !== null || cleanAttrs.datetime?.length > 0) {
          // console.log('insert element with cite:', cleanAttrs.cite, 'and datetime:', cleanAttrs.datetime);
          this.editor.command("insertDel", cleanAttrs);
        } else {
          // console.log('removing element');
          this.editor.command("removeDel");
        }
      }
    };
  },

  get defaults() {
    return {
      cite: null,
      datetime: null
    }
  },

  get name() {
    return 'del'
  },

  get schema() {
    return {
      attrs: {
        cite: { default: null },
        datetime: { default: null }
      },
      inclusive: false,
      priority: 61,
      toDOM: (node) => {
        const attrs = {};
        // explicitly check and assign attributes
        if (node.attrs.cite !== null) {
          attrs.cite = node.attrs.cite;
        }

        if (node.attrs.datetime) {
          attrs.datetime = node.attrs.datetime;
        }

        // console.log('attributes added to element', attrs);
        return ['del', attrs, 0];
      },
      parseDOM: [{
        tag: 'del',
        getAttrs: (dom) => ({
          cite: dom.getAttribute('cite') || null,
          datetime: dom.getAttribute('datetime') || null
        })
      }],
    };
  }
};
