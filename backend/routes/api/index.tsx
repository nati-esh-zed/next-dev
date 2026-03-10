import { text, type RouterHandlers } from "@bepalo/router";

export default {
  GET: {
    HANDLER: () => text("Hello world"),
  },
} satisfies RouterHandlers;
