[**@eslint-react/kit**](../../README.md)

***

[@eslint-react/kit](../../README.md) / [\<internal\>](../README.md) / FunctionNameDefinition

# Class: FunctionNameDefinition

## Extends

- [`DefinitionBase`](DefinitionBase.md)\<[`FunctionName`](../README.md#functionname), [`FunctionDeclaration`](../type-aliases/FunctionDeclaration.md) \| [`FunctionExpression`](../interfaces/FunctionExpression.md) \| [`TSDeclareFunction`](../type-aliases/TSDeclareFunction.md) \| [`TSEmptyBodyFunctionExpression`](../interfaces/TSEmptyBodyFunctionExpression.md), `null`, [`Identifier`](../interfaces/Identifier.md)\>

## Constructors

### Constructor

> **new FunctionNameDefinition**(`name`, `node`): `FunctionNameDefinition`

#### Parameters

##### name

[`Identifier`](../interfaces/Identifier.md)

##### node

[`FunctionDeclaration`](../type-aliases/FunctionDeclaration.md) | [`FunctionExpression`](../interfaces/FunctionExpression.md) | [`TSDeclareFunction`](../type-aliases/TSDeclareFunction.md) | [`TSEmptyBodyFunctionExpression`](../interfaces/TSEmptyBodyFunctionExpression.md)

#### Returns

`FunctionNameDefinition`

#### Overrides

[`DefinitionBase`](DefinitionBase.md).[`constructor`](DefinitionBase.md#constructor)

## Properties

### $id

> `readonly` **$id**: `number`

A unique ID for this instance - primarily used to help debugging and testing

#### Inherited from

[`DefinitionBase`](DefinitionBase.md).[`$id`](DefinitionBase.md#id)

***

### isTypeDefinition

> `readonly` **isTypeDefinition**: `false` = `false`

`true` if the variable is valid in a type context, false otherwise

#### Overrides

[`DefinitionBase`](DefinitionBase.md).[`isTypeDefinition`](DefinitionBase.md#istypedefinition)

***

### isVariableDefinition

> `readonly` **isVariableDefinition**: `true` = `true`

`true` if the variable is valid in a value context, false otherwise

#### Overrides

[`DefinitionBase`](DefinitionBase.md).[`isVariableDefinition`](DefinitionBase.md#isvariabledefinition)

***

### name

> `readonly` **name**: [`Identifier`](../interfaces/Identifier.md)

The `Identifier` node of this definition

#### Inherited from

[`DefinitionBase`](DefinitionBase.md).[`name`](DefinitionBase.md#name-1)

***

### node

> `readonly` **node**: [`FunctionDeclaration`](../type-aliases/FunctionDeclaration.md) \| [`FunctionExpression`](../interfaces/FunctionExpression.md) \| [`TSDeclareFunction`](../type-aliases/TSDeclareFunction.md) \| [`TSEmptyBodyFunctionExpression`](../interfaces/TSEmptyBodyFunctionExpression.md)

The enclosing node of the name.

#### Inherited from

[`DefinitionBase`](DefinitionBase.md).[`node`](DefinitionBase.md#node-1)

***

### parent

> `readonly` **parent**: `null`

the enclosing statement node of the identifier.

#### Inherited from

[`DefinitionBase`](DefinitionBase.md).[`parent`](DefinitionBase.md#parent-1)

***

### type

> `readonly` **type**: [`FunctionName`](../README.md#functionname)

#### Inherited from

[`DefinitionBase`](DefinitionBase.md).[`type`](DefinitionBase.md#type-1)
