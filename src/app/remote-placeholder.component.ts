import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-remote-placeholder',
  imports: [RouterLink],
  template: `
    <section>
      <p class="eyebrow">Remote route reserved</p>
      <h1>{{ lab }}</h1>
      <p>{{ description }}</p>
      <p class="note">This placeholder will be replaced by the independently deployed Angular remote.</p>
      <a routerLink="/">← Return to the shell</a>
    </section>
  `,
  styles: `
    section { max-width: 45rem; min-height: 62vh; padding: clamp(4rem, 12vw, 9rem) 0; }
    .eyebrow { color: var(--accent); font-size: .78rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
    h1 { font-size: clamp(2.8rem, 7vw, 5.5rem); letter-spacing: -.06em; margin: 0 0 1.5rem; }
    p { color: var(--text-muted); font-size: 1.15rem; line-height: 1.6; }
    .note { border-left: 2px solid var(--accent); font-size: 1rem; margin: 2rem 0; padding-left: 1rem; }
    a { color: var(--accent); font-weight: 700; }
  `
})
export class RemotePlaceholderComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly lab = this.route.snapshot.data['lab'] as string;
  protected readonly description = this.route.snapshot.data['description'] as string;
}
