import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loginForm!: FormGroup;

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(): void {
    this.model.username = this.loginForm.value.username;
    this.model.password = this.loginForm.value.password;

    
      this.accountService.login(this.model).subscribe({
        next: _ => this.router.navigateByUrl("/pokemons"),
        error: error => this.toastr.error(error.error)
      })
    
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
