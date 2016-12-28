import {Component, ElementRef } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';


  public loginSubmit(val) {
    alert(JSON.stringify(val));
  };

  public reactiveForm: FormGroup;

  public constructor(private _fb: FormBuilder) {
    this.reactiveForm = this._fb.group({
      firstname: ['', [Validators.required, Validators.minLength(5), this.myFunc]],
      lastname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [ Validators.required, this.emailValidator]],
      password: ['', [this.passwordValidator, Validators.required, Validators.minLength(5)]]
    });

    this.reactiveForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  public onValueChanged(data) {
    console.info(data);
  }

  public myFunc(control: FormControl): {[key: string]: boolean} {
    const value = control.value || '';
    return value.length > 0 ? null : {hideLabel: true}
    // как обрабатывать ошибки? Вывести свой класс или что-то вроде этого
  }

  public emailValidator(control: FormControl): {[key: string]: boolean} {
    const value = control.value || '';
    const valid = value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    return valid ? null : {email: true}
  }

  public passwordValidator(control: FormControl): {[key: string]: boolean} {
    const value = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : {password: true}
  }

  public regSubmit(val) {
    alert(JSON.stringify(val));
  }
}
