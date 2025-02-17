<template>
  <k-dialog
    class="cite-dialog"
    ref="dialog"
    :visible="true"
    :submit-button="true"
    :cancel-button="true"
    size="medium"
    @submit="$emit('submit')"
    @cancel="$emit('cancel')">
    <k-form
      :fields="fields"
      v-bind="$props"
      :value="values"
      @input="$emit('input', $event)" />
  </k-dialog>
</template>

<script>
console.log('Citation Dialog loaded...');

export default {
  name: "cite-dialog",
  props: {
    editor: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      default: () => ({
        class: '',
        cite: ''
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
        },
        cite: {
          label: "Citation",
          type: "text",
          placeholder: "Enter a citation source"
        }
      }
    };
  }
};
</script>
