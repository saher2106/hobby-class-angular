import { TestBed } from '@angular/core/testing';
import { ExploreComponent } from './explore.component';
import { ExperienceLiveClassesComponent } from './../../shared/experience-live-classes/experience-live-classes.component';

describe('ExploreComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreComponent, ExperienceLiveClassesComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ExploreComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the main section with proper styling', () => {
    const fixture = TestBed.createComponent(ExploreComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const section = compiled.querySelector('section');
    expect(section).toBeTruthy();
    expect(section?.style.padding).toBe('40px 0px');
    expect(section?.style.background).toBe('white');
  });

  it('should render ExperienceLiveClassesComponent', () => {
    const fixture = TestBed.createComponent(ExploreComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const experienceComponent = compiled.querySelector('app-experience-live-classes');
    expect(experienceComponent).toBeTruthy();
  });

  it('should integrate with ExperienceLiveClassesComponent content', () => {
    const fixture = TestBed.createComponent(ExploreComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    // Check if the shared component's content is rendered
    const heading = compiled.querySelector('h2');
    expect(heading?.textContent).toBe('Experience Live Classes');
    
    // Check if course cards are rendered through the shared component
    const cards = compiled.querySelectorAll('.card');
    expect(cards.length).toBe(3);
  });

  it('should render filter buttons from shared component', () => {
    const fixture = TestBed.createComponent(ExploreComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    const filters = compiled.querySelectorAll('.filter');
    expect(filters.length).toBe(4);
    expect(filters[0].textContent).toBe('Explore All');
  });

  it('should have proper component structure', () => {
    const fixture = TestBed.createComponent(ExploreComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    
    // Should have a section wrapper
    const section = compiled.querySelector('section');
    expect(section).toBeTruthy();
    
    // Should contain the experience live classes component
    const experienceComponent = section?.querySelector('app-experience-live-classes');
    expect(experienceComponent).toBeTruthy();
  });
});
