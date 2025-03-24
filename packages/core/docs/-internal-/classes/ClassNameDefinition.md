[**@eslint-react/core**](../../README.md)

***

[@eslint-react/core](../../README.md) / [\<internal\>](../README.md) / ClassNameDefinition

# Class: ClassNameDefinition

## Extends

- [`DefinitionBase`](DefinitionBase.md)\<[`ClassName`](../README.md#classname), [`ClassDeclaration`](../type-aliases/ClassDeclaration.md) \| [`ClassExpression`](../interfaces/ClassExpression.md), `null`, [`Identifier`](../interfaces/Identifier.md)\>

## Constructors

### Constructor

> **new ClassNameDefinition**(`name`, `node`): `ClassNameDefinition`

#### Parameters

##### name

[`Identifier`](../interfaces/Identifier.md)

##### node

[`ClassDeclaration`](../type-aliases/ClassDeclaration.md) | [`ClassExpression`](../interfaces/ClassExpression.md)

#### Returns

`ClassNameDefinition`

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

> `readonly` **isTypeDefinition**: `true` = `true`

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

> `readonly` **node**: [`ClassDeclaration`](../type-aliases/ClassDeclaration.md) \| [`ClassExpression`](../interfaces/ClassExpression.md)

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

> `readonly` **type**: [`ClassName`](../README.md#classname)

#### Inherited from

[`DefinitionBase`](DefinitionBase.md).[`type`](DefinitionBase.md#type-1)
