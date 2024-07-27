import { Routes } from "@angular/router";
import { UsuarioComponent } from "../components/usuario/usuario.component";
import { TablaComponent } from "../components/usuario/tabla/tabla.component";

export const ROUTES: Routes=[
    {path: '', component: UsuarioComponent},
    {path: 'list-usuario', component: TablaComponent}
] 