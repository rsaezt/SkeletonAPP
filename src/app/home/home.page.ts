import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
 // animations: [
   // trigger('fadeInTitle', [
     // state('hidden', style({ opacity: 0, transform: 'translateY(-10px)' })),
      //state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      //transition('hidden => visible', [animate('600ms ease-in-out')])
    //])
  //]
})
export class HomePage {
  username: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: any;
  titleState = 'hidden';
  constructor(private route: ActivatedRoute, private alertController: AlertController) {
    this.username = history.state['username'] || ''; 
    console.log("Username recibido:", this.username); 
  }
  ngOnInit() {
    setTimeout(() => {
      this.titleState = 'visible'; // ✅ Activa la animación al cargar
    }, 200);
  }

  async mostrarInfo() {
    const alert = await this.alertController.create({
      header: 'Información ingresada',
      message: `Nombre: ${this.nombre}, Apellido: ${this.apellido}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  limpiarCampos() {
    document.querySelectorAll('ion-item').forEach(item => {
      item.classList.add('oculto');
    });
    setTimeout(() => {
      this.nombre = '';
      this.apellido = '';
      this.nivelEducacion = '';
      this.fechaNacimiento = null;
      document.querySelectorAll('ion-item').forEach(item => {
        item.classList.remove('oculto');
      });
    }, 500);
    
  }
}