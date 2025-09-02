import { Component } from '@angular/core';
import { ExperienceLiveClassesComponent } from './../../shared/experience-live-classes/experience-live-classes.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [ExperienceLiveClassesComponent],
  template: `
    <section style="padding: 40px 0; background:white;">
      <app-experience-live-classes></app-experience-live-classes>
    </section>
  `,
  styles: ``
})
export class ExploreComponent {

}
