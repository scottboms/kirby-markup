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
				const { state } = this.editor;
				const { selection } = state;
				const markType = state.schema.marks.dfn;

				let attrs = {};

				// First check marks at the cursor
				if (selection.empty) {
					const marks = selection.$from.marks();
					const mark = marks.find(mark => mark.type === markType);

					if (mark) {
						attrs = mark.attrs;
					}
				} else {
					// Find the dfn mark within the selection
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
					component: "markup-dialog",
					props: {
						value: {
							title: attrs.title ?? "",
							class: attrs.class ?? ""
						}
					},
					on: {
						submit: (values) => {
							//console.log("Dialog submitted:", values);
							panel.dialog.close();
							this.editor.command("toggleDfn", values);
						},
						cancel: () => {
							this.editor.focus();
						}
					}
				});
			},

			insertDfn: (attrs = {}) => {
				const cleanAttrs = {
					title: attrs.title ?? null,
					class: attrs.class ?? null
				};

				if (cleanAttrs.title !== null || cleanAttrs.class !== null) {
					return this.update(cleanAttrs);
				}
			},

			removeDfn: () => {
				return this.remove();
			},

			toggleDfn: (attrs = {}) => {
				const cleanAttrs = {
					title: attrs.title ?? null,
					class: attrs.class ?? null
				};

				if (cleanAttrs.title !== null || cleanAttrs.class !== null) {
					return this.editor.command("insertDfn", cleanAttrs);
				}

				return this.editor.command("removeDfn");
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
				if (node.attrs.title) {
					attrs.title = node.attrs.title;
				}

				if (node.attrs.class !== null) {
					attrs.class = node.attrs.class;
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
