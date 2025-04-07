import { RuleTester } from "@typescript-eslint/rule-tester";
import tsx from "dedent";

import { JsxEmit } from "typescript";
import { defaultLanguageOptionsWithTypes, getProjectForJsxEmit } from "../../../../../test";

import rule, { RULE_NAME } from "./jsx";

const ruleTester = new RuleTester({
  languageOptions: {
    ...defaultLanguageOptionsWithTypes,
    parserOptions: {
      ...defaultLanguageOptionsWithTypes.parserOptions,
      project: getProjectForJsxEmit(JsxEmit.ReactJSX),
      projectService: false,
    },
  },
});

ruleTester.run(RULE_NAME, rule, {
  invalid: [
    {
      code: tsx`
        import React from "react";
        const Foo = () => <div />;
      `,
      errors: [
        {
          messageId: "jsx",
          data: {
            jsx: JsxEmit.ReactJSX,
            jsxFactory: "React.createElement",
            jsxFragmentFactory: "React.Fragment",
            jsxImportSource: "react",
            jsxRuntime: "automatic",
          },
        },
      ],
    },
    {
      code: tsx`
        /** @jsx Preact.h */
        /** @jsxFrag Preact.Fragment */
        /** @jsxImportSource preact */
        /** @jsxRuntime classic */
        import React from "react";
        const Foo = () => <div />;
      `,
      errors: [
        {
          messageId: "jsx",
          data: {
            jsx: JsxEmit.React,
            jsxFactory: "Preact.h",
            jsxFragmentFactory: "Preact.Fragment",
            jsxImportSource: "preact",
            jsxRuntime: "classic",
          },
        },
      ],
    },
    {
      code: tsx`
        /** @jsxRuntime classic */
        import React from "react";
        const Foo = () => <div />;
      `,
      errors: [
        {
          messageId: "jsx",
          data: {
            jsx: JsxEmit.React,
            jsxFactory: "React.createElement",
            jsxFragmentFactory: "React.Fragment",
            jsxImportSource: "react",
            jsxRuntime: "classic",
          },
        },
      ],
    },
  ],
  valid: [],
});
