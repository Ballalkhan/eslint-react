import type { _ } from "@eslint-react/eff";
import type { TSESTree } from "@typescript-eslint/types";
import * as AST from "@eslint-react/ast";
import { AST_NODE_TYPES as T } from "@typescript-eslint/types";
import { isUseEffectCallLoose } from "./hook-is";

export function isFunctionOfUseEffectSetup(node: TSESTree.Node | _) {
  if (node == null) return false;
  return node.parent?.type === T.CallExpression
    && node.parent.callee !== node
    && node.parent.callee.type === T.Identifier
    && node.parent.arguments.at(0) === node
    && isUseEffectCallLoose(node.parent);
}

export function isFunctionOfUseEffectCleanup(node: TSESTree.Node | _) {
  if (node == null) return false;
  const pReturn = AST.findParentNode(node, AST.is(T.ReturnStatement));
  const pFaunction = AST.findParentNode(node, AST.isFunction);
  const pFunctionOfReturn = AST.findParentNode(pReturn, AST.isFunction);
  if (pFaunction !== pFunctionOfReturn) return false;
  return isFunctionOfUseEffectSetup(pFaunction);
}
