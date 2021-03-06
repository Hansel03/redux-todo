import {
  Acciones,
  AGREGAR_TODO,
  TOGGLE_TODO,
  EDITAR_TODO,
  BORRAR_TODO,
  TOOGLE_ALL_TODO,
  LIMPIAR_TODO
} from "./todo.actions";
import { Todo } from "./model/todo.model";

const todo1 = new Todo("Vencer a Thonos");
const todo2 = new Todo("Salvar el mundo");

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(state = estadoInicial, action: Acciones): Todo[] {
  switch (action.type) {
    case AGREGAR_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    case TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });

    case EDITAR_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto
          };
        } else {
          return todoEdit;
        }
      });

    case BORRAR_TODO:
      return state.filter(todoEdit => todoEdit.id !== action.id);

    case TOOGLE_ALL_TODO:
      return state.map(todoEdit => {
        return {
          ...todoEdit,
          completado: action.completado
        };
      });

    case LIMPIAR_TODO:
      return state.filter(todos => !todos.completado);

    default:
      return state;
  }
}
