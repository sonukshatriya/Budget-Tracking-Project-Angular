import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: any;
  registerForm:any;
  activeForm:'login' | 'register' = 'login';

  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar){}
    ngOnInit() {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
      this.registerForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    }

      toggleForm(from: 'login' | 'register') {
        this.activeForm = from;

        
    }

    login() {
      if (this.loginForm.valid) {
        console.log('Login successful', this.loginForm.value);
        this.router.navigate(['budget-tracking/dashboard']);
      } else {
        this.snackBar.open('Inavalid email or password', 'Close', {duration:3000}); 
      }
    }

    register(){
      if (this.registerForm.valid) {
        console.log('Registration successful', this.registerForm.value);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        this.snackBar.open('Inavalid email or password!', 'Close', {duration:3000}); 
      }
    }
  
  }
