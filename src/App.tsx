import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'
import {
  experience,
  leadership,
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
      { threshold: 0.14, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

function Reveal({
  className = '',
  as: Tag = 'div',
  children,
  style,
  ...rest
}: {
  className?: string
  as?: ElementType
  children: ReactNode
  style?: CSSProperties
  [key: string]: unknown
}) {
  const ref = useReveal<HTMLElement>()
  return (
    <Tag
      className={`reveal ${className}`.trim()}
      ref={ref}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}

function WorkItem({
  item,
  index,
}: {
  item: (typeof workHighlights)[number]
  index: number
}) {
  const ref = useReveal<HTMLElement>()

  return (
    <article
      className="case-study"
      ref={ref}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <header className="case-study-header">
        <p className="case-study-kind">{item.kind}</p>
        <h3 className="case-study-title">{item.title}</h3>
        <p className="case-study-timing">{item.timing}</p>
      </header>
      <div className="case-study-body">
        <p className="case-study-lede">{item.blurb}</p>
        <ul>
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {item.link ? (
          <a
            className="case-study-link"
            href={item.link.href}
            target="_blank"
            rel="noreferrer"
          >
            {item.link.label}
            <span aria-hidden="true"> →</span>
          </a>
        ) : null}
      </div>
    </article>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const glowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const glow = glowRef.current
    if (!glow) return

    let frame = 0
    let targetX = window.innerWidth * 0.7
    let targetY = window.innerHeight * 0.25
    let x = targetX
    let y = targetY

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      glow.classList.add('is-active')
    }

    const onLeave = () => glow.classList.remove('is-active')

    const tick = () => {
      x += (targetX - x) * 0.08
      y += (targetY - y) * 0.08
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      <div className="pointer-glow" ref={glowRef} aria-hidden="true" />

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
              <a href="#leadership">Leadership</a>
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
            <div className="orb orb-a" />
            <div className="orb orb-b" />
          </div>
          <div className="hero-inner">
            <h1 className="hero-name">
              <span style={{ animationDelay: '0.08s' }}>Dylan</span>
              <span style={{ animationDelay: '0.18s' }}>Pacitto</span>
              <span style={{ animationDelay: '0.28s' }}>Potapczuk</span>
            </h1>
            <p className="hero-location">{profile.location}</p>
            <p className="hero-tagline">{profile.tagline}</p>
            <p className="hero-degrees">
              <strong>Bachelor of Computer Science</strong>, Minor in
              Combinatorics &amp; Optimization at University of Waterloo
              <span aria-hidden="true"> · </span>
              <strong>Bachelor of Business Administration</strong>, Minor in
              Economics at Wilfrid Laurier University
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

        <section className="section section-work" id="work">
          <div className="section-inner section-inner-narrow">
            <Reveal className="section-head">
              <p className="section-label">Selected work</p>
              <h2 className="section-title">
                Products and systems that move operations forward
              </h2>
              <p className="section-copy">
                Case studies from product, forecasting, procurement, and supply
                chain work.
              </p>
            </Reveal>
            <div className="case-study-stack">
              {workHighlights.map((item, index) => (
                <WorkItem key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-leadership" id="leadership">
          <div className="section-inner section-inner-narrow">
            <Reveal className="section-head">
              <p className="section-label">Leadership</p>
              <h2 className="section-title">
                Running Orientation at university scale
              </h2>
              <p className="section-copy">{leadership.blurb}</p>
            </Reveal>
            <Reveal className="leadership-panel">
              <div className="leadership-meta">
                <p className="leadership-role">{leadership.role}</p>
                <p className="leadership-org">{leadership.org}</p>
                <p className="leadership-timing">{leadership.timing}</p>
              </div>
              <div className="leadership-stats" aria-label="Leadership impact">
                {leadership.stats.map((stat) => (
                  <div className="leadership-stat" key={stat.label}>
                    <p className="leadership-stat-value">{stat.value}</p>
                    <p className="leadership-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
              <ul className="leadership-points">
                {leadership.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section section-experience" id="experience">
          <div className="section-inner section-inner-narrow">
            <Reveal className="section-head">
              <p className="section-label">Experience</p>
              <h2 className="section-title">Where I have built leverage</h2>
            </Reveal>
            <div className="experience-list">
              {experience.map((job, index) => (
                <Reveal
                  as="article"
                  className={`experience-item${job.featured ? ' is-featured' : ''}`}
                  key={`${job.org}:${job.role}`}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <p className="experience-timing">{job.timing}</p>
                  <div>
                    {job.featured ? (
                      <p className="experience-badge">Leadership highlight</p>
                    ) : null}
                    <h3 className="experience-role">{job.role}</h3>
                    <p className="experience-org">{job.org}</p>
                    <p className="experience-summary">{job.summary}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-skills" id="skills">
          <div className="section-inner section-inner-narrow">
            <Reveal className="section-head">
              <p className="section-label">Skills</p>
              <h2 className="section-title">How I get things shipped</h2>
            </Reveal>
            <div className="skills-grid">
              {skillGroups.map((group, groupIndex) => (
                <Reveal
                  className="skill-group"
                  key={group.label}
                  style={{ transitionDelay: `${groupIndex * 80}ms` }}
                >
                  <h3>{group.label}</h3>
                  <ul>
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-about" id="about">
          <div className="section-inner section-inner-narrow">
            <Reveal className="section-head">
              <p className="section-label">About</p>
              <h2 className="section-title">
                Computer science and business, built for operators
              </h2>
            </Reveal>
            <div className="about-grid">
              <Reveal className="about-copy">
                <p>
                  I am a dual degree student looking for full time roles where
                  product sense, systems thinking, and hands on engineering meet.
                  I like turning messy operational problems into tools people
                  actually use: forecasts that land close to actuals, purchasing
                  workflows that stick, and shipping that gets faster.
                </p>
                <p>
                  Based in {profile.location}. Open to product, strategy and
                  operations, and technical analyst roles.
                </p>
              </Reveal>
              <Reveal className="degree-list" aria-label="Education">
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
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="section-inner section-inner-narrow">
            <Reveal className="section-head">
              <p className="section-label">Contact</p>
              <h2 className="section-title">Let&apos;s talk</h2>
              <p className="section-copy">
                Reach out for roles, collaborations, or a quick intro.
              </p>
            </Reveal>
            <Reveal className="contact-panel">
              <div className="contact-links">
                <a className="contact-link-primary" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
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
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-inner section-inner-narrow">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built with Vite · React · TypeScript</span>
        </div>
      </footer>
    </>
  )
}
