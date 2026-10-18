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
				const { state } = this.editor;
				const { selection } = state;
				const markType = state.schema.marks.abbr;

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
							this.editor.command("toggleAbbr", values);
						},
						cancel: () => {
							this.editor.focus();
						}
					}
				});
			},

			insertAbbr: (attrs = {}) => {
				const cleanAttrs = {
					title: attrs.title ?? null,
					class: attrs.class ?? null
				};

				if (cleanAttrs.title !== null || cleanAttrs.class !== null) {
					return this.update(cleanAttrs);
				}
			},

			removeAbbr: () => {
				return this.remove();
			},

			toggleAbbr: (attrs = {}) => {
				const cleanAttrs = {
					title: attrs.title ?? null,
					class: attrs.class ?? null
				};

				if (cleanAttrs.title !== null || cleanAttrs.class !== null) {
					return this.editor.command("insertAbbr", cleanAttrs);
				}

				return this.editor.command("removeAbbr");
			}
		};
	},

	get defaults() {
		return {
			title: null,
			class: null
		}
	},

	get name() {
		return 'abbr'
	},

	get schema() {
		return {
			attrs: {
				title: { default: null },
				class: { default: null }
			},
			inclusive: false,
			priority: 60,
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
				return ['abbr', attrs, 0];
			},

			parseDOM: [{
				tag: 'abbr',
				getAttrs: (dom) => ({
					title: dom.getAttribute('title') || null,
					class: dom.getAttribute('class') || null
				})
			}],
		};
	}
};
