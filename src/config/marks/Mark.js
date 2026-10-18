export const Mark = {
	// mark text <mark> tag with class attribute
	get button() {
		return {
			icon: 'mark',
			label: 'Highlight Text'
		}
	},

	commands() {
		return {
			mark: () => {
				const { state } = this.editor;
				const { selection } = state;
				const markType = state.schema.marks.mark;

				let attrs = {};

				// First check marks at the cursor
				if (selection.empty) {
					const marks = selection.$from.marks();
					const mark = marks.find(mark => mark.type === markType);

					if (mark) {
						attrs = mark.attrs;
					}
				} else {
					// Find the abbreviation mark within the selection
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
							this.editor.command("toggleMark", values);
						},
						cancel: () => {
							this.editor.focus();
						}
					}
				});
			},

			insertMark: (attrs = {}) => {
				const cleanAttrs = {
					title: attrs.title ?? null,
					class: attrs.class ?? null
				};

				if (cleanAttrs.title !== null || cleanAttrs.class !== null) {
					return this.update(cleanAttrs);
				}
			},

			removeMark: () => {
				return this.remove();
			},

			toggleMark: (attrs = {}) => {
				const cleanAttrs = {
					class: attrs.class ?? null
				};

				if (cleanAttrs.class !== null) {
					return this.editor.command("insertMark", cleanAttrs);
				}

				return this.editor.command("removeMark");
			}
    };
  },

	get defaults() {
		return {
			class: null
		}
	},

	get name() {
		return 'mark'
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
				return ['mark', attrs, 0];
			},
			parseDOM: [{
				tag: 'mark',
				getAttrs: (dom) => ({
					class: dom.getAttribute('class') || null
				})
			}],
		};
	}
};
