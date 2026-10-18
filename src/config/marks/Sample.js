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
				const { state } = this.editor;
				const { selection } = state;
				const markType = state.schema.marks.samp;

				let attrs = {};

				// First check marks at the cursor
				if (selection.empty) {
					const marks = selection.$from.marks();
					const mark = marks.find(mark => mark.type === markType);

					if (mark) {
						attrs = mark.attrs;
					}
				} else {
					// Find the samp mark within the selection
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
							this.editor.command("toggleSample", values);
						},
						cancel: () => {
							this.editor.focus();
						}
					}
				});
			},

			insertSample: (attrs = {}) => {
        const cleanAttrs = {
					class: attrs.class ?? null
				};

				if (cleanAttrs.class !== null) {
					return this.update(cleanAttrs);
				}
			},

			removeSample: () => {
				return this.remove();
			},

			toggleSample: (attrs = {}) => {
				const cleanAttrs = {
					class: attrs.class ?? null
				};

				if (cleanAttrs.class !== null) {
					return this.editor.command("insertSample", cleanAttrs);
				}

				return this.editor.command("removeSample");
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
