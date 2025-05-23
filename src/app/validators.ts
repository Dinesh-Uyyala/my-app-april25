import { AbstractControl } from "@angular/forms";
export function tcsMail(control:AbstractControl){
    if(control.value.includes('@tcs.com')){
        return null;
    }else{
        return {'tcsMail':'Please use TCS mail only'}
    }

}