import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUserComponent } from './create-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUserComponent],
      imports: [ReactiveFormsModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('Form Initialization', () => {
    it('should initialize the form with default controls', () => {
      expect(component.userForm.contains('name')).toBeTrue();
      expect(component.userForm.contains('email')).toBeTrue();
      expect(component.userForm.contains('mobile')).toBeTrue();
      expect(component.userForm.contains('password')).toBeTrue();
      expect(component.userForm.contains('address')).toBeTrue();
      expect(component.userForm.contains('type')).toBeTrue();
      expect(component.userForm.contains('cards')).toBeTrue();
    });

    it('should initialize address as FormGroup with city, state, pin', () => {
      const address = component.userForm.get('address');
      expect(address?.get('city')).toBeTruthy();
      expect(address?.get('state')).toBeTruthy();
      expect(address?.get('pin')).toBeTruthy();
    });
  });

  describe('Name Field Validation', () => {
    it('should mark name as required', () => {
      const control = component.userForm.get('name');
      control?.setValue('');
      expect(control?.hasError('required')).toBeTrue();
    });

    it('should fail if name is less than 6 characters', () => {
      const control = component.userForm.get('name');
      control?.setValue('John');
      expect(control?.hasError('minlength')).toBeTrue();
    });

    it('should fail if name exceeds 12 characters', () => {
      const control = component.userForm.get('name');
      control?.setValue('VeryLongUsername');
      expect(control?.hasError('maxlength')).toBeTrue();
    });

    it('should pass with valid name', () => {
      const control = component.userForm.get('name');
      control?.setValue('JohnDoe');
      expect(control?.valid).toBeTrue();
    });
  });

  describe('Email Field Validation', () => {
    it('should mark email as required', () => {
      const control = component.userForm.get('email');
      control?.setValue('');
      expect(control?.hasError('required')).toBeTrue();
    });

    it('should fail if email is less than 12 characters', () => {
      const control = component.userForm.get('email');
      control?.setValue('a@b.com');
      expect(control?.hasError('minlength')).toBeTrue();
    });

    it('should fail if email exceeds 20 characters', () => {
      const control = component.userForm.get('email');
      control?.setValue('averylongemailaddress@tcs.com');
      expect(control?.hasError('maxlength')).toBeTrue();
    });

    it('should fail if email is not TCS email (custom validator)', () => {
      const control = component.userForm.get('email');
      control?.setValue('user@gmail.com');
      expect(control?.hasError('tcsMail')).toBeTrue();
    });

    it('should pass with a valid TCS email', () => {
      const control = component.userForm.get('email');
      control?.setValue('employee@tcs.com');
      expect(control?.valid).toBeTrue();
    });
  });

  describe('Dynamic Fields: busFee and hostelFee', () => {
    it('should add busFee control when type is dayScholar', () => {
      component.userForm.get('type')?.setValue('dayScholar');
      fixture.detectChanges();
      expect(component.userForm.contains('busFee')).toBeTrue();
      expect(component.userForm.contains('hostelFee')).toBeFalse();
    });

    it('should add hostelFee control when type is residential', () => {
      component.userForm.get('type')?.setValue('residential');
      fixture.detectChanges();
      expect(component.userForm.contains('hostelFee')).toBeTrue();
      expect(component.userForm.contains('busFee')).toBeFalse();
    });
  });

  describe('Card FormArray Handling', () => {
    it('should add a new card to the FormArray', () => {
      component.addCard();
      expect(component.CardsFormArray.length).toBe(1);
    });

    it('should remove a card from the FormArray', () => {
      component.addCard();
      component.addCard();
      expect(component.CardsFormArray.length).toBe(2);
      component.deleteCard(0);
      expect(component.CardsFormArray.length).toBe(1);
    });

    it('each card should have number, name, expiry, cvv', () => {
      component.addCard();
      const cardGroup = component.CardsFormArray.at(0);
      expect(cardGroup.get('number')).toBeTruthy();
      expect(cardGroup.get('name')).toBeTruthy();
      expect(cardGroup.get('expiry')).toBeTruthy();
      expect(cardGroup.get('cvv')).toBeTruthy();
    });
  });

  describe('Form Submission', () => {
    it('should log form data on submit', () => {
      spyOn(console, 'log');
      component.submit();
      expect(console.log).toHaveBeenCalledWith(component.userForm);
    });
  });
});
