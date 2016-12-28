import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';


  loginSubmit(val) {
    alert(JSON.stringify(val));
  }



  public reactForm: FormGroup;

  public constructor(private _fb: FormBuilder) {
    this.reactForm = this._fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [this.passwordValidator]],
      password: ['', [this.passwordValidator, Validators.required, Validators.minLength(5)]]
    })
  }

  public emailValidator(control:FormControl):{[key:string]:boolean}{
    const value = control.value || '';
    const valid = value.match(/\S+@\S+\.\S+/);
    return valid ? null : {email:true}
  }

  public passwordValidator(control:FormControl):{[key:string]:boolean}{
    const value = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : {password:true}
  }

  regSubmit(val) {
    alert(JSON.stringify(val));
  }
}
