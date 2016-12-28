var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
export var AppComponent = (function () {
    function AppComponent(_fb) {
        var _this = this;
        this._fb = _fb;
        this.title = 'app works!';
        this.reactiveForm = this._fb.group({
            firstname: ['', [Validators.required, Validators.minLength(5), this.myFunc]],
            lastname: ['', [Validators.required, Validators.minLength(5)]],
            email: ['', [Validators.required, this.emailValidator]],
            password: ['', [this.passwordValidator, Validators.required, Validators.minLength(5)]]
        });
        this.reactiveForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
    }
    AppComponent.prototype.loginSubmit = function (val) {
        alert(JSON.stringify(val));
    };
    ;
    AppComponent.prototype.onValueChanged = function (data) {
        console.info(data);
    };
    AppComponent.prototype.myFunc = function (control) {
        var value = control.value || '';
        return value.length > 0 ? null : { hideLabel: true };
        // как обрабатывать ошибки? Вывести свой класс или что-то вроде этого
    };
    AppComponent.prototype.emailValidator = function (control) {
        var value = control.value || '';
        var valid = value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return valid ? null : { email: true };
    };
    AppComponent.prototype.passwordValidator = function (control) {
        var value = control.value || '';
        var valid = value.match(/^\d{9}$/);
        return valid ? null : { password: true };
    };
    AppComponent.prototype.regSubmit = function (val) {
        alert(JSON.stringify(val));
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }), 
        __metadata('design:paramtypes', [FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/vodyanov/develop/teach/angular2/ng-login-widget/src/app/app.component.js.map