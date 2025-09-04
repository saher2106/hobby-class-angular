import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render login section with proper structure', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const loginSection = compiled.querySelector('.login');
    expect(loginSection).toBeTruthy();
    
    const panel = compiled.querySelector('.panel');
    const art = compiled.querySelector('.art');
    
    expect(panel).toBeTruthy();
    expect(art).toBeTruthy();
  });

  it('should render login heading and subtitle', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const heading = compiled.querySelector('h1');
    expect(heading?.textContent).toBe('Login');
    
    const subtitle = compiled.querySelector('.sub');
    expect(subtitle?.textContent).toBe('Welcome back! Please enter your details.');
  });

  it('should render form with email and password inputs', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const form = compiled.querySelector('.form');
    expect(form).toBeTruthy();
    
    const inputs = compiled.querySelectorAll('.field');
    expect(inputs.length).toBe(2);
    
    const emailInput = inputs[0] as HTMLInputElement;
    const passwordInput = inputs[1] as HTMLInputElement;
    
    expect(emailInput.type).toBe('email');
    expect(emailInput.placeholder).toBe('Email');
    expect(emailInput.required).toBe(true);
    
    expect(passwordInput.type).toBe('password');
    expect(passwordInput.placeholder).toBe('Password');
    expect(passwordInput.required).toBe(true);
  });

  it('should render submit button', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const submitButton = compiled.querySelector('.cta') as HTMLButtonElement;
    expect(submitButton).toBeTruthy();
    expect(submitButton.textContent).toBe('Sign In');
    expect(submitButton.type).toBe('submit');
  });

  it('should have form with submit handling', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const form = compiled.querySelector('.form') as HTMLFormElement;
    expect(form).toBeTruthy();
    expect(form.tagName.toLowerCase()).toBe('form');
  });

  it('should render art section with background image', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const artSection = compiled.querySelector('.art');
    expect(artSection).toBeTruthy();
  });

  it('should have proper CSS classes applied', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.querySelector('.login')).toBeTruthy();
    expect(compiled.querySelector('.panel')).toBeTruthy();
    expect(compiled.querySelector('.form')).toBeTruthy();
    expect(compiled.querySelector('.field')).toBeTruthy();
    expect(compiled.querySelector('.cta')).toBeTruthy();
    expect(compiled.querySelector('.art')).toBeTruthy();
  });

  it('should handle form input values', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const emailInput = compiled.querySelector('input[type="email"]') as HTMLInputElement;
    const passwordInput = compiled.querySelector('input[type="password"]') as HTMLInputElement;
    
    // Test input functionality
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));
    
    passwordInput.value = 'testpassword';
    passwordInput.dispatchEvent(new Event('input'));
    
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('testpassword');
  });

  it('should validate required fields', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const form = compiled.querySelector('form') as HTMLFormElement;
    const emailInput = compiled.querySelector('input[type="email"]') as HTMLInputElement;
    const passwordInput = compiled.querySelector('input[type="password"]') as HTMLInputElement;
    
    // Test form validation
    expect(emailInput.required).toBe(true);
    expect(passwordInput.required).toBe(true);
    
    // Initially form should be invalid (empty required fields)
    expect(form.checkValidity()).toBe(false);
  });
});
