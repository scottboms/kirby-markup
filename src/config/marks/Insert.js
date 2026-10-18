export const Insert = {
	// inserted text <ins> tag with class attribute
	get button() {
		return {
			icon: 'ins',
			label: 'Inserted Text'
		}
	},

	commands() {
		return {
			ins: () => {
				const { state } = this.editor;
				const { selection } = state;
				const markType = state.schema.marks.ins;

				let attrs = {};

				// First check marks at cursor
				if (selection.empty) {
					const marks = selection.$from.marks();
					const mark = marks.find(mark => mark.type === markType);

					if (mark) {
						attrs = mark.attrs;
					}
				} else {
					// Find the ins mark within the selection
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
							this.editor.command("toggleIns", values);
						},
						cancel: () => {
							this.editor.focus();
						}
					}
				});
			},

			insertIns: (attrs = {}) => {
				const cleanAttrs = {
					class: attrs.class ?? null
				};

				if (cleanAttrs.class !== null) {
					return this.update(cleanAttrs);
				}
			},

			removeIns: () => {
				return this.remove();
			},

			toggleIns: (attrs = {}) => {
				const cleanAttrs = {
					class: attrs.class ?? null
				}

				if(attrs.class !== null) {
					return this.editor.command("insertIns", attrs);
				}

				return this.editor.command("removeIns");
			}
		};
	},

	get defaults() {
		return {
			class: null
		}
	},

	get name() {
		return 'ins'
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
				if (node.attrs.class) {
					attrs.class = node.attrs.class;
				}

				// console.log('attributes added to element', attrs);
				return ['ins', attrs, 0];
			},
			parseDOM: [{
				tag: 'ins',
				getAttrs: (dom) => ({
					class: dom.getAttribute('class') || null
				})
			}],
		};
	}
};
