<template>
  <k-dialog
    class="datetime-dialog"
    ref="dialog"
    :visible="true"
    :submit-button="true"
    :cancel-button="true"
    size="medium"
    @submit="$emit('submit', value)"
    @cancel="$emit('cancel')">
    <k-form
      :fields="fields"
      v-bind="$props"
      :value="value"
      @input="$emit('input', $event)" />
  </k-dialog>
</template>

<script>
// console.log('Datetime Dialog loaded...');

export default {
  name: "datetime-dialog",
  emits: ["submit", "cancel", "input"],
  props: {
    editor: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      default: () => ({
        cite: '',
        datetime: ''
      })
    }
  },
  data() {
    return {
      values: this.value,
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
  }
};
</script>
