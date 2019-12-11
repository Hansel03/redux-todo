import { Component, OnInit } from "@angular/core";
import * as fromFiltro from "../../filter/filter.actions";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducer";
import { Todo } from "../model/todo.model";

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styles: []
})
export class TodoFooterComponent implements OnInit {
  public filtrosValidos: fromFiltro.filtrosValidos[];
  public filtroActual: fromFiltro.filtrosValidos;
  public pendientes: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.filtrosValidos = ["Todos", "Completados", "Pendientes"];

    this.store.subscribe(state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  public cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos) {
    const accion = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  public contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }
}
