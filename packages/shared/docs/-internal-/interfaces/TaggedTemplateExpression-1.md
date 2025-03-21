[**@eslint-react/shared**](../../README.md)

***

[@eslint-react/shared](../../README.md) / [\<internal\>](../README.md) / TaggedTemplateExpression

# Interface: TaggedTemplateExpression

## Extends

- [`MemberExpression`](MemberExpression.md)

## Properties

### \_expressionBrand

> **\_expressionBrand**: `any`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`_expressionBrand`](MemberExpression.md#_expressionbrand)

***

### \_leftHandSideExpressionBrand

> **\_leftHandSideExpressionBrand**: `any`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`_leftHandSideExpressionBrand`](MemberExpression.md#_lefthandsideexpressionbrand)

***

### \_memberExpressionBrand

> **\_memberExpressionBrand**: `any`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`_memberExpressionBrand`](MemberExpression.md#_memberexpressionbrand)

***

### \_unaryExpressionBrand

> **\_unaryExpressionBrand**: `any`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`_unaryExpressionBrand`](MemberExpression.md#_unaryexpressionbrand)

***

### \_updateExpressionBrand

> **\_updateExpressionBrand**: `any`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`_updateExpressionBrand`](MemberExpression.md#_updateexpressionbrand)

***

### end

> `readonly` **end**: `number`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`end`](MemberExpression.md#end)

***

### flags

> `readonly` **flags**: [`NodeFlags`](../enumerations/NodeFlags.md)

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`flags`](MemberExpression.md#flags)

***

### kind

> `readonly` **kind**: [`TaggedTemplateExpression`](../enumerations/SyntaxKind.md#taggedtemplateexpression)

#### Overrides

[`MemberExpression`](MemberExpression.md).[`kind`](MemberExpression.md#kind)

***

### parent

> `readonly` **parent**: [`Node`](Node.md)

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`parent`](MemberExpression.md#parent)

***

### pos

> `readonly` **pos**: `number`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`pos`](MemberExpression.md#pos)

***

### tag

> `readonly` **tag**: [`LeftHandSideExpression`](LeftHandSideExpression.md)

***

### template

> `readonly` **template**: [`TemplateLiteral`](../type-aliases/TemplateLiteral.md)

***

### typeArguments?

> `readonly` `optional` **typeArguments**: [`NodeArray`](NodeArray.md)\<[`TypeNode`](TypeNode.md)\>

## Methods

### forEachChild()

> **forEachChild**\<`T`\>(`cbNode`, `cbNodeArray`?): `undefined` \| `T`

#### Type Parameters

##### T

`T`

#### Parameters

##### cbNode

(`node`) => `undefined` \| `T`

##### cbNodeArray?

(`nodes`) => `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`forEachChild`](MemberExpression.md#foreachchild)

***

### getChildAt()

> **getChildAt**(`index`, `sourceFile`?): [`Node`](Node.md)

#### Parameters

##### index

`number`

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

[`Node`](Node.md)

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getChildAt`](MemberExpression.md#getchildat)

***

### getChildCount()

> **getChildCount**(`sourceFile`?): `number`

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`number`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getChildCount`](MemberExpression.md#getchildcount)

***

### getChildren()

> **getChildren**(`sourceFile`?): readonly [`Node`](Node.md)[]

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

readonly [`Node`](Node.md)[]

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getChildren`](MemberExpression.md#getchildren)

***

### getEnd()

> **getEnd**(): `number`

#### Returns

`number`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getEnd`](MemberExpression.md#getend)

***

### getFirstToken()

> **getFirstToken**(`sourceFile`?): `undefined` \| [`Node`](Node.md)

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`undefined` \| [`Node`](Node.md)

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getFirstToken`](MemberExpression.md#getfirsttoken)

***

### getFullStart()

> **getFullStart**(): `number`

#### Returns

`number`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getFullStart`](MemberExpression.md#getfullstart)

***

### getFullText()

> **getFullText**(`sourceFile`?): `string`

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`string`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getFullText`](MemberExpression.md#getfulltext)

***

### getFullWidth()

> **getFullWidth**(): `number`

#### Returns

`number`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getFullWidth`](MemberExpression.md#getfullwidth)

***

### getLastToken()

> **getLastToken**(`sourceFile`?): `undefined` \| [`Node`](Node.md)

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`undefined` \| [`Node`](Node.md)

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getLastToken`](MemberExpression.md#getlasttoken)

***

### getLeadingTriviaWidth()

> **getLeadingTriviaWidth**(`sourceFile`?): `number`

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`number`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getLeadingTriviaWidth`](MemberExpression.md#getleadingtriviawidth)

***

### getSourceFile()

> **getSourceFile**(): [`SourceFile`](SourceFile.md)

#### Returns

[`SourceFile`](SourceFile.md)

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getSourceFile`](MemberExpression.md#getsourcefile)

***

### getStart()

> **getStart**(`sourceFile`?, `includeJsDocComment`?): `number`

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

##### includeJsDocComment?

`boolean`

#### Returns

`number`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getStart`](MemberExpression.md#getstart)

***

### getText()

> **getText**(`sourceFile`?): `string`

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`string`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getText`](MemberExpression.md#gettext)

***

### getWidth()

> **getWidth**(`sourceFile`?): `number`

#### Parameters

##### sourceFile?

[`SourceFileLike`](SourceFileLike.md)

#### Returns

`number`

#### Inherited from

[`MemberExpression`](MemberExpression.md).[`getWidth`](MemberExpression.md#getwidth)
