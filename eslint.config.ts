/* eslint-disable perfectionist/sort-objects */
/* eslint-disable simple-import-sort/imports */
import url from "node:url";

import js from "@eslint/js";
import markdown from "@eslint/markdown";
import stylistic from "@stylistic/eslint-plugin";
import configFlatGitignore from "eslint-config-flat-gitignore";
import pluginDeMorgan from "eslint-plugin-de-morgan";
import pluginJsdoc from "eslint-plugin-jsdoc";
import pluginLocal from "@local/eslint-plugin-local";
import pluginPerfectionist from "eslint-plugin-perfectionist";
import pluginRegexp from "eslint-plugin-regexp";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginUnicorn from "eslint-plugin-unicorn";
import pluginVitest from "eslint-plugin-vitest";
import tseslint from "typescript-eslint";

const dirname = url.fileURLToPath(new URL(".", import.meta.url));
const GLOB_JS = ["*.{js,jsx,cjs,mjs}", "**/*.{js,jsx,cjs,mjs}"];
const GLOB_TS = ["*.{ts,tsx,cts,mts}", "**/*.{ts,tsx,cts,mts}"];
const GLOB_MD = ["*.md", "**/*.md"];
const GLOB_TEST = [
  "**/*.spec.{ts,tsx,cts,mts}",
  "**/*.test.{ts,tsx,cts,mts}",
  "**/spec.{ts,tsx,cts,mts}",
  "**/test.{ts,tsx,cts,mts}",
];
// const GLOB_YAML = ["*.{yaml,yml}", "**/*.{yaml,yml}"];
const GLOB_CONFIG = ["*.config.{ts,tsx,cts,mts}", "**/*.config.{ts,tsx,cts,mts}"];
const GLOB_SCRIPT = ["scripts/**/*.{ts,cts,mts}"];
const GLOB_IGNORES = [
  ...configFlatGitignore().ignores,
  "apps",
  "docs",
  "test",
  "examples",
];

const templateIndentAnnotations = [
  "outdent",
  "dedent",
  "html",
  "tsx",
  "ts",
];

const packagesTsConfigs = [
  "packages/*/tsconfig.json",
  "packages/*/*/tsconfig.json",
];

const p11tOptions = {
  type: "natural",
  ignoreCase: false,
};

const p11tGroups = {
  customGroups: {
    id: ["^_$", "^id$", "^key$", "^self$"],
    type: ["^type$", "^kind$"],
    meta: [
      "^name$",
      "^meta$",
      "^title$",
      "^description$",
    ],
    alias: ["^alias$", "^as$"],
    rules: ["^node$", "^messageId$"],
  },
  groups: ["id", "type", "meta", "alias", "rules", "unknown"],
};

const enableTypeCheckedRules = {
  ...tseslint.configs.strictTypeCheckedOnly
    .map((x) => x.rules)
    .reduce((a, b) => ({ ...a, ...b }), {}),
  "@typescript-eslint/consistent-type-exports": "error",
  "@typescript-eslint/strict-boolean-expressions": ["error", {
    allowAny: false,
    allowNullableBoolean: false,
    allowNullableEnum: false,
    allowNullableNumber: false,
    allowNullableObject: false,
    allowNullableString: false,
    allowNumber: true,
    allowString: false,
  }],
} satisfies typeof tseslint.configs.disableTypeChecked.rules;

const disableTypeCheckedRules = Object.fromEntries(Object.keys(enableTypeCheckedRules).map((x) => [x, "off"]));

