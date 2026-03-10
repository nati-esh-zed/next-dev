import {
  json,
  parseQuery,
  type CTXQuery,
  type RouterHandlers,
} from "@bepalo/router";
import shops from "../../../data/shops.json";

export default {
  GET: {
    FILTER: [parseQuery()],
    HANDLER: (req, { query }) => {
      const offset = parseInt(query.offset || "0");
      const limit = parseInt(query.limit || "0") || null;
      return json(shops.slice(offset, limit ? offset + limit : shops.length));
    },
  },
} satisfies RouterHandlers<
  CTXQuery & { query: { offset: string; limit: string } }
>;
