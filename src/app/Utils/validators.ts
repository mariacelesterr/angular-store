import { AbstractControl } from '@angular/forms'

export class MyValidaytors {
    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        console.log(value)
        if(value > 10000){
            return {price_invalid: true}

        }
        else{
            return null;
        }
    }
}