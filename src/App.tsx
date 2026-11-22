import { useEffect, useRef, useState } from 'react'
import {
  experience,
  profile,
  skillGroups,
  workHighlights,
} from './data'
import './index.css'

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

function WorkItem({
  item,
}: {
  item: (typeof workHighlights)[number]
}) {
  const ref = useReveal<HTMLElement>()

  return (
    <article className="work-item" ref={ref}>
      <div className="work-meta">
        <p className="work-kind">{item.kind}</p>
        <h3 className="work-title">{item.title}</h3>
        <p className="work-timing">{item.timing}</p>
      </div>
      <div className="work-body">
        <p>{item.blurb}</p>
        <ul>
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {item.link ? (
          <a
            className="work-link"
            href={item.link.href}
            target="_blank"
            rel="noreferrer"
          >
            {item.link.label} →
          </a>
        ) : null}
      </div>
    </article>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a className="skip-link" href="#work">
        Skip to work
      </a>

      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <a className="brand-mark" href="#top">
          DPP
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a className="nav-cta" href={profile.resumeHref} download>
          Resume
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-label="Introduction">
          <div className="hero-atmosphere" aria-hidden="true">
            <div className="hero-grid" />
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="orb orb-c" />
          </div>
          <div className="hero-inner">
            <p className="hero-kicker">{profile.location}</p>
            <h1 className="hero-name">
              <span>Dylan</span>
              <span>Pacitto</span>
              <span>Potapczuk</span>
            </h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <p className="hero-degrees">
              <strong>Bachelor of Computer Science</strong>, Minor in
              Combinatorics &amp; Optimization — University of Waterloo
              <span aria-hidden="true"> · </span>
              <strong>Bachelor of Business Administration</strong>, Minor in
              Economics — Wilfrid Laurier University
            </p>
            <div className="cta-row">
              <a className="button button-primary" href="#work">
                View work
              </a>
              <a
                className="button button-ghost"
                href={profile.resumeHref}
                download
              >
                Resume
              </a>
              <a className="button button-ghost" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-inner">
            <div className="section-head">
              <p className="section-label">Selected work</p>
              <h2 className="section-title">
                Products and systems that move operations forward
              </h2>
              <p className="section-copy">
                Featured build plus case highlights from forecasting,
                procurement, and supply-chain work.
              </p>
            </div>
            <div className="work-list">
              {workHighlights.map((item) => (
                <WorkItem key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-inner">
            <div className="section-head">
              <p className="section-label">Experience</p>
              <h2 className="section-title">Where I&apos;ve built leverage</h2>
            </div>
            <div className="experience-list">
              {experience.map((job) => (
                <article className="experience-item" key={`${job.org}-${job.role}`}>
                  <p className="experience-timing">{job.timing}</p>
                  <div>
                    <h3 className="experience-role">{job.role}</h3>
                    <p className="experience-org">{job.org}</p>
                    <p className="experience-summary">{job.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-inner">
            <div className="section-head">
              <p className="section-label">Skills</p>
              <h2 className="section-title">How I get things shipped</h2>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <ul>
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-inner">
            <div className="section-head">
              <p className="section-label">About</p>
              <h2 className="section-title">CS + business, built for operators</h2>
            </div>
            <div className="about-grid">
              <div className="about-copy">
                <p>
                  I&apos;m a dual-degree student hunting for full-time roles
                  where product sense, systems thinking, and hands-on
                  engineering meet. I like turning messy operational problems
                  into tools people actually use — forecasts that land close to
                  actuals, purchasing workflows that stick, shipping that gets
                  faster.
                </p>
                <p>
                  Based in {profile.location}. Open to product, strategy &amp;
                  operations, and technical analyst roles.
                </p>
              </div>
              <div className="degree-list" aria-label="Education">
                {profile.degrees.map((degree) => (
                  <div className="degree-item" key={degree.title}>
                    <h3>{degree.title}</h3>
                    <p>
                      {degree.school}
                      <br />
                      {degree.timing}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-inner">
            <div className="section-head">
              <p className="section-label">Contact</p>
              <h2 className="section-title">Let&apos;s talk</h2>
              <p className="section-copy">
                Reach out for roles, collaborations, or a quick intro.
              </p>
            </div>
            <div className="contact-panel">
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={profile.resumeHref} download>
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Vite · React · TypeScript</span>
        </div>
      </footer>
    </>
  )
}
