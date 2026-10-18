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
				const { state } = this.editor;
				const { selection } = state;
				const markType = state.schema.marks.smallcaps;

				let attrs = {};

				// First check marks at the cursor
				if (selection.empty) {
					const marks = selection.$from.marks();
					const mark = marks.find(mark => mark.type === markType);

					if (mark) {
						attrs = mark.attrs;
					}
				} else {
					// Find the smallcaps mark within the selection
					state.doc.nodesBetween(
						selection.from,
						selection.to,
						(node) => {
							if (!node.isText) {
								return;
							}

							const mark = node.marks.find(
								mark => mark.type === markType
							);

							if (mark) {
								attrs = mark.attrs;
								return false;
							}
						}
					);
				}

				panel.dialog.open({
					component: 'class-dialog',
					props: {
						value: {
							class: attrs.class ?? ""
						}
					},
					on: {
						submit: (values) => {
							//console.log("Dialog submitted:", values);
							panel.dialog.close();
							this.editor.command("toggleSpan", values);
						},
						cancel: () => {
							this.editor.focus();
						}
					}
				});
			},

			insertSpan: (attrs = {}) => {
				const cleanAttrs = {
					class: attrs.class ?? null
				};

				if (cleanAttrs.class !== null) {
					return this.update(cleanAttrs);
				}
      },

			removeSpan: () => {
				return this.remove();
			},

			toggleSpan: (attrs = {}) => {
				const cleanAttrs = {
					class: attrs.class ?? null
				};

				if (cleanAttrs.class !== null) {
					return this.editor.command("insertSpan", cleanAttrs);
				}

				return this.editor.command("removeAbbr");
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

