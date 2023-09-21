import { Component } from '@angular/core';
import { User } from '../User.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

onSubmit(): void {
console.log('Formulaire envoyé !!!');
}

  model: User = new User("", "", "", "");
}
