import type { RuleContext, RuleFeature } from "@eslint-react/kit";
import type { TSESTree } from "@typescript-eslint/types";
import type { RuleListener } from "@typescript-eslint/utils/ts-eslint";
import type { CamelCase } from "string-ts";
import { _ } from "@eslint-react/eff";
import * as JSX from "@eslint-react/jsx";
import { getSettingsFromContext } from "@eslint-react/shared";

import { createRule, findCustomComponent, findCustomComponentProp, getElementTypeOnJsxAndDom } from "../utils";

export const RULE_NAME = "no-unsafe-target-blank";

export const RULE_FEATURES = [] as const satisfies RuleFeature[];

export type MessageID = CamelCase<typeof RULE_NAME>;

function isExternalLinkLike(value: string | _) {
  if (value == null) return false;
  return value.startsWith("https://")
    || /^(?:\w+:|\/\/)/u.test(value);
}

function isSafeRel(value: string | _) {
  if (value == null) return false;
  return value === "noreferrer"
    || /\bnoreferrer\b/u.test(value);
}

export default createRule<[], MessageID>({
  meta: {
    type: "problem",
    docs: {
      description: 'Disallow `target="_blank"` without `rel="noreferrer noopener"`.',
      [Symbol.for("rule_features")]: RULE_FEATURES,
    },
    messages: {
      noUnsafeTargetBlank:
        `Using 'target="_blank"' on an external link without 'rel="noreferrer noopener"' is a security risk.`,
    },
    schema: [],
  },
  name: RULE_NAME,
  create,
  defaultOptions: [],
});

export function create(context: RuleContext<MessageID, []>): RuleListener {
  const settings = getSettingsFromContext(context);
  const polymorphicPropName = settings.polymorphicPropName;
  const additionalComponents = settings.additionalComponents.filter((c) => c.as === "a");

  return {
    JSXElement(node: TSESTree.JSXElement) {
      const [elementNameOnJsx, elementNameOnDom] = getElementTypeOnJsxAndDom(
        context,
        node,
        polymorphicPropName,
        additionalComponents,
      );
      if (elementNameOnDom !== "a") return;
      const elementScope = context.sourceCode.getScope(node);
      const customComponent = findCustomComponent(elementNameOnJsx, additionalComponents);

      const getAttributeStringValue = (name: string) => {
        const customComponentProp = findCustomComponentProp(name, customComponent?.attributes ?? []);
        const propNameOnJsx = customComponentProp?.name ?? name;
        const attributeNode = JSX.getAttribute(
          propNameOnJsx,
          node.openingElement.attributes,
          elementScope,
        );
        if (attributeNode == null) return customComponentProp?.defaultValue;
        const attributeScope = context.sourceCode.getScope(attributeNode);
        const attributeValue = JSX.getAttributeValue(attributeNode, propNameOnJsx, attributeScope);
        if (attributeValue.kind === "some" && typeof attributeValue.value === "string") {
          return attributeValue.value;
        }
        return _;
      };

      if (getAttributeStringValue("target") !== "_blank") {
        return;
      }
      if (!isExternalLinkLike(getAttributeStringValue("href"))) {
        return;
      }
      if (isSafeRel(getAttributeStringValue("rel"))) {
        return;
      }
      context.report({
        messageId: "noUnsafeTargetBlank",
        node,
      });
    },
  };
}
