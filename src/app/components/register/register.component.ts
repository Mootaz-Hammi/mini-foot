import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  phone=""
  url="assets/add.png"
  fn=""
  text=""
  

  myForm:FormGroup;
  
  constructor(){
    this.myForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      phoneNumber:new FormControl(''),
      email:new FormControl('')
    })
  }

  selectFile(event:any){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.url = event.target.result
      }

    }
  }

  
  register(){
    var password =this.myForm.get('password')?.value
    
    var confirmPassword =this.myForm.get('confirmPassword')?.value
    if(password !== confirmPassword || (password=="")){
      alert("Verif password")  
    }else alert("fasle")
  }
  test(){
    alert(this.myForm.get('firstName')?.value);
    alert(this.myForm.get('lastName')?.value);
    alert(this.myForm.get('email')?.value);
    alert(this.myForm.get('phoneNumber')?.value);
    alert(this.myForm.get('password')?.value);
    alert(this.myForm.get('confirmPassword')?.value);
  }
}
