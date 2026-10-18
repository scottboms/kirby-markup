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
				const { state } = this.editor;
				const { selection } = state;
				const markType = state.schema.marks.del;

				let attrs = {};

				// First check marks at the cursor
				if (selection.empty) {
					const marks = selection.$from.marks();
					const mark = marks.find(mark => mark.type === markType);

					if (mark) {
						attrs = mark.attrs;
					}
				} else {
					// Find the del mark within the selection
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
					component: 'datetime-dialog',
					props: {
						value: {
							cite: attrs.cite ?? "",
							datetime: attrs.datetime ?? ""
						}
					},
					on: {
						submit: (values) => {
							// console.log('submit', values);
							panel.dialog.close();
							this.editor.command("toggleDel", values);
						},
						cancel: () => {
							this.editor.focus();
						}
					}
				});
			},

			insertDel: (attrs = {}) => {
				const cleanAttrs = {
					cite: attrs.cite ?? null,
					datetime: attrs.datetime ?? null
				};

				if (cleanAttrs.cite !== null || cleanAttrs.datetime !== null) {
					return this.update(cleanAttrs);
				}
			},

			removeDel: () => {
				return this.remove();
			},

			toggleDel: (attrs = {}) => {
				const cleanAttrs = {
					cite: attrs.cite ?? null,
					datetime: attrs.datetime ?? null
				};

				if (cleanAttrs.cite !== null || cleanAttrs.datetime?.length > 0) {
					return this.editor.command("insertDel", cleanAttrs);
				}

				return this.editor.command("removeDel");
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
			priority: 60,
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
