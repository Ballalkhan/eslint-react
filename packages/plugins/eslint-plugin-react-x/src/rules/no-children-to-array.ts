import type { RuleContext, RuleFeature } from "@eslint-react/kit";
import type { RuleListener } from "@typescript-eslint/utils/ts-eslint";
import type { CamelCase } from "string-ts";
import * as ER from "@eslint-react/core";

import { createRule } from "../utils";

export const RULE_NAME = "no-children-to-array";

export const RULE_FEATURES = [] as const satisfies RuleFeature[];

export type MessageID = CamelCase<typeof RULE_NAME>;

export default createRule<[], MessageID>({
  meta: {
    type: "problem",
    docs: {
      description: "Disallow `Children.toArray`.",
      [Symbol.for("rule_features")]: RULE_FEATURES,
    },
    messages: {
      noChildrenToArray: "Using 'Children.toArray' is uncommon and can lead to fragile code. Use alternatives instead.",
    },
    schema: [],
  },
  name: RULE_NAME,
  create,
  defaultOptions: [],
});

export function create(context: RuleContext<MessageID, []>): RuleListener {
  return {
    MemberExpression(node) {
      if (ER.isChildrenToArray(context, node)) {
        context.report({
          messageId: "noChildrenToArray",
          node: node.property,
        });
      }
    },
  };
}
