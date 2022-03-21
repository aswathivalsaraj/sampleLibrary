import { Component } from '@angular/core';
import myData from '@assets/mockData/sample.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-library';
  public formData: any;
  constructor(){
    this.formData = myData.views.sections[0];
  } 

  triggerEvent(field: any) {
      if(field.methodName && this[field.methodName]) {
        this[field.methodName](field);
      }
  }
  validateLogin(...field){
    console.log("INNNNNNNNNNNNN", field)
  }
  checkBoxChecked(...field) {
    console.log("Checked")
  }
  radioSelected(...field) {
    console.log("Radio selected")
  }
  dateSelected(...field) {
    console.log("dateSelected selected", ...field)
  }
  
 /* onBlurMethod(...field) {
    console.log("Blur method invoked")
  }
  onKeyPressMethod(...field) {
    console.log("onKeyPressMethod method invoked")
  }
  onKeyDownMethod(...field) {
    console.log("onKeyDownMethod invoked")
  }
  onKeyUpMethod(...field) {
    console.log("onKeyUpMethod method invoked")
  } */
}
