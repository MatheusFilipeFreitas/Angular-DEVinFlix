import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  formUser!: FormGroup;
  listUsers: User[] = [];
  // emailUser: String = '';
  // senhaUser: String = '';

  constructor(private userService: UserService, private router: Router){

  }

  ngOnInit(): void {
    this.getUsersList();
    this.createForm(new User());
    this.createLocalStorage(false);
  }


  createForm(user: User) {
    this.formUser = new FormGroup({
      email: new FormControl(user.email, [
        Validators.required,
        Validators.minLength(4)
      ]),
      senha: new FormControl(user.password)
    })
  }

  get email() {
    return this.formUser.get('email')!;
  }

  get senha() {
    return this.formUser.get('senha')!;
  }

  createLocalStorage(booleanValue: boolean) {
    localStorage.setItem('logged', `${booleanValue}`);
  }

  getUsersList() {
    this.userService.getUsers().subscribe((users) => {
      this.listUsers = users;
    });
  }

  findUser() {
    this.listUsers.find((user) => {
      if(user.email === this.email.value) {
        this.user = user;
      }
    });

    if(this.user.email === undefined && this.email.value === null) {
      this.email.setErrors({'required': true});
      this.email.markAsTouched();
      return false;
    }else if(this.user.email === undefined && this.email.value != null) {
      this.email.setErrors({'invalid': true});
      this.email.markAsTouched();
      return false;
    }else{
      return true;
    }
  }

  correctPassword() {
    if(this.senha.value === null) {
      this.senha.setErrors({'required': true});
      this.senha.markAsTouched();
    }else{
      if(this.user.password === this.senha.value) {
        return true;
      }else{
        this.senha.setErrors({'invalid': true});
        this.senha.markAsTouched();
        return false;
      }
    }
    return false;

  }

  onSubmit() {
    if(this.findUser()){
      if(this.correctPassword()) {
        this.createLocalStorage(true);
        this.router.navigate(['/']);
      }else{
        this.createLocalStorage(false);
      }
    }else{
      this.createLocalStorage(false);
    }
  }
}
