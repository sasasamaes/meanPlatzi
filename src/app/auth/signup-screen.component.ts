import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { User } from './user.model';
@Component({
    selector: 'app-signup-screen',
    templateUrl: './signup-screen.component.html'
})
export class SignupScreenComponent implements OnInit{
    signupForm: FormGroup;
    ngOnInit() {
        this.signupForm = new FormGroup({
            first_name: new FormControl(null, Validators.required),
            last_name: new FormControl(null, Validators.required),
            email: new FormControl(null,[
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) //validacion de correo electronico mediante expresion regular
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmit(){
       
        if (this.signupForm.valid){
            const {first_name,last_name,email, password } = this.signupForm.value;
            const user = new User(email,password,first_name,last_name);
            console.log(user);
        }
    }
}