<template>
  <k-dialog
    class="class-dialog"
    ref="dialog"
    :visible="true"
    :submit-button="true"
    :cancel-button="true"
    size="small"
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
// console.log('Class Dialog loaded...');

export default {
  name: "class-dialog",
  emits: ["submit", "cancel", "input"],
  props: {
    editor: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      default: () => ({
        class: ''
      })
    }
  },
  data() {
    return {
      values: this.value,
      fields: {
        class: {
          label: "Class",
          type: "text",
          placeholder: "Enter one or more CSS classes"
        }
      }
    };
  }
};
</script>

