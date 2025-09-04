import { TestBed } from '@angular/core/testing';
import { MentorDetailsComponent } from './mentor-details.component';

describe('MentorDetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentorDetailsComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MentorDetailsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render mentor section with proper structure', () => {
    const fixture = TestBed.createComponent(MentorDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const mentorSection = compiled.querySelector('.mentor');
    expect(mentorSection).toBeTruthy();
    
    const header = compiled.querySelector('.header');
    const profile = compiled.querySelector('.profile');
    
    expect(header).toBeTruthy();
    expect(profile).toBeTruthy();
  });

  it('should render header with correct title and subtitle', () => {
    const fixture = TestBed.createComponent(MentorDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const title = compiled.querySelector('.header h1');
    expect(title?.textContent).toBe('Mentor Details');
    
    const subtitle = compiled.querySelector('.header .sub');
    expect(subtitle?.textContent).toBe('Learn from world\u2019s best professionals');
  });

  it('should render mentor profile information', () => {
    const fixture = TestBed.createComponent(MentorDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const photo = compiled.querySelector('.photo');
    expect(photo).toBeTruthy();
    
    const info = compiled.querySelector('.info');
    expect(info).toBeTruthy();
  });

  it('should display mentor name and role', () => {
    const fixture = TestBed.createComponent(MentorDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const name = compiled.querySelector('.info h2');
    expect(name?.textContent).toBe('Jane Doe');
    
    const role = compiled.querySelector('.role');
    expect(role?.textContent).toBe('Master Calligrapher');
  });

  it('should display mentor description', () => {
    const fixture = TestBed.createComponent(MentorDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const description = compiled.querySelector('.desc');
    expect(description?.textContent).toBe('15+ years teaching experience, award-winning artist, and passionate educator.');
  });

  it('should render mentor statistics', () => {
    const fixture = TestBed.createComponent(MentorDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const stats = compiled.querySelectorAll('.stat');
    expect(stats.length).toBe(3);
    
    // Check enrolled stat
    const enrolledStat = stats[0];
    expect(enrolledStat.querySelector('strong')?.textContent).toBe('2.1K');
    expect(enrolledStat.querySelector('span')?.textContent).toBe('Enrolled');
    
    // Check rating stat
    const ratingStat = stats[1];
    expect(ratingStat.querySelector('strong')?.textContent).toBe('4.9');
    expect(ratingStat.querySelector('span')?.textContent).toBe('Rating');
    
    // Check classes stat
    const classesStat = stats[2];
    expect(classesStat.querySelector('strong')?.textContent).toBe('120');
    expect(classesStat.querySelector('span')?.textContent).toBe('Classes');
  });

  it('should render book a session button', () => {
    const fixture = TestBed.createComponent(MentorDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const bookButton = compiled.querySelector('.cta');
    expect(bookButton).toBeTruthy();
    expect(bookButton?.textContent).toBe('Book a Session');
  });

  it('should have proper CSS classes applied', () => {
    const fixture = TestBed.createComponent(MentorDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    expect(compiled.querySelector('.mentor')).toBeTruthy();
    expect(compiled.querySelector('.header')).toBeTruthy();
    expect(compiled.querySelector('.profile')).toBeTruthy();
    expect(compiled.querySelector('.photo')).toBeTruthy();
    expect(compiled.querySelector('.info')).toBeTruthy();
    expect(compiled.querySelector('.stats')).toBeTruthy();
    expect(compiled.querySelector('.cta')).toBeTruthy();
  });

  it('should render mentor photo with background image', () => {
    const fixture = TestBed.createComponent(MentorDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const photo = compiled.querySelector('.photo');
    expect(photo).toBeTruthy();
    // The component should have a background image applied via CSS
  });

  it('should have proper layout structure', () => {
    const fixture = TestBed.createComponent(MentorDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const profile = compiled.querySelector('.profile');
    const photo = profile?.querySelector('.photo');
    const info = profile?.querySelector('.info');
    
    expect(profile).toBeTruthy();
    expect(photo).toBeTruthy();
    expect(info).toBeTruthy();
  });

  it('should display stats container with proper structure', () => {
    const fixture = TestBed.createComponent(MentorDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const statsContainer = compiled.querySelector('.stats');
    expect(statsContainer).toBeTruthy();
    
    const stats = statsContainer?.querySelectorAll('.stat');
    expect(stats?.length).toBe(3);
    
    // Each stat should have strong and span elements
    stats?.forEach(stat => {
      expect(stat.querySelector('strong')).toBeTruthy();
      expect(stat.querySelector('span')).toBeTruthy();
    });
  });
});
