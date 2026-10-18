export const Citation = {
	// citation <cite> tag with class attribute
	get button() {
		return {
			icon: 'cite',
			label: 'Citation'
		}
	},

	commands() {
		return {
			cite: () => {
				const { state } = this.editor;
				const { selection } = state;
				const markType = state.schema.marks.cite;

				let attrs = {};

				// First check marks at the cursor
				if (selection.empty) {
					const marks = selection.$from.marks();
					const mark = marks.find(mark => mark.type === markType);

					if (mark) {
						attrs = mark.attrs;
					}
				} else {
					// Find the cite mark within the selection
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
							// console.log('submit', values);
							panel.dialog.close();
							this.editor.command("toggleCite", values);
						},
						cancel: () => {
							this.editor.focus();
						}
					}
				});
			},

			insertCite: (attrs = {}) => {
				// console.log('insert called with attrs:', attrs);
				const cleanAttrs = {
					class: attrs.class ?? null
				};

				if (cleanAttrs.class !== null) {
					return this.update(cleanAttrs);
				}
			},

			removeCite: () => {
				return this.remove();
			},

			toggleCite: (attrs = {}) => {
				const cleanAttrs = {
					class: attrs.class ?? null
				};

				if (cleanAttrs.class !== null) {
					return this.editor.command("insertCite", cleanAttrs);
				}

				return this.editor.command("removeCite");
			}
		};
	},

	get defaults() {
		return {
			class: null
		}
	},

	get name() {
		return 'cite'
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
				return ['cite', attrs, 0];
			},

			parseDOM: [{
				tag: 'cite',
				getAttrs: (dom) => ({
					class: dom.getAttribute('class') || null
				})
			}],
		};
	}
};
