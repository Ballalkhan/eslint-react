[**@eslint-react/kit**](../../README.md)

***

[@eslint-react/kit](../../README.md) / [\<internal\>](../README.md) / LabeledStatement

# Interface: LabeledStatement

## Extends

- `BaseNode`

## Properties

### body

> **body**: [`Statement`](../type-aliases/Statement.md)

***

### label

> **label**: [`Identifier`](Identifier.md)

***

### loc

> **loc**: [`SourceLocation`](SourceLocation.md)

The source location information of the node.

The loc property is defined as nullable by ESTree, but ESLint requires this property.

#### Inherited from

`BaseNode.loc`

***

### parent

> **parent**: [`Node`](../type-aliases/Node.md)

#### Inherited from

`BaseNode.parent`

***

### range

> **range**: [`Range`](../type-aliases/Range.md)

#### Inherited from

`BaseNode.range`

***

### type

> **type**: [`LabeledStatement`](../README.md#labeledstatement)

#### Overrides

`BaseNode.type`
