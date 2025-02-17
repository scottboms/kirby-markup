import CiteDialog from "./components/CiteDialog.vue";
import ClassDialog from "./components/ClassDialog.vue";
import MarkupDialog from "./components/MarkupDialog.vue";
import { icons } from "./config/icons.js";
import { textareaButtons } from "./config/textareaButtons.js";
import { Abbreviation } from "./config/marks/Abbreviation.js";
import { Citation } from "./config/marks/Citation.js";
import { Definition } from "./config/marks/Definition.js";
import { InlineQuote } from "./config/marks/InlineQuote.js";
import { Insert } from "./config/marks/Insert.js";
import { Mark } from "./config/marks/Mark.js";
import { Sample } from "./config/marks/Sample.js";
import { SmallCaps } from "./config/marks/SmallCaps.js";

window.panel.plugin("scottboms/kirby-markup", {
  icons,
  components: {
    'cite-dialog': CiteDialog,
    'markup-dialog': MarkupDialog,
    'class-dialog': ClassDialog
  },
  textareaButtons,
  writerMarks: {
    abbr: Abbreviation,
    cite: Citation,
    dfn: Definition,
    q: InlineQuote,
    ins: Insert,
    mark: Mark,
    samp: Sample,
    smallcaps: SmallCaps
  }
});

