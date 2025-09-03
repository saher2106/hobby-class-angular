import { Component } from '@angular/core';

@Component({
  selector: 'app-mentor-details',
  standalone: true,
  imports: [],
  template: `
    <section class="mentor">
      <div class="header">
        <h1>Mentor Details</h1>
        <p class="sub">Learn from world’s best professionals</p>
      </div>

      <div class="profile">
        <div class="photo"></div>
        <div class="info">
          <h2>Jane Doe</h2>
          <p class="role">Master Calligrapher</p>
          <p class="desc">15+ years teaching experience, award-winning artist, and passionate educator.</p>
          <div class="stats">
            <div class="stat"><strong>2.1K</strong><span>Enrolled</span></div>
            <div class="stat"><strong>4.9</strong><span>Rating</span></div>
            <div class="stat"><strong>120</strong><span>Classes</span></div>
          </div>
          <button class="cta">Book a Session</button>
        </div>
      </div>
    </section>
  `,
  styles: `
    .mentor { padding: 60px 100px; }
    .header h1 { margin:0; font-family:'Source Sans Pro', sans-serif; font-weight:600; font-size:48px; color:#020061; }
    .header .sub { margin:10px 0 40px; color:#b2b2b2; font-size:24px; font-family:'Source Sans Pro', sans-serif; font-weight:600; }
    .profile { display:flex; gap:40px; align-items:flex-start; }
    .photo { width:520px; height:520px; border-radius:20px; background-image:url('src/assets/calligraphy.jpg'); background-size:cover; background-position:center; }
    .info h2 { margin:0 0 8px; font-family:'Source Sans Pro', sans-serif; font-weight:600; font-size:36px; color:#020061; }
    .role { margin:0 0 16px; color:#020061; font-size:24px; font-family:'Source Sans Pro', sans-serif; font-weight:600; opacity:.8; }
    .desc { margin:0 0 24px; font-size:18px; color:#333; max-width:640px; }
    .stats { display:flex; gap:30px; margin: 10px 0 30px; }
    .stat { display:flex; flex-direction:column; align-items:flex-start; }
    .stat strong { font-size:24px; color:#020061; }
    .stat span { color:#555; }
    .cta { background:#020061; color:#fff; border:none; border-radius:10px; padding:16px 28px; font-size:18px; font-weight:600; cursor:pointer; }
  `
})
export class MentorDetailsComponent {

}
