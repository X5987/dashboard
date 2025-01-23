import { Component, inject, linkedSignal, signal } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { InputTextComponent, LoaderDirective } from '@design-system';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatCardContent,
    InputTextComponent,
    ReactiveFormsModule,
    MatButton,
    RouterModule,
    LoaderDirective,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);
  typeInput = linkedSignal(() => {
    return this.showPassword() ? 'text' : 'password';
  });
  showPassword = signal(false);
  message = signal('');
  loading = signal(false);
  // Vous êtes déconnecté. todo a implementer pour le logout

  loginForm = this.fb.group({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  login() {
    const login: string = this.loginForm.controls.username.value!;
    const pass: string = this.loginForm.controls.password.value!;
    this.message.set('Tentative de connexion.');
    this.loading.set(true);

    this.authService.login(login, pass).subscribe((isLoggednIn) => {
      if (isLoggednIn) {
        this.router.navigate(['/home']);
      } else {
        this.loginForm.reset();
        this.loading.set(false);
        this.message.set('Identifiants incorrects.');
      }
    });
  }

  typePassword(showPassword: boolean) {
    this.showPassword.set(!showPassword);
  }
}
