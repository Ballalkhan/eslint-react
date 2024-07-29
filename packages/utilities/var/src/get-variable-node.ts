import { NodeType } from "@eslint-react/ast";
import { F, O } from "@eslint-react/tools";
import type { Variable } from "@typescript-eslint/scope-manager";
import { DefinitionType } from "@typescript-eslint/scope-manager";
import type { TSESTree } from "@typescript-eslint/types";

import { getVariableDef } from "./get-variable-def";

/**
 * Get the init node of the nth definition of a variable
 * @param at The index number of def in defs
 * @returns A function that takes a variable and returns the init node of the nth definition of that variable
 */
export function getVariableNode(at: number) {
  return (
    variable: Variable,
  ): O.Option<
    | TSESTree.ClassDeclaration
    | TSESTree.ClassDeclarationWithName
    | TSESTree.ClassDeclarationWithOptionalName
    | TSESTree.Expression
    | TSESTree.FunctionDeclaration
    | TSESTree.FunctionDeclarationWithName
    | TSESTree.FunctionDeclarationWithOptionalName
  > => {
    return F.pipe(
      O.some(variable),
      O.flatMap(getVariableDef(at)),
      O.flatMapNullable(def => {
        if (
          true
          && "init" in def.node
          && def.node.init
          && !("declarations" in def.node.init)
        ) {
          return def.node.init;
        }
        if (
          true
          && def.type === DefinitionType.FunctionName
          && def.node.type === NodeType.FunctionDeclaration
        ) {
          return def.node;
        }
        if (
          true
          && def.type === DefinitionType.ClassName
          && def.node.type === NodeType.ClassDeclaration
        ) {
          return def.node;
        }
        return null;
      }),
    );
  };
}
