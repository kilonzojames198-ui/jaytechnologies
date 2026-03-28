import Image from 'next/image'
import FloatingTools from '@/components/FloatingTools'
import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'
import PortfolioClient from '@/components/PortfolioClient'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const portfolio = [
  { title: 'School Management System', cat: 'Web Development', category: 'web', cls: 'portfolio-img-1' },
  { title: 'Restaurant Brand Kit',     cat: 'Graphic Design',  category: 'design', cls: 'portfolio-img-2' },
  { title: 'E-Commerce Store',         cat: 'Web Development', category: 'web',    cls: 'portfolio-img-3' },
  { title: 'Startup Identity Package', cat: 'Branding',        category: 'brand',  cls: 'portfolio-img-4' },
  { title: 'Event Poster Series',      cat: 'Graphic Design',  category: 'design', cls: 'portfolio-img-5' },
  { title: 'NGO Website',              cat: 'Web Development', category: 'web',    cls: 'portfolio-img-6' },
]

const testimonials = [
  { initials: 'JM', name: 'James Mwangi',   role: 'Principal, Excellence High School Academy',    featured: false, text: 'Jay Technologies built our school website in record time. The design was clean, professional, and exactly what we needed. Highly recommend!' },
  { initials: 'AK', name: 'Aisha Kamau',    role: 'Founder, Spice Garden Restaurant', featured: true,  text: 'Our logo and brand kit exceeded every expectation. The creativity and attention to detail was outstanding. Our customers constantly compliment our branding.' },
  { initials: 'DO', name: 'David Otieno',   role: 'CEO, Techmart Kenya',           featured: false, text: 'Fast, professional, and affordable. They delivered our e-commerce site on time and within budget. The support after launch was exceptional too.' },
]

