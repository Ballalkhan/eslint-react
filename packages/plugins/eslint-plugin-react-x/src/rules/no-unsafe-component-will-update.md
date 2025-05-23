---
title: no-unsafe-component-will-update
---

**Full Name in `eslint-plugin-react-x`**

```plain copy
react-x/no-unsafe-component-will-update
```

**Full Name in `@eslint-react/eslint-plugin`**

```plain copy
@eslint-react/no-unsafe-component-will-update
```

**Presets**

- `x`
- `recommended`
- `recommended-typescript`
- `recommended-type-checked`

## Description

Warns the usage of `UNSAFE_componentWillUpdate` in class components.

Using unsafe lifecycle methods like `UNSAFE_componentWillUpdate` makes your component's behavior less predictable and are more likely to cause bugs.

## Examples

### Failing

```tsx
import React from "react";

class MyComponent extends React.Component {
  UNSAFE_componentWillUpdate() {
    // ...
  }
}
```

## Implementation

- [Rule source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/no-unsafe-component-will-update.ts)
- [Test source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/no-unsafe-component-will-update.spec.ts)

---

## See Also

- [`no-unsafe-component-will-mount`](./no-unsafe-component-will-mount)\
  Prevents usage of `UNSAFE_componentWillMount` in class components.
- [`no-unsafe-component-will-receive-props`](./no-unsafe-component-will-receive-props)\
  Prevents usage of `UNSAFE_componentWillReceiveProps` in class components.
