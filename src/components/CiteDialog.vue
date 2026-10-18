<template>
	<k-dialog
		ref="dialog"
		class="cite-dialog"
		size="medium"
		:visible="true"
		:submit-button="true"
		:cancel-button="true"
		@submit="submit"
		@cancel="$emit('cancel')">
		<k-form
			:fields="fields"
			v-bind="$props"
			:value="values"
			@input="$emit('input', $event)" />
	</k-dialog>
</template>

<script>
export default {
	name: "cite-dialog",
	props: {
		value: {
			type: Object,
			default: () => ({
				class: "",
				cite: ""
			})
		}
	},

	emits: ["submit", "cancel"],

	data() {
		return {
			values: {
				class: this.value?.class ?? "",
				cite: this.value?.cite ?? ""
			},

			fields: {
				class: {
					label: "Class",
					type: "text",
					placeholder: "Enter one or more CSS classes"
				},
				cite: {
					label: "Citation",
					type: "text",
					placeholder: "Enter a citation source"
				}
			}
		};
	},

	// Watch for changes to incoming dialog values
	watch: {
		value: {
			handler(value) {
				this.values = {
					class: value?.class ?? ""
				};
			},
			deep: true
		}
	},

	methods: {
		updateValues(value, name) {
			//console.log("Form input:", value);
			this.values = {
				...this.values,
				[name]: value
			};
		},

		submit() {
			this.$emit("submit", { ...this.values });
		}
	}
};
</script>
