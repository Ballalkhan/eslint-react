[**@eslint-react/shared**](../../README.md)

***

[@eslint-react/shared](../../README.md) / [\<internal\>](../README.md) / NoSubstitutionTemplateLiteral

# Interface: NoSubstitutionTemplateLiteral

## Extends

- [`LiteralExpression`](LiteralExpression.md).[`TemplateLiteralLikeNode`](TemplateLiteralLikeNode.md).[`Declaration`](Declaration.md)

## Properties

### \_declarationBrand

> **\_declarationBrand**: `any`

#### Inherited from

[`Declaration`](Declaration.md).[`_declarationBrand`](Declaration.md#_declarationbrand)

***

### \_expressionBrand

> **\_expressionBrand**: `any`

#### Inherited from

[`LiteralExpression`](LiteralExpression.md).[`_expressionBrand`](LiteralExpression.md#_expressionbrand)

***

### \_leftHandSideExpressionBrand

> **\_leftHandSideExpressionBrand**: `any`

#### Inherited from

[`LiteralExpression`](LiteralExpression.md).[`_leftHandSideExpressionBrand`](LiteralExpression.md#_lefthandsideexpressionbrand)

***

### \_literalExpressionBrand

> **\_literalExpressionBrand**: `any`

#### Inherited from

[`LiteralExpression`](LiteralExpression.md).[`_literalExpressionBrand`](LiteralExpression.md#_literalexpressionbrand)

***

### \_memberExpressionBrand

> **\_memberExpressionBrand**: `any`

#### Inherited from

[`LiteralExpression`](LiteralExpression.md).[`_memberExpressionBrand`](LiteralExpression.md#_memberexpressionbrand)

***

### \_primaryExpressionBrand

> **\_primaryExpressionBrand**: `any`

#### Inherited from

[`LiteralExpression`](LiteralExpression.md).[`_primaryExpressionBrand`](LiteralExpression.md#_primaryexpressionbrand)

***

### \_unaryExpressionBrand

> **\_unaryExpressionBrand**: `any`

#### Inherited from

[`LiteralExpression`](LiteralExpression.md).[`_unaryExpressionBrand`](LiteralExpression.md#_unaryexpressionbrand)

***

### \_updateExpressionBrand

> **\_updateExpressionBrand**: `any`

#### Inherited from

[`LiteralExpression`](LiteralExpression.md).[`_updateExpressionBrand`](LiteralExpression.md#_updateexpressionbrand)

***

### end

> `readonly` **end**: `number`

#### Inherited from

[`Declaration`](Declaration.md).[`end`](Declaration.md#end)

***

### flags

> `readonly` **flags**: [`NodeFlags`](../enumerations/NodeFlags.md)

#### Inherited from

[`Declaration`](Declaration.md).[`flags`](Declaration.md#flags)

***

### hasExtendedUnicodeEscape?

> `optional` **hasExtendedUnicodeEscape**: `boolean`

#### Inherited from

[`TemplateLiteralLikeNode`](TemplateLiteralLikeNode.md).[`hasExtendedUnicodeEscape`](TemplateLiteralLikeNode.md#hasextendedunicodeescape)

***

### isUnterminated?

> `optional` **isUnterminated**: `boolean`

#### Inherited from

[`TemplateLiteralLikeNode`](TemplateLiteralLikeNode.md).[`isUnterminated`](TemplateLiteralLikeNode.md#isunterminated)

***

### kind

> `readonly` **kind**: [`NoSubstitutionTemplateLiteral`](../enumerations/SyntaxKind.md#nosubstitutiontemplateliteral)

#### Overrides

[`Declaration`](Declaration.md).[`kind`](Declaration.md#kind)

***

### parent

> `readonly` **parent**: [`Node`](Node.md)

#### Inherited from

[`Declaration`](Declaration.md).[`parent`](Declaration.md#parent)

***

### pos

> `readonly` **pos**: `number`

#### Inherited from

[`Declaration`](Declaration.md).[`pos`](Declaration.md#pos)

***

### rawText?

> `optional` **rawText**: `string`

#### Inherited from

[`TemplateLiteralLikeNode`](TemplateLiteralLikeNode.md).[`rawText`](TemplateLiteralLikeNode.md#rawtext)

***

### text

> **text**: `string`

#### Inherited from

[`TemplateLiteralLikeNode`](TemplateLiteralLikeNode.md).[`text`](TemplateLiteralLikeNode.md#text)

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

[`Declaration`](Declaration.md).[`forEachChild`](Declaration.md#foreachchild)

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

[`Declaration`](Declaration.md).[`getChildAt`](Declaration.md#getchildat)

***

### getChildCount()

> **getChildCount**(`sourceFile`?): `number`

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`number`

#### Inherited from

[`Declaration`](Declaration.md).[`getChildCount`](Declaration.md#getchildcount)

***

### getChildren()

> **getChildren**(`sourceFile`?): readonly [`Node`](Node.md)[]

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

readonly [`Node`](Node.md)[]

#### Inherited from

[`Declaration`](Declaration.md).[`getChildren`](Declaration.md#getchildren)

***

### getEnd()

> **getEnd**(): `number`

#### Returns

`number`

#### Inherited from

[`Declaration`](Declaration.md).[`getEnd`](Declaration.md#getend)

***

### getFirstToken()

> **getFirstToken**(`sourceFile`?): `undefined` \| [`Node`](Node.md)

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`undefined` \| [`Node`](Node.md)

#### Inherited from

[`Declaration`](Declaration.md).[`getFirstToken`](Declaration.md#getfirsttoken)

***

### getFullStart()

> **getFullStart**(): `number`

#### Returns

`number`

#### Inherited from

[`Declaration`](Declaration.md).[`getFullStart`](Declaration.md#getfullstart)

***

### getFullText()

> **getFullText**(`sourceFile`?): `string`

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`string`

#### Inherited from

[`Declaration`](Declaration.md).[`getFullText`](Declaration.md#getfulltext)

***

### getFullWidth()

> **getFullWidth**(): `number`

#### Returns

`number`

#### Inherited from

[`Declaration`](Declaration.md).[`getFullWidth`](Declaration.md#getfullwidth)

***

### getLastToken()

> **getLastToken**(`sourceFile`?): `undefined` \| [`Node`](Node.md)

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`undefined` \| [`Node`](Node.md)

#### Inherited from

[`Declaration`](Declaration.md).[`getLastToken`](Declaration.md#getlasttoken)

***

### getLeadingTriviaWidth()

> **getLeadingTriviaWidth**(`sourceFile`?): `number`

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`number`

#### Inherited from

[`Declaration`](Declaration.md).[`getLeadingTriviaWidth`](Declaration.md#getleadingtriviawidth)

***

### getSourceFile()

> **getSourceFile**(): [`SourceFile`](SourceFile.md)

#### Returns

[`SourceFile`](SourceFile.md)

#### Inherited from

[`Declaration`](Declaration.md).[`getSourceFile`](Declaration.md#getsourcefile)

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

[`Declaration`](Declaration.md).[`getStart`](Declaration.md#getstart)

***

### getText()

> **getText**(`sourceFile`?): `string`

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`string`

#### Inherited from

[`Declaration`](Declaration.md).[`getText`](Declaration.md#gettext)

***

### getWidth()

> **getWidth**(`sourceFile`?): `number`

#### Parameters

##### sourceFile?

[`SourceFileLike`](SourceFileLike.md)

#### Returns

`number`

#### Inherited from

[`Declaration`](Declaration.md).[`getWidth`](Declaration.md#getwidth)
