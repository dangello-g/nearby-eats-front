import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EmailRecuperacionComponent } from './components/email-recuperacion/email-recuperacion.component';
import { CambiarContraseniaComponent } from './components/cambiar-contrasenia/cambiar-contrasenia.component';
import { ActualizarCuentaComponent } from './components/actualizar-cuenta/actualizar-cuenta.component';
import { CrearLugarComponent } from './components/crear-lugar/crear-lugar.component';
import { GestionNegociosComponent } from './components/gestion-negocios/gestion-negocios.component';
import { DetalleNegocioComponent } from './components/detalle-negocio/detalle-negocio.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';
import { DetalleClienteComponent } from './components/detalle-cliente/detalle-cliente.component';
import { MensajeConfirmacionEmailComponent } from './components/mensaje-confirmacion-email/mensaje-confirmacion-email.component';
import { MensajeConfirmacionContraseniaComponent } from './components/mensaje-confirmacion-contrasenia/mensaje-confirmacion-contrasenia.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'email-recuperacion', component: EmailRecuperacionComponent },
    { path: 'cambiar-contrasenia/:tokenemail', component: CambiarContraseniaComponent },
    {
        path: 'actualizar-cuenta', component: ActualizarCuentaComponent, canActivate: [RolesGuard], data: {
            expectedRole: ["CLIENT"]
        }
    },
    {
        path: 'crear-lugar', component: CrearLugarComponent, canActivate: [RolesGuard], data: {
            expectedRole: ["CLIENT"]
        }
    },
    {
        path: "gestion-negocios", component: GestionNegociosComponent, canActivate: [RolesGuard],
        data: { expectedRole: ["CLIENT"] }
    },
    { path: "detalle-negocio/:id", component: DetalleNegocioComponent },
    { path: "busqueda/:texto", component: BusquedaComponent },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
    { path: 'get-user/:id', component: DetalleClienteComponent},
    { path: 'mensaje-email-recuperacion', component: MensajeConfirmacionEmailComponent},
    { path: 'mensaje-contrasenia-exitosa', component: MensajeConfirmacionContraseniaComponent},
    { path: "**", pathMatch: "full", redirectTo: "" }
];