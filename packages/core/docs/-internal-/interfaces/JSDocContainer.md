[**@eslint-react/core**](../../README.md)

***

[@eslint-react/core](../../README.md) / [\<internal\>](../README.md) / JSDocContainer

# Interface: JSDocContainer

## Extends

- [`Node`](Node.md)

## Extended by

- [`Statement`](Statement.md)
- [`TypeParameterDeclaration`](TypeParameterDeclaration.md)
- [`ParameterDeclaration`](ParameterDeclaration.md)
- [`ExportSpecifier`](ExportSpecifier.md)
- [`Identifier`](Identifier-1.md)
- [`ElementAccessExpression`](ElementAccessExpression.md)
- [`EnumMember`](EnumMember.md)
- [`PropertyAccessExpression`](PropertyAccessExpression.md)
- [`ArrowFunction`](ArrowFunction.md)
- [`BinaryExpression`](BinaryExpression-1.md)
- [`CaseClause`](CaseClause.md)
- [`ClassStaticBlockDeclaration`](ClassStaticBlockDeclaration.md)
- [`ConstructorDeclaration`](ConstructorDeclaration.md)
- [`EnumDeclaration`](EnumDeclaration.md)
- [`ExportAssignment`](ExportAssignment.md)
- [`ExportDeclaration`](ExportDeclaration.md)
- [`FunctionExpression`](FunctionExpression-1.md)
- [`GetAccessorDeclaration`](GetAccessorDeclaration.md)
- [`ImportEqualsDeclaration`](ImportEqualsDeclaration.md)
- [`InterfaceDeclaration`](InterfaceDeclaration.md)
- [`JSDocSignature`](JSDocSignature.md)
- [`MethodDeclaration`](MethodDeclaration.md)
- [`ModuleDeclaration`](ModuleDeclaration.md)
- [`NamedTupleMember`](NamedTupleMember.md)
- [`NamespaceExportDeclaration`](NamespaceExportDeclaration.md)
- [`ObjectLiteralExpression`](ObjectLiteralExpression.md)
- [`ParenthesizedExpression`](ParenthesizedExpression.md)
- [`PropertyAssignment`](PropertyAssignment.md)
- [`PropertyDeclaration`](PropertyDeclaration.md)
- [`PropertySignature`](PropertySignature.md)
- [`SemicolonClassElement`](SemicolonClassElement.md)
- [`SetAccessorDeclaration`](SetAccessorDeclaration.md)
- [`ShorthandPropertyAssignment`](ShorthandPropertyAssignment.md)
- [`SpreadAssignment`](SpreadAssignment.md)
- [`TypeAliasDeclaration`](TypeAliasDeclaration.md)
- [`VariableDeclaration`](VariableDeclaration.md)
- [`SignatureDeclarationBase`](SignatureDeclarationBase.md)
- [`ClassLikeDeclarationBase`](ClassLikeDeclarationBase.md)

## Properties

### \_jsdocContainerBrand

> **\_jsdocContainerBrand**: `any`

***

### end

> `readonly` **end**: `number`

#### Inherited from

[`Node`](Node.md).[`end`](Node.md#end)

***

### flags

> `readonly` **flags**: [`NodeFlags`](../enumerations/NodeFlags.md)

#### Inherited from

[`Node`](Node.md).[`flags`](Node.md#flags)

***

### kind

> `readonly` **kind**: [`SyntaxKind`](../enumerations/SyntaxKind.md)

#### Inherited from

[`Node`](Node.md).[`kind`](Node.md#kind)

***

### parent

> `readonly` **parent**: [`Node`](Node.md)

#### Inherited from

[`Node`](Node.md).[`parent`](Node.md#parent)

***

### pos

> `readonly` **pos**: `number`

#### Inherited from

[`Node`](Node.md).[`pos`](Node.md#pos)

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

[`Node`](Node.md).[`forEachChild`](Node.md#foreachchild)

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

[`Node`](Node.md).[`getChildAt`](Node.md#getchildat)

***

### getChildCount()

> **getChildCount**(`sourceFile`?): `number`

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`number`

#### Inherited from

[`Node`](Node.md).[`getChildCount`](Node.md#getchildcount)

***

### getChildren()

> **getChildren**(`sourceFile`?): readonly [`Node`](Node.md)[]

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

readonly [`Node`](Node.md)[]

#### Inherited from

[`Node`](Node.md).[`getChildren`](Node.md#getchildren)

***

### getEnd()

> **getEnd**(): `number`

#### Returns

`number`

#### Inherited from

[`Node`](Node.md).[`getEnd`](Node.md#getend)

***

### getFirstToken()

> **getFirstToken**(`sourceFile`?): `undefined` \| [`Node`](Node.md)

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`undefined` \| [`Node`](Node.md)

#### Inherited from

[`Node`](Node.md).[`getFirstToken`](Node.md#getfirsttoken)

***

### getFullStart()

> **getFullStart**(): `number`

#### Returns

`number`

#### Inherited from

[`Node`](Node.md).[`getFullStart`](Node.md#getfullstart)

***

### getFullText()

> **getFullText**(`sourceFile`?): `string`

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`string`

#### Inherited from

[`Node`](Node.md).[`getFullText`](Node.md#getfulltext)

***

### getFullWidth()

> **getFullWidth**(): `number`

#### Returns

`number`

#### Inherited from

[`Node`](Node.md).[`getFullWidth`](Node.md#getfullwidth)

***

### getLastToken()

> **getLastToken**(`sourceFile`?): `undefined` \| [`Node`](Node.md)

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`undefined` \| [`Node`](Node.md)

#### Inherited from

[`Node`](Node.md).[`getLastToken`](Node.md#getlasttoken)

***

### getLeadingTriviaWidth()

> **getLeadingTriviaWidth**(`sourceFile`?): `number`

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`number`

#### Inherited from

[`Node`](Node.md).[`getLeadingTriviaWidth`](Node.md#getleadingtriviawidth)

***

### getSourceFile()

> **getSourceFile**(): [`SourceFile`](SourceFile.md)

#### Returns

[`SourceFile`](SourceFile.md)

#### Inherited from

[`Node`](Node.md).[`getSourceFile`](Node.md#getsourcefile)

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

[`Node`](Node.md).[`getStart`](Node.md#getstart)

***

### getText()

> **getText**(`sourceFile`?): `string`

#### Parameters

##### sourceFile?

[`SourceFile`](SourceFile.md)

#### Returns

`string`

#### Inherited from

[`Node`](Node.md).[`getText`](Node.md#gettext)

***

### getWidth()

> **getWidth**(`sourceFile`?): `number`

#### Parameters

##### sourceFile?

[`SourceFileLike`](SourceFileLike.md)

#### Returns

`number`

#### Inherited from

[`Node`](Node.md).[`getWidth`](Node.md#getwidth)
