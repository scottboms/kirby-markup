<template>
	<k-dialog
		ref="dialog"
		class="markup-dialog"
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
	name: "MarkupDialog",
	props: {
		value: {
			type: Object,
			default: () => ({
				title: "",
				class: ""
			})
		}
	},

	emits: ["submit", "cancel"],

	data() {
		return {
			values: {
				title: this.value?.title ?? "",
				class: this.value?.class ?? ""
			},

			fields: {
				title: {
					label: "Title",
					type: "text",
					placeholder: "Enter a title"
				},
				class: {
					label: "Class",
					type: "text",
					placeholder: "Enter one or more CSS classes"
				}
			}
		};
	},
	
	// Watch for changes to incoming dialog values
	watch: {
		value: {
			handler(value) {
				this.values = {
					title: value?.title ?? "",
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
