import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render hero section with correct content', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const heroSection = compiled.querySelector('.hero');
    expect(heroSection).toBeTruthy();
    
    const title = compiled.querySelector('h1');
    expect(title?.textContent).toBe('Explore Hobby Classes WITH US');
    
    const subtitle = compiled.querySelector('.sub');
    expect(subtitle?.textContent).toBe('Learn from world\'s best professionals');
  });

  it('should render email input and sign up button', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const emailInput = compiled.querySelector('.email') as HTMLInputElement;
    expect(emailInput).toBeTruthy();
    expect(emailInput.placeholder).toBe('Your Email address here');
    
    const signUpButton = compiled.querySelector('.btn');
    expect(signUpButton?.textContent).toBe('Sign Up');
  });

  it('should render hero image columns', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const hero1 = compiled.querySelector('.hero1');
    const hero2 = compiled.querySelector('.hero2');
    const hero3 = compiled.querySelector('.hero3');
    
    expect(hero1).toBeTruthy();
    expect(hero2).toBeTruthy();
    expect(hero3).toBeTruthy();
  });

  it('should render courses section with correct heading', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const coursesSection = compiled.querySelector('.courses');
    expect(coursesSection).toBeTruthy();
    
    const heading = compiled.querySelector('.courses h2');
    expect(heading?.textContent).toBe('Experience Live Classes');
    
    const subtitle = compiled.querySelector('.subtitle');
    expect(subtitle?.textContent).toBe('Experience One-to-One Classes with our Professionals');
  });

  it('should render filter buttons', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const filters = compiled.querySelectorAll('.filter');
    expect(filters.length).toBe(4);
    
    expect(filters[0].textContent).toBe('Explore All');
    expect(filters[1].textContent).toBe('Most Popular');
    expect(filters[2].textContent).toBe('Trending');
    expect(filters[3].textContent).toBe('Just Added');
    
    // Check that first filter has active class
    expect(filters[0].classList.contains('active')).toBe(true);
  });

  it('should render course cards with correct content', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const cards = compiled.querySelectorAll('.card');
    expect(cards.length).toBe(3);
    
    // Check course titles
    const titles = compiled.querySelectorAll('.card-content h3');
    expect(titles[0].textContent).toBe('CALLIGRAPHY');
    expect(titles[1].textContent).toBe('POTTERY');
    expect(titles[2].textContent).toBe('PAINTING');
    
    // Check enrollment numbers
    const enrollments = compiled.querySelectorAll('.card-content p');
    expect(enrollments[0].textContent).toBe('❤ 2.1K Enrolled');
    expect(enrollments[1].textContent).toBe('❤ 3.4K Enrolled');
    expect(enrollments[2].textContent).toBe('❤ 4.6K Enrolled');
  });

  it('should render carousel navigation buttons', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const leftBtn = compiled.querySelector('.nav-btn.left');
    const rightBtn = compiled.querySelector('.nav-btn.right');
    
    expect(leftBtn).toBeTruthy();
    expect(rightBtn).toBeTruthy();
    expect(leftBtn?.textContent).toBe('‹');
    expect(rightBtn?.textContent).toBe('›');
  });

  it('should have proper background classes for cards', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const calligraphyBg = compiled.querySelector('.calligraphy-bg');
    const potteryBg = compiled.querySelector('.pottery-bg');
    const paintingBg = compiled.querySelector('.painting-bg');
    
    expect(calligraphyBg).toBeTruthy();
    expect(potteryBg).toBeTruthy();
    expect(paintingBg).toBeTruthy();
  });

  it('should render note text correctly', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const note = compiled.querySelector('.note');
    expect(note?.textContent).toBe('Keep up to date with new events and releases');
  });
});
