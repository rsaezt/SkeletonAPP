import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

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

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      alert('Login exitoso');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}