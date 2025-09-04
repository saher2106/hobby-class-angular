import { TestBed } from '@angular/core/testing';
import { ExperienceLiveClassesComponent } from './experience-live-classes.component';

describe('ExperienceLiveClassesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceLiveClassesComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ExperienceLiveClassesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render section heading', () => {
    const fixture = TestBed.createComponent(ExperienceLiveClassesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const heading = compiled.querySelector('h2');
    expect(heading?.textContent).toBe('Experience Live Classes');
    
    const subtitle = compiled.querySelector('.subtitle');
    expect(subtitle?.textContent).toBe('Experience One-to-One Classes with our Professionals');
  });

  it('should render filter buttons with correct text', () => {
    const fixture = TestBed.createComponent(ExperienceLiveClassesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const filters = compiled.querySelectorAll('.filter');
    expect(filters.length).toBe(4);
    
    expect(filters[0].textContent).toBe('Explore All');
    expect(filters[1].textContent).toBe('Most Popular');
    expect(filters[2].textContent).toBe('Trending');
    expect(filters[3].textContent).toBe('Just Added');
  });

  it('should have active class on first filter', () => {
    const fixture = TestBed.createComponent(ExperienceLiveClassesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const firstFilter = compiled.querySelector('.filter');
    expect(firstFilter?.classList.contains('active')).toBe(true);
  });

  it('should render course cards', () => {
    const fixture = TestBed.createComponent(ExperienceLiveClassesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const cards = compiled.querySelectorAll('.card');
    expect(cards.length).toBe(3);
  });

  it('should render course titles and enrollment numbers', () => {
    const fixture = TestBed.createComponent(ExperienceLiveClassesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const titles = compiled.querySelectorAll('.card-content h3');
    const enrollments = compiled.querySelectorAll('.card-content p');
    
    expect(titles[0].textContent).toBe('CALLIGRAPHY');
    expect(titles[1].textContent).toBe('POTTERY');
    expect(titles[2].textContent).toBe('PAINTING');
    
    expect(enrollments[0].textContent).toBe('❤ 2.1K Enrolled');
    expect(enrollments[1].textContent).toBe('❤ 3.4K Enrolled');
    expect(enrollments[2].textContent).toBe('❤ 4.6K Enrolled');
  });

  it('should render carousel navigation buttons', () => {
    const fixture = TestBed.createComponent(ExperienceLiveClassesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const leftBtn = compiled.querySelector('.nav-btn.left');
    const rightBtn = compiled.querySelector('.nav-btn.right');
    
    expect(leftBtn).toBeTruthy();
    expect(rightBtn).toBeTruthy();
    expect(leftBtn?.textContent).toBe('‹');
    expect(rightBtn?.textContent).toBe('›');
  });

  it('should have proper background classes for card images', () => {
    const fixture = TestBed.createComponent(ExperienceLiveClassesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const calligraphyBg = compiled.querySelector('.calligraphy-bg');
    const potteryBg = compiled.querySelector('.pottery-bg');
    const paintingBg = compiled.querySelector('.painting-bg');
    
    expect(calligraphyBg).toBeTruthy();
    expect(potteryBg).toBeTruthy();
    expect(paintingBg).toBeTruthy();
  });

  it('should have courses section with proper styling', () => {
    const fixture = TestBed.createComponent(ExperienceLiveClassesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const coursesSection = compiled.querySelector('.courses');
    expect(coursesSection).toBeTruthy();
  });

  it('should render carousel container', () => {
    const fixture = TestBed.createComponent(ExperienceLiveClassesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const carousel = compiled.querySelector('.carousel');
    const cardsContainer = compiled.querySelector('.cards');
    
    expect(carousel).toBeTruthy();
    expect(cardsContainer).toBeTruthy();
  });
});
