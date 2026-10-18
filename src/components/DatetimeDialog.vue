<template>
	<k-dialog
		ref="dialog"
		class="datetime-dialog"
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
// console.log('Datetime Dialog loaded...');

export default {
	name: "datetime-dialog",
	props: {
		value: {
			type: Object,
			default: () => ({
        cite: "",
        datetime: ""
			})
		}
	},

	emits: ["submit", "cancel"],

	data() {
		return {
			values: {
				cite: this.value?.cite ?? "",
				datetime: this.value?.datetime ?? ""
			},

			fields: {
				cite: {
					label: "Cite",
					type: "text",
					placeholder: "Enter a URI for a resource that explains the change"
				},
				datetime: {
					label: "Date",
					type: "date",
					time: true
				}
			}
		};
	},

	// Watch for changes to incoming dialog values
	watch: {
		value: {
			handler(value) {
				this.values = {
					cite: value?.cite ?? "",
					datetime: value?.datetime ?? ""
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
