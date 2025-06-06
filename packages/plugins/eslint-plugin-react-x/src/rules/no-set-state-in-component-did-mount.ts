import type { RuleContext, RuleFeature } from "@eslint-react/kit";
import type { TSESTree } from "@typescript-eslint/utils";
import type { RuleListener } from "@typescript-eslint/utils/ts-eslint";
import type { CamelCase } from "string-ts";
import * as AST from "@eslint-react/ast";
import * as ER from "@eslint-react/core";

import { createRule } from "../utils";

export const RULE_NAME = "no-set-state-in-component-did-mount";

export const RULE_FEATURES = [] as const satisfies RuleFeature[];

export type MessageID = CamelCase<typeof RULE_NAME>;

export default createRule<[], MessageID>({
  meta: {
    type: "problem",
    docs: {
      description: "Disallow calling `this.setState` in `componentDidMount` outside of functions, such as callbacks.",
      [Symbol.for("rule_features")]: RULE_FEATURES,
    },
    messages: {
      noSetStateInComponentDidMount:
        "Do not call `this.setState` in `componentDidMount` outside of functions, such as callbacks.",
    },
    schema: [],
  },
  name: RULE_NAME,
  create,
  defaultOptions: [],
});

export function create(context: RuleContext<MessageID, []>): RuleListener {
  if (!context.sourceCode.text.includes("componentDidMount")) return {};
  return {
    CallExpression(node: TSESTree.CallExpression) {
      if (!ER.isThisSetState(node)) {
        return;
      }
      const clazz = AST.findParentNode(node, ER.isClassComponent);
      const method = AST.findParentNode(node, (n) => n === clazz || ER.isComponentDidMount(n));
      if (clazz == null || method == null || method === clazz) return;
      const methodScope = context.sourceCode.getScope(method);
      const upperScope = context.sourceCode.getScope(node).upper;
      if (
        method.parent === clazz.body
        && upperScope === methodScope
      ) {
        context.report({
          messageId: "noSetStateInComponentDidMount",
          node,
        });
      }
    },
  };
}
