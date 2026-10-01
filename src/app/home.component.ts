import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="hero">
      <p class="eyebrow">Portfolio engineering lab</p>
      <h1>One portfolio. Many independently evolving experiments.</h1>
      <p class="intro">This Angular shell owns the shared navigation and experience. Each lab will be delivered as a separately built Angular remote.</p>
      <a class="button" routerLink="/security">Explore the Security Lab <span aria-hidden="true">→</span></a>
    </section>
    <section class="labs" aria-labelledby="labs-title">
      <div class="section-heading"><p class="eyebrow">Architecture</p><h2 id="labs-title">The host application</h2></div>
      <div class="lab-grid">
        <article><span class="number">01</span><h3>Shell</h3><p>Global layout, navigation, theme, and route selection live here.</p></article>
        <article><span class="number">02</span><h3>Security remote</h3><p>Will load on demand at <code>/security</code> after it is built and deployed.</p></article>
        <article><span class="number">03</span><h3>More remotes</h3><p>Observability, communication, and AI labs can ship without redeploying this shell.</p></article>
      </div>
    </section>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
