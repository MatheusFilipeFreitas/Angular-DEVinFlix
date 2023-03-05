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
      email: new FormControl(user.email),
      senha: new FormControl(user.password)
    })
  }

  createLocalStorage(booleanValue: boolean) {
    localStorage.setItem('logged', `${booleanValue}`);
  }

  getUsersList() {
    this.userService.getUsers().subscribe((users) => {
      this.listUsers = users;
    });
  }

  findUser(form: FormGroup) {
    // console.log(this.formUser.value.email);
    this.listUsers.find((user) => {
      if(user.email === form.value.email) {
        this.user = user;
      }
    });

  }

  correctPassword(form: FormGroup, user: User) {
    if(user.password === form.value.senha) {
      return true;
    }
    return false;
  }

  onSubmit() {
    // console.log(this.formUser.value);
    this.findUser(this.formUser);
    // console.log(this.user);
    if(this.correctPassword(this.formUser, this.user)) {
      this.createLocalStorage(true);
      this.router.navigate(['/']);
    }else{
      alert('password incorrect');
      this.createLocalStorage(false);
    }
  }

}
