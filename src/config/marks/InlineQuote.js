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
				const { state } = this.editor;
				const { selection } = state;
				const markType = state.schema.marks.q;

				let attrs = {};

				// First check marks at the cursor
				if (selection.empty) {
					const marks = selection.$from.marks();
					const mark = marks.find(mark => mark.type === markType);

					if (mark) {
						attrs = mark.attrs;
					}
				} else {
					// Find the q mark within the selection
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
					component: 'cite-dialog',
					props: {
						value: {
							class: attrs.class ?? "",
							cite: attrs.cite ?? ""
						}
					},
					on: {
						submit: (values) => {
							// console.log('submit', values);
							panel.dialog.close();
							this.editor.command("toggleQuote", values);
						},
						cancel: () => {
							this.editor.focus();
						}
					}
				});
			},

			insertQuote: (attrs = {}) => {
				const cleanAttrs = {
					class: attrs.class ?? null,
					cite: attrs.cite ?? null
				};

				if (cleanAttrs.class !== null || cleanAttrs.cite !== null) {
					return this.update(cleanAttrs);
				}
			},

			removeQuote: () => {
				return this.remove();
			},

			toggleQuote: (attrs = {}) => {
				const cleanAttrs = {
					class: attrs.class ?? null,
					cite: attrs.cite ?? null
				};

				if (cleanAttrs.class !== null || cleanAttrs.cite !== null) {
					return this.editor.command("insertQuote", cleanAttrs);
				}

				return this.editor.command("removeQuote");
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