export default tseslint.config(
  {
    name: "global-ignores",
    ignores: GLOB_IGNORES,
  },
  {
    extends: [
      markdown.configs.recommended,
    ],
    files: GLOB_MD,
    ignores: [
      "packages/**/docs/**/*.md",
    ],
    language: "markdown/gfm",
    rules: {
      "markdown/no-html": "error",
      "markdown/no-missing-label-refs": "off",
    },
  },
  {
    files: [...GLOB_JS, ...GLOB_TS],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strict,
      pluginDeMorgan.configs.recommended,
      pluginPerfectionist.configs["recommended-natural"],
      pluginRegexp.configs["flat/recommended"],
      pluginJsdoc.configs["flat/recommended-typescript-error"],
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        project: packagesTsConfigs,
        projectService: true,
        tsconfigRootDir: dirname,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    plugins: {
      ["@stylistic"]: stylistic,
      ["local"]: pluginLocal,
      ["simple-import-sort"]: pluginSimpleImportSort,
      ["unicorn"]: pluginUnicorn,
    },
  },
  {
    files: [...GLOB_JS, ...GLOB_TS],
    rules: {
      eqeqeq: ["error", "smart"],
      "no-console": "error",
      "no-else-return": "error",
      "no-fallthrough": ["error", { commentPattern: ".*intentional fallthrough.*" }],
      "no-implicit-coercion": ["error", { allow: ["!!"] }],
      "no-mixed-operators": "warn",
      "no-process-exit": "error",
      "no-undef": "off",
      "one-var": ["error", "never"],
      "prefer-object-has-own": "error",
      // Part: custom rules
      "no-restricted-syntax": [
        "error",
        {
          message: "no optional",
          selector: "TSPropertySignature[optional=true]",
        },
      ],
      // Part: typescript-eslint rules
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          minimumDescriptionLength: 5,
          "ts-check": false,
          "ts-expect-error": "allow-with-description",
          "ts-ignore": true,
          "ts-nocheck": true,
        },
      ],
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { caughtErrors: "all" }],
      ...enableTypeCheckedRules,
      // Part: jsdoc rules
      "jsdoc/check-param-names": "warn",
      "jsdoc/check-tag-names": "warn",
      "jsdoc/informative-docs": "off",
      "jsdoc/lines-before-block": "off",
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-param": "warn",
      "jsdoc/require-param-description": "warn",
      "jsdoc/require-returns": "off",
      "jsdoc/require-yields": "warn",
      "jsdoc/tag-lines": "off",
      // Part: simple-import-sort rules
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": "warn",
      // Part: stylistic rules
      "@stylistic/arrow-parens": ["warn", "always"],
      "@stylistic/no-multi-spaces": ["warn"],
      "@stylistic/operator-linebreak": [
        "warn",
        "before",
      ],
      "@stylistic/quote-props": ["error", "as-needed"],
      // Part: perfectionist rules
      "perfectionist/sort-exports": "off",
      "perfectionist/sort-imports": "off",
      "perfectionist/sort-interfaces": [
        "warn",
        {
          ...p11tOptions,
          ...p11tGroups,
        },
      ],
      "perfectionist/sort-intersection-types": "off",
      "perfectionist/sort-modules": "off",
      "perfectionist/sort-named-exports": "off",
      "perfectionist/sort-named-imports": "off",
      "perfectionist/sort-object-types": [
        "warn",
        {
          ...p11tOptions,
          ...p11tGroups,
        },
      ],
      "perfectionist/sort-objects": [
        "warn",
        {
          ...p11tOptions,
          ...p11tGroups,
          partitionByComment: "^Part:.*",
        },
      ],
      "perfectionist/sort-switch-case": "off",
      "perfectionist/sort-union-types": "off",
      // Part: unicorn rules
      "unicorn/template-indent": [
        "warn",
        {
          comments: templateIndentAnnotations,
          tags: templateIndentAnnotations,
        },
      ],
      // Part: local rules
      "local/avoid-multiline-template-expression": "warn",
      "local/no-shadow-underscore": "error",
      "local/prefer-eqeq-nullish-comparison": "warn",
    },
  },
  {
    files: GLOB_JS,
    languageOptions: {
      parserOptions: {
        project: false,
        projectService: false,
      },
    },
    rules: {
      ...disableTypeCheckedRules,
      "@typescript-eslint/no-var-requires": "off",
    },
  },
  {
    files: GLOB_TEST,
    languageOptions: {
      globals: {
        ...pluginVitest.environments.env.globals,
      },
      parser: tseslint.parser,
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        project: "tsconfig.json",
        projectService: true,
        tsconfigRootDir: dirname,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    plugins: {
      vitest: pluginVitest,
    },
    rules: {
      ...disableTypeCheckedRules,
      ...pluginVitest.configs.recommended.rules,
      "@typescript-eslint/no-empty-function": ["error", { allow: ["arrowFunctions"] }],
      "local/avoid-multiline-template-expression": "off",
    },
  },
  {
    files: GLOB_SCRIPT,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        project: "tsconfig.json",
        projectService: true,
        tsconfigRootDir: dirname,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    rules: {
      "no-console": "off",
      ...disableTypeCheckedRules,
    },
  },
  {
    files: GLOB_CONFIG,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        project: false,
        projectService: false,
      },
    },
    rules: {
      ...disableTypeCheckedRules,
    },
  },
);
