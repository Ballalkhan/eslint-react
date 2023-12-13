import { MutRef, P } from "@eslint-react/tools";
import type { ESLintUtils } from "@typescript-eslint/utils";
import type { JSONSchema4 } from "@typescript-eslint/utils/json-schema";

import { createRule, isJSXFile } from "../utils";

export const RULE_NAME = "filename-extension";

export type MessageID = "FILE_NAME_EXTENSION_INVALID" | "FILE_NAME_EXTENSION_UNEXPECTED";

type Cond = "always" | "as-needed";

/* eslint-disable no-restricted-syntax */
type Options = readonly [
  | {
    rule?: Cond;
    // Reserved for future use
    // excepts?: readonly string[];
  }
  | Cond
  | undefined,
];
/* eslint-enable no-restricted-syntax */

const defaultOptions = ["as-needed"] as const satisfies Options;

const schema = [
  {
    anyOf: [
      {
        type: "string",
        enum: ["always", "as-needed"],
      },
      {
        type: "object",
        additionalProperties: false,
        properties: {
          rule: {
            type: "string",
            enum: ["always", "as-needed"],
          },
        },
      },
    ],
  },
] satisfies [JSONSchema4];

export default createRule<Options, MessageID>({
  name: RULE_NAME,
  meta: {
    type: "suggestion",
    docs: {
      description: "enforce naming convention for JSX file extensions",
      requiresTypeChecking: false,
    },
    schema,
    messages: {
      FILE_NAME_EXTENSION_INVALID: "JSX files must have a `.jsx` or `.tsx` extension",
      FILE_NAME_EXTENSION_UNEXPECTED: "use `.jsx` or `.tsx` extension as needed",
    },
  },
  defaultOptions,
  create(context) {
    const options = context.options[0] ?? defaultOptions[0];
    const cond = P.isString(options) ? options : options.rule ?? "as-needed";

    const filename = context.getFilename();
    const hasJSXNodeRef = MutRef.make<boolean>(false);

    return {
      JSXElement() {
        MutRef.set(hasJSXNodeRef, true);
      },
      JSXFragment() {
        MutRef.set(hasJSXNodeRef, true);
      },
      "Program:exit"(node) {
        const fileNameExt = filename.slice(filename.lastIndexOf("."));
        const isJSX = isJSXFile(fileNameExt);
        const hasJSXCode = MutRef.get(hasJSXNodeRef);

        if (!isJSX && hasJSXCode) {
          context.report({
            messageId: "FILE_NAME_EXTENSION_INVALID",
            node,
          });

          return;
        }

        if (
          isJSX
          && !hasJSXCode
          && cond === "as-needed"
        ) {
          context.report({
            messageId: "FILE_NAME_EXTENSION_UNEXPECTED",
            node,
          });
        }
      },
    };
  },
});