export default function Home() {
  return (
    <>
      <FloatingTools />

      {/* WhatsApp Float */}
      <a href="https://wa.me/254706886473" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>

      <Navbar />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-content">
          <div className="hero-badge">✦ Design. Develop. Deliver.</div>
          <h1 className="hero-title">
            We Build Your<br />
            <span className="gradient-text">Digital Presence</span>
          </h1>
          <p className="hero-subtitle">Web Development &amp; Graphic Design for businesses that want to stand out.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Start a Project</a>
            <a href="#portfolio" className="btn-ghost">View Our Work</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">50+</span><span className="stat-label">Projects Done</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">100%</span><span className="stat-label">Client Satisfaction</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">3+</span><span className="stat-label">Years Experience</span></div>
          </div>
        </div>
        <div className="hero-glow" />
        <div className="hero-glow hero-glow-2" />
      </section>

      {/* ── About ── */}
      <section id="about">
        <div className="container">
          <div className="section-tag">Who We Are</div>
          <h2 className="section-title">Built for Businesses<br />That Mean Business</h2>
          <p className="section-sub">Jay Technologies is a modern digital solutions brand dedicated to helping businesses grow online. We specialize in high-quality web development and creative graphic design — for startups and established organizations alike.</p>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To provide reliable, affordable, and high-quality digital services that empower businesses to stand out and grow confidently online.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>To become a trusted digital leader known for creativity, innovation, and excellence in web development and graphic design.</p>
            </div>
            <div className="about-card about-card-wide">
              <div className="about-icon">🤝</div>
              <h3>Why Choose Jay Technologies</h3>
              <ul className="features-list">
                <li>✔ Clean, modern, and conversion-focused designs</li>
                <li>✔ Affordable pricing for all business sizes</li>
                <li>✔ Fast delivery and reliable support</li>
                <li>✔ Customer-first approach on every project</li>
                <li>✔ Genuine passion for quality and innovation</li>
                <li>✔ Local expertise, global standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="dark-section">
        <div className="container">
          <div className="section-tag light">What We Do</div>
          <h2 className="section-title light">Our Services</h2>
          <p className="section-sub light">Everything you need to establish and grow your digital presence — under one roof.</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Business websites, school portals, e-commerce stores, and custom web systems built to perform.</p>
              <ul className="service-list">
                <li>Responsive Design</li>
                <li>CMS &amp; Admin Panels</li>
                <li>E-Commerce Stores</li>
                <li>School / NGO Systems</li>
              </ul>
            </div>
            <div className="service-card service-card-featured">
              <div className="featured-badge">Most Popular</div>
              <div className="service-icon">🎨</div>
              <h3>Graphic Design</h3>
              <p>Eye-catching logos, posters, flyers, social media graphics, and complete brand kits.</p>
              <ul className="service-list">
                <li>Logo Design</li>
                <li>Social Media Graphics</li>
                <li>Posters &amp; Flyers</li>
                <li>Business Cards</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">📢</div>
              <h3>Branding</h3>
              <p>Complete brand identity packages that tell your story and make your business unforgettable.</p>
              <ul className="service-list">
                <li>Brand Identity Kit</li>
                <li>Color &amp; Typography</li>
                <li>Brand Guidelines</li>
                <li>Marketing Assets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section id="portfolio">
        <div className="container">
          <div className="section-tag">Our Work</div>
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-sub">A selection of websites, brands, and designs we&apos;ve brought to life.</p>
          <PortfolioClient items={portfolio} />
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="dark-section">
        <div className="container">
          <div className="section-tag light">Transparent Pricing</div>
          <h2 className="section-title light">Plans That Fit Your Budget</h2>
          <p className="section-sub light">No hidden fees. No surprises. Just quality work at honest prices.</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-tier">Starter</div>
              <div className="pricing-price">KSh 5,000<span>/project</span></div>
              <p className="pricing-desc">Perfect for individuals and small businesses just getting started.</p>
              <ul className="pricing-features">
                <li>✓ 3-Page Website</li><li>✓ Mobile Responsive</li><li>✓ Contact Form</li>
                <li>✓ Basic Logo Design</li><li>✓ 1 Revision Round</li>
                <li className="faded">✗ E-Commerce</li><li className="faded">✗ Admin Panel</li>
              </ul>
              <a href="#contact" className="pricing-btn">Get Started</a>
            </div>
            <div className="pricing-card pricing-featured">
              <div className="pricing-popular">Most Popular</div>
              <div className="pricing-tier">Professional</div>
              <div className="pricing-price">KSh 15,000<span>/project</span></div>
              <p className="pricing-desc">For growing businesses that need a full-featured digital presence.</p>
              <ul className="pricing-features">
                <li>✓ Up to 7 Pages</li><li>✓ Mobile Responsive</li><li>✓ Contact Form + WhatsApp</li>
                <li>✓ Full Brand Kit</li><li>✓ 3 Revision Rounds</li>
                <li>✓ Basic E-Commerce</li><li className="faded">✗ Admin Panel</li>
              </ul>
              <a href="#contact" className="pricing-btn pricing-btn-accent">Get Started</a>
            </div>
            <div className="pricing-card">
              <div className="pricing-tier">Enterprise</div>
              <div className="pricing-price">Custom<span>/project</span></div>
              <p className="pricing-desc">For large organizations needing custom systems and full branding.</p>
              <ul className="pricing-features">
                <li>✓ Unlimited Pages</li><li>✓ Custom Web System</li><li>✓ Full E-Commerce</li>
                <li>✓ Admin Dashboard</li><li>✓ Complete Brand Identity</li>
                <li>✓ Unlimited Revisions</li><li>✓ Priority Support</li>
              </ul>
              <a href="#contact" className="pricing-btn">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials">
        <div className="container">
          <div className="section-tag">Client Reviews</div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-sub">Real feedback from businesses we&apos;ve helped grow online.</p>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className={`testimonial-card ${t.featured ? 'testimonial-featured' : ''}`}>
                <div className="stars">★★★★★</div>
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div><strong>{t.name}</strong><span>{t.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="dark-section">
        <div className="container">
          <div className="section-tag light">Let&apos;s Work Together</div>
          <h2 className="section-title light">Start Your Project Today</h2>
          <p className="section-sub light">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div><strong>Phone / WhatsApp</strong><a href="tel:+254706886473">0706 886 473</a></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div><strong>Email</strong><a href="mailto:kilonzojames198@gmail.com">kilonzojames198@gmail.com</a></div>
              </div>
              <a href="https://wa.me/254706886473" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo-wrap">
                <Image src="/logo.png" alt="Jay Technologies" width={85} height={44} className="footer-logo-icon" />
                <span className="footer-logo">Jay<span>Technologies</span></span>
              </div>
              <p>Design. Develop. Deliver.</p>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#services">Web Development</a>
              <a href="#services">Graphic Design</a>
              <a href="#services">Branding</a>
              <a href="#contact">Logo Design</a>
              <a href="#contact">Social Media Graphics</a>
              <a href="#contact">Business Cards</a>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#about">About</a>
              <a href="#pricing">Pricing</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#testimonials">Reviews</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">&copy; {new Date().getFullYear()} Jay Technologies. All Rights Reserved.</p>
            <div className="footer-socials">
              <a href="https://wa.me/254706886473" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="mailto:kilonzojames198@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}


