import { Component, OnInit } from "@angular/core";
import * as fromFiltro from "../../filter/filter.actions";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducer";

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styles: []
})
export class TodoFooterComponent implements OnInit {
  public filtrosValidos: fromFiltro.filtrosValidos[];
  public filtroActual: fromFiltro.filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.filtrosValidos = ["Todos", "Completados", "Pendientes"];

    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
    });
  }

  public cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos) {
    const accion = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }
}
