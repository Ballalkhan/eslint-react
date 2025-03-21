[**@eslint-react/shared**](../../README.md)

***

[@eslint-react/shared](../../README.md) / [\<internal\>](../README.md) / RuleWithMetaAndName

# Interface: RuleWithMetaAndName\<Options, MessageIds, Docs\>

## Extends

- [`RuleCreateAndOptions`](RuleCreateAndOptions.md)\<`Options`, `MessageIds`\>

## Type Parameters

### Options

`Options` *extends* readonly `unknown`[]

### MessageIds

`MessageIds` *extends* `string`

### Docs

`Docs` = `unknown`

## Properties

### create()

> **create**: (`context`, `optionsWithDefault`) => [`RuleListener`](../type-aliases/RuleListener.md)

#### Parameters

##### context

[`Readonly`](../type-aliases/Readonly.md)\<[`RuleContext`](RuleContext.md)\<`MessageIds`, `Options`\>\>

##### optionsWithDefault

[`Readonly`](../type-aliases/Readonly.md)\<`Options`\>

#### Returns

[`RuleListener`](../type-aliases/RuleListener.md)

#### Inherited from

[`RuleCreateAndOptions`](RuleCreateAndOptions.md).[`create`](RuleCreateAndOptions.md#create)

***

### defaultOptions

> **defaultOptions**: [`Readonly`](../type-aliases/Readonly.md)\<`Options`\>

#### Inherited from

[`RuleCreateAndOptions`](RuleCreateAndOptions.md).[`defaultOptions`](RuleCreateAndOptions.md#defaultoptions)

***

### meta

> **meta**: [`NamedCreateRuleMeta`](../type-aliases/NamedCreateRuleMeta.md)\<`MessageIds`, `Docs`, `Options`\>

***

### name

> **name**: `string`
