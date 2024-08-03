import { NodeType } from "@eslint-react/ast";
import { useComponentCollectorLegacy } from "@eslint-react/core";
import { F, O } from "@eslint-react/tools";
import type { ESLintUtils } from "@typescript-eslint/utils";
import type { CamelCase } from "string-ts";
import { isMatching, P } from "ts-pattern";

import { createRule } from "../utils";

export const RULE_NAME = "no-class-component";

export type MessageID = CamelCase<typeof RULE_NAME>;

const isComponentDidCatch = isMatching({
  key: {
    type: NodeType.Identifier,
    name: "componentDidCatch",
  },
  type: P.union(NodeType.MethodDefinition, NodeType.PropertyDefinition),
  static: false,
});

const isGetDerivedStateFromError = isMatching({
  key: {
    type: NodeType.Identifier,
    name: "getDerivedStateFromError",
  },
  type: P.union(NodeType.MethodDefinition, NodeType.PropertyDefinition),
  static: true,
});

export default createRule<[], MessageID>({
  meta: {
    type: "problem",
    docs: {
      description: "disallow using class components",
    },
    messages: {
      noClassComponent: "Do not use class components. Use function components instead.",
    },
    schema: [],
  },
  name: RULE_NAME,
  create(context) {
    const { ctx, listeners } = useComponentCollectorLegacy();

    return {
      ...listeners,
      "Program:exit"(node) {
        const components = ctx.getAllComponents(node);

        for (const { name, node: component } of components.values()) {
          if (component.body.body.some(m => isComponentDidCatch(m) || isGetDerivedStateFromError(m))) continue;
          context.report({
            data: {
              name: O.getOrElse(F.constant("anonymous"))(name),
            },
            messageId: "noClassComponent",
            node: component,
          });
        }
      },
    };
  },
  defaultOptions: [],
}) satisfies ESLintUtils.RuleModule<MessageID>;
