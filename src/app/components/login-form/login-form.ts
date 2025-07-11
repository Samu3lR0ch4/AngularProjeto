import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {

loginService = inject(LoginService)
router = inject(Router)

loginForm = new FormGroup({
nome: new FormControl("", [Validators.required]),
senha: new FormControl("", [Validators.required]),

})

clickLogin(){
const {nome, senha} = this.loginForm.value

if(!this.loginForm.valid || !nome || !senha){
  alert("Existem campos não preenchidos!")
  return
}

this.loginService.login(nome, senha).subscribe({
  next: () => {
    this.router.navigate(["/home"]);
  },
  error: (e) => {
    if (e.status === 401) {
      alert("Usuário ou senha inválidos!");
    } else {
      alert("Erro interno! Tente novamente mais tarde");
    }
  }
});

}
}
