import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render HobbyClass brand', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const brandElement = compiled.querySelector('.brand');
    expect(brandElement?.textContent).toBe('HobbyClass');
  });

  it('should render navigation links', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.links a');
    
    expect(links.length).toBe(3);
    expect(links[0].textContent).toBe('Explore Classes');
    expect(links[1].textContent).toBe('Mentor Details');
    expect(links[2].textContent).toBe('Login');
  });

  it('should have correct routerLink attributes', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.links a');
    
    expect(links[0].getAttribute('routerLink')).toBe('/explore');
    expect(links[1].getAttribute('routerLink')).toBe('/mentor-details');
    expect(links[2].getAttribute('routerLink')).toBe('/login');
  });

  it('should have proper CSS classes applied', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.querySelector('header.nav')).toBeTruthy();
    expect(compiled.querySelector('.brand')).toBeTruthy();
    expect(compiled.querySelector('.links')).toBeTruthy();
  });

  it('should have proper styling for navigation', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('header.nav') as HTMLElement;
    
    expect(header).toBeTruthy();
    expect(header.style.background || getComputedStyle(header).backgroundColor).toBeTruthy();
  });
});
