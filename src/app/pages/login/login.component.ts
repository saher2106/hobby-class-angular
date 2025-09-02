import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
    <section class="login">
      <div class="panel">
        <h1>Login</h1>
        <p class="sub">Welcome back! Please enter your details.</p>
        <form class="form" (submit)="$event.preventDefault()">
          <input class="field" type="email" placeholder="Email" required />
          <input class="field" type="password" placeholder="Password" required />
          <button class="cta" type="submit">Sign In</button>
        </form>
      </div>
      <div class="art"></div>
    </section>
  `,
  styles: `
    .login { padding: 80px 100px; display:flex; gap:60px; align-items:center; justify-content:center; }
    .panel { width: 480px; }
    h1 { margin:0; font-family:'Source Sans Pro', sans-serif; font-weight:600; font-size:48px; color:#020061; }
    .sub { margin:10px 0 30px; color:#b2b2b2; font-size:20px; font-family:'Source Sans Pro', sans-serif; font-weight:600; }
    .form { display:flex; flex-direction:column; gap:16px; }
    .field { height:56px; border:2px solid #020061; border-radius:10px; padding:0 16px; font-size:16px; }
    .cta { margin-top:10px; background:#020061; color:#fff; border:none; border-radius:10px; padding:14px 22px; font-weight:600; font-size:18px; cursor:pointer; }
    .art { width:520px; height:520px; border-radius:20px; background-image:url('http://localhost:3845/assets/61dc43ef66faa5853b28429f5637c9fb004385e9.png'); background-size:cover; background-position:center; }
  `
})
export class LoginComponent {

}
