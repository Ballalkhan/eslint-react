---
title: no-children-count
---

**Full Name in `eslint-plugin-react-x`**

```plain copy
react-x/no-children-count
```

**Full Name in `@eslint-react/eslint-plugin`**

```plain copy
@eslint-react/no-children-count
```

**Presets**

- `x`
- `recommended`
- `recommended-typescript`
- `recommended-type-checked`

## Description

Disallow the use of `Children.count` from the `react` package.

Using `Children` is uncommon and can lead to fragile code. [See common alternatives](https://react.dev/reference/react/Children#alternatives).

## Examples

### Failing

```tsx
import React, { Children } from "react";

interface MyComponentProps {
  children: React.ReactNode;
}

function MyComponent({ children }: MyComponentProps) {
  return (
    <>
      <h1>Total rows: {Children.count(children)}</h1>
      ...
    </>
  );
}
```

## Implementation

- [Rule source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/no-children-count.ts)
- [Test source](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x/src/rules/no-children-count.spec.ts)

## Further Reading

- [Legacy React APIs `Children`](https://react.dev/reference/react/Children)

---

## See Also

- [`no-children-for-each`](./no-children-for-each)\
  Prevents the use of `Children.forEach` from the `react` package.
- [`no-children-map`](./no-children-map)\
  Prevents the use of `Children.map` from the `react` package.
- [`no-children-only`](./no-children-only)\
  Prevents the use of `Children.only` from the `react` package.
- [`no-children-to-array`](./no-children-to-array)\
  Prevents the use of `Children.toArray` from the `react` package.
