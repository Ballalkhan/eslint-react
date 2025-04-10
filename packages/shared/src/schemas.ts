/* eslint-disable perfectionist/sort-objects */
import * as z from "@zod/mini";

export const CustomComponentPropSchema = z.object({
  /**
   * The name of the prop in the user-defined component.
   * @example
   * "to"
   */
  name: z.string(),
  /**
   * The name of the prop in the host component.
   * @example
   * "href"
   */
  as: z.optional(z.string()),
  /**
   * Whether the prop is controlled or not in the user-defined component.
   * @internal
   * @example
   * `true`
   */
  controlled: z.optional(z.boolean()),
  /**
   * The default value of the prop in the user-defined component.
   * @example
   * `"/"`
   */
  defaultValue: z.optional(z.string()),
});

/**
 * @description
 * This will provide some key information to the rule before checking for user-defined components.
 * For example:
 * Which prop is used as the `href` prop for the user-defined `Link` component that represents the built-in `a` element.
 */
export const CustomComponentSchema = z.object({
  /**
   * The name of the user-defined component.
   * @example
   * "Link"
   */
  name: z.string(),
  /**
   * The name of the host component that the user-defined component represents.
   * @example
   * "a"
   */
  as: z.optional(z.string()),
  /**
   * Attributes mapping between the user-defined component and the host component.
   * @example
   * `Link` component has a `to` attribute that represents the `href` attribute in the built-in `a` element with a default value of `"/"`.
   */
  attributes: z.optional(z.array(CustomComponentPropSchema)),
  /**
   * The ESQuery selector to select the component precisely.
   * @internal
   * @example
   * `JSXElement:has(JSXAttribute[name.name='component'][value.value='a'])`
   */
  selector: z.optional(z.string()),
});

export const CustomHooksSchema = z.object({
  use: z.optional(z.array(z.string())),
  useActionState: z.optional(z.array(z.string())),
  useCallback: z.optional(z.array(z.string())),
  useContext: z.optional(z.array(z.string())),
  useDebugValue: z.optional(z.array(z.string())),
  useDeferredValue: z.optional(z.array(z.string())),
  useEffect: z.optional(z.array(z.string())),
  useFormStatus: z.optional(z.array(z.string())),
  useId: z.optional(z.array(z.string())),
  useImperativeHandle: z.optional(z.array(z.string())),
  useInsertionEffect: z.optional(z.array(z.string())),
  useLayoutEffect: z.optional(z.array(z.string())),
  useMemo: z.optional(z.array(z.string())),
  useOptimistic: z.optional(z.array(z.string())),
  useReducer: z.optional(z.array(z.string())),
  useRef: z.optional(z.array(z.string())),
  useState: z.optional(z.array(z.string())),
  useSyncExternalStore: z.optional(z.array(z.string())),
  useTransition: z.optional(z.array(z.string())),
});

/**
 * @internal
 */
export const ESLintReactSettingsSchema = z.object({
  /**
   * The source where React is imported from.
   * @description This allows to specify a custom import location for React when not using the official distribution.
   * @default `"react"`
   * @example `"@pika/react"`
   */
  importSource: z.optional(z.string()),
  /**
   * The identifier that's used for JSX Element creation.
   * @default `"createElement"`
   * @deprecated
   */
  jsxPragma: z.optional(z.string()),
  /**
   * The identifier that's used for JSX fragment elements.
   * @description This should not be a member expression (i.e. use "Fragment" instead of "React.Fragment").
   * @default `"Fragment"`
   * @deprecated
   */
  jsxPragmaFrag: z.optional(z.string()),
  /**
   * The name of the prop that is used for polymorphic components.
   * @description This is used to determine the type of the component.
   * @example `"as"`
   */
  polymorphicPropName: z.optional(z.string()),
  /**
   * @internal
   */
  strict: z.optional(z.boolean()),
  /**
   * Check both the shape and the import to determine if an API is from React.
   * @description This can prevent false positives when using a irrelevant third-party library that has similar APIs to React.
   * @default `true`
   */
  skipImportCheck: z.optional(z.boolean()),
  /**
   * React version to use, "detect" means auto detect React version from the project's dependencies.
   * If `importSource` is specified, an equivalent version of React should be provided here.
   * @example `"18.3.1"`
   * @default `"detect"`
   */
  version: z.optional(z.string()),
  /**
   * A object to define additional hooks that are equivalent to the built-in React Hooks.
   * @description ESLint React will recognize these aliases as equivalent to the built-in hooks in all its rules.
   * @example `{ useEffect: ["useIsomorphicLayoutEffect"] }`
   */
  additionalHooks: z.optional(CustomHooksSchema),
  /**
   * An array of user-defined components
   * @description This is used to inform the ESLint React plugins how to treat these components during checks.
   * @example `[{ name: "Link", as: "a", attributes: [{ name: "to", as: "href" }, { name: "rel", defaultValue: "noopener noreferrer" }] }]`
   */
  additionalComponents: z.optional(z.array(CustomComponentSchema)),
});

/**
 * @internal
 */
export const ESLintSettingsSchema = z.optional(
  z.object({
    "react-x": z.optional(ESLintReactSettingsSchema),
    /** @deprecated Use `react-x` instead */
    reactOptions: z.optional(ESLintReactSettingsSchema),
  }),
  {},
);

export type CustomComponent = z.infer<typeof CustomComponentSchema>;

export type CustomComponentProp = z.infer<typeof CustomComponentPropSchema>;

export type CustomHooks = z.infer<typeof CustomHooksSchema>;

export type ESLintReactSettings = z.infer<typeof ESLintReactSettingsSchema>;

export type ESLintSettings = z.infer<typeof ESLintSettingsSchema>;

/**
 * The default ESLint settings for "react-x".
 */
export const DEFAULT_ESLINT_REACT_SETTINGS = {
  ...z.parse(ESLintReactSettingsSchema, {}),
  version: "detect",
  importSource: "react",
  strict: false,
  skipImportCheck: true,
  polymorphicPropName: "as",
  additionalHooks: {
    useEffect: ["useIsomorphicLayoutEffect"],
    useLayoutEffect: ["useIsomorphicLayoutEffect"],
  },
} as const satisfies ESLintReactSettings;
