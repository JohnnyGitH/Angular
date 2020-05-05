import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Echo2Service } from '../shared/services/echo-2/echo-2.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-unit-testing',
  templateUrl: './unit-testing.component.html',
  styleUrls: ['./unit-testing.component.css']
})
export class UnitTestingComponent implements OnInit {

  /**
   * Form control for user input
   */
  inputControl = new  FormControl('', RxwebValidators.notEmpty());

  echoResult = '';

  constructor(private echo2Service: Echo2Service, private logger: NGXLogger) {}

  ngOnInit(): void {
  }

  /**
   * This function is what takes the user input and sends it to the Echo Service
   * and use the echo() function. Also, storing the result in echoResult
   */
  submit() {
    if (!this.inputControl) {
      this.echo2Service.echo(this.inputControl.value).subscribe(
        r => (this.echoResult = r),
        e => this.logger.warn('UnitTestComponent.submit: unable to echo', e)
      );
    }
  }
}
