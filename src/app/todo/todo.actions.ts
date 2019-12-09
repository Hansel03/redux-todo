import { Action } from "@ngrx/store";

export const AGREGAR_TODO = "[TODO] Agregar todo";

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;
  constructor(public text: string) {}
}

export type Acciones = AgregarTodoAction;
