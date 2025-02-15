import CiteDialog from "./components/CiteDialog.vue";
import MarkupDialog from "./components/MarkupDialog.vue";
import { icons } from "./config/icons.js";
import { textareaButtons } from "./config/textareaButtons.js";
import { writerMarks } from "./config/writerMarks.js";

window.panel.plugin("scottboms/kirby-markup", {
  icons,
  components: {
    "cite-dialog": CiteDialog,
    "markup-dialog": MarkupDialog,
  },
  textareaButtons,
  writerMarks
});

