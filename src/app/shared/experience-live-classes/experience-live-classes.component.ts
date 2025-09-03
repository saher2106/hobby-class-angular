import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-live-classes',
  standalone: true,
  template: `
    <section class="courses">
      <h2>Experience Live Classes</h2>
      <p class="subtitle">Experience One-to-One Classes with our Professionals</p>

      <div class="filters">
        <button class="filter active">Explore All</button>
        <button class="filter">Most Popular</button>
        <button class="filter">Trending</button>
        <button class="filter">Just Added</button>
      </div>

      <div class="carousel">
        <button class="nav-btn left">‹</button>
        <div class="cards">
          <div class="card">
            <div class="card-bg calligraphy-bg"></div>
            <div class="card-content">
              <h3>CALLIGRAPHY</h3>
              <p>❤ 2.1K Enrolled</p>
            </div>
          </div>
          <div class="card">
            <div class="card-bg pottery-bg"></div>
            <div class="card-content">
              <h3>POTTERY</h3>
              <p>❤ 3.4K Enrolled</p>
            </div>
          </div>
          <div class="card">
            <div class="card-bg painting-bg"></div>
            <div class="card-content">
              <h3>PAINTING</h3>
              <p>❤ 4.6K Enrolled</p>
            </div>
          </div>
        </div>
        <button class="nav-btn right">›</button>
      </div>
    </section>
  `,
  styles: `
    .courses { padding: 40px 100px; background: #fff; }
    .courses h2 { font-family:'Source Sans Pro', sans-serif; font-weight:600; font-size:48px; color:#020061; text-align:center; margin:0 0 20px 0; text-transform: capitalize; }
    .subtitle { font-family:'Source Sans Pro', sans-serif; font-weight:600; font-size:24px; color:#b2b2b2; text-align:center; margin:0 0 40px 0; }
    .filters { display:flex; gap:70px; justify-content:center; margin-bottom:60px; }
    .filter { padding:10px 20px; border-radius:10px; font-family:'Source Sans Pro', sans-serif; font-weight:600; font-size:24px; border:2px solid #020061; background:white; color:#020061; cursor: pointer; }
    .filter.active { background:#020061; color:white; }
    .carousel { position:relative; display:flex; align-items:center; justify-content:center; width:100%; }
    .nav-btn { position:absolute; width:80px; height:80px; border-radius:50%; background:#020061; color:white; border:none; font-size:32px; z-index:10; cursor: pointer; display:flex; align-items:center; justify-content:center; }
    .nav-btn.left { left:60px; top: 50%; transform: translateY(-50%); }
    .nav-btn.right { right:60px; top: 50%; transform: translateY(-50%); }
    .cards { display:flex; gap:40px; }
    .card { position:relative; width:400px; height:500px; border-radius:20px; overflow:hidden; }
    .card-bg { width:100%; height:100%; background-size:cover; background-position:center; }
    .calligraphy-bg { background-image:url('src/assets/calligraphy.jpg'); background-size:cover; background-position:center; }
    .pottery-bg { background-image:url('src/assets/pottery.jpg'); background-size:cover; background-position:center; }
    .painting-bg { background-image:url('src/assets/painting.jpg'); background-size:cover; background-position:center; }
    .card-content { position:absolute; bottom:0; left:0; right:0; background:linear-gradient(transparent, rgba(0,0,0,0.8)); padding:40px 20px 20px; color:white; }
    .card-content h3 { font-family:'Source Sans Pro', sans-serif; font-weight:600; font-size:36px; margin:0 0 10px 0; text-transform:uppercase; }
    .card-content p { font-family:'Source Sans Pro', sans-serif; font-weight:600; font-size:24px; margin:0; }
  `
})
export class ExperienceLiveClassesComponent {}


