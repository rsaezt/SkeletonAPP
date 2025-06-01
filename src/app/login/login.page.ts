import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule] // Aquí agregamos IonicModule directamente
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

 login() {
  if (this.validarLogin()) {
    let navigationExtras: NavigationExtras = {
      state: { username: this.username }
    };

    this.router.navigate(['/home'], navigationExtras).then(success => {
      if (!success) {
        console.error("Error al redirigir a Home");
      }
    });
  } else {
    alert("Usuario o contraseña inválidos. Verifica las restricciones.");
  }
}

  validarLogin(): boolean {
    return this.username.length >= 3 && this.username.length <= 8 &&
           /^\d{4}$/.test(this.password); // Validar que la contraseña tenga exactamente 4 números.
  }
}