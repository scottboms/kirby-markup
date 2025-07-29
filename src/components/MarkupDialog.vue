<template>
  <k-dialog
    class="markup-dialog"
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
// console.log('Markup Dialog loaded...');

export default {
  name: "markup-dialog",
  props: {
    editor: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      default: () => ({
        class: '',
        title: ''
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
        title: {
          label: "Title",
          type: "text",
          placeholder: "Enter a title"
        }
      }
    };
  }
};
</script>
