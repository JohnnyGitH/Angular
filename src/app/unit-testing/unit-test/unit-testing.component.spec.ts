import { UnitTestingComponent } from './unit-testing.component';
import { Spectator, createComponentFactory, SpyObject } from '@ngneat/spectator';
import { UppercasePipe } from '../shared/pipes/uppercase/uppercase.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { LoggerTestingModule } from 'ngx-logger/testing'
import { Echo2Service } from '../shared/services/echo-2/echo-2.service';
import { of, throwError } from 'rxjs';
import * as faker from 'faker';

/**
 * The main point of this test file is to show how to test a component that depends on others
 * for more information on testing service:
 */
describe('UnitTestingComponent', () => {
  // Need to access the component to Test which in our case is UnitTestingComponent
  let component: UnitTestingComponent;
  // We need to access the target component and its dependencies
  let spectator: Spectator<UnitTestingComponent>;
  // function call that extends the basic Angular Testing Module Options
  const createComponent = createComponentFactory({
    component: UnitTestingComponent,
    imports: [ LoggerTestingModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule],
    declarations: [UppercasePipe],
    mocks: [ Echo2Service ] // Providers that will automatically be mocked
  });

  beforeEach(() => {
    // Create a new instance of the component and all its dependencies before each test is run
    spectator = createComponent();
    spectator.detectChanges();
    component = spectator.component;
  });

    /**
     *  All unit tests for the same method should be grouped into one describe
     *  and description of the describe should be the method name
     */
  describe('startEcho', () => {
    // Setup injection
    let mockEcho: SpyObject<Echo2Service>;

    beforeEach(() => {
      mockEcho = spectator.inject(Echo2Service);
    });

    // The test description should accurately reflect what this test is testing
    it('should not update echo result if input is invalid', () => {
      // Input for the target method should be stored in variable called input,
      // If more than one inputs are needed, the variable names should start with input
      const input = null;
      const expected = '';

      // Substitute return value of the dependency of target method
      mockEcho.echo.and.returnValue(of(faker.random.word()));

      component.inputControl.setValue(input);
      component.submit();

      const actual = component.echoResult;

      expect(actual).toEqual(expected);
    });

    // The test description should accurately reflect what this test is testing
    // it('should update echo result if input is valid string', () => {
    //   // Input for the target method should be stored in cariables calledi nput,
    //   // if there are more then start it with input
    //   const input = faker.random.word();

    //   // Substitute return value of the dependecy of target method
    //   mockEcho.echo.and.returnValue(of(input));

    //   // Set local variable to ->
    //   component.inputControl.setValue(input);
    //   // Run this function
    //   component.submit();
    //   // actual value set in setValue step.
    //   const actual = component.echoResult;
    //   // Expect actual to equal the generated word
    //   expect(actual).toEqual(input);
    // });
  });
});
