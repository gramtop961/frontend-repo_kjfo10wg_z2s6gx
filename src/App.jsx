import React, { useEffect } from 'react'
import Spline from '@splinetool/react-spline'

const primary = '#007BFF'
const graphite = '#121212'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target
      if (target.matches('a[href^="#"]')) {
        const href = target.getAttribute('href')
        const el = document.querySelector(href)
        if (el) {
          e.preventDefault()
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}

function App() {
  useSmoothScroll()

  return (
    <div className="min-h-screen bg-[rgb(18,18,18)] text-white selection:bg-blue-500/30 selection:text-white">
      {/* Top navigation */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/10 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-white">Kunal Sourabh Mule</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition-colors">{item.label}</a>
            ))}
          </nav>
          <div className="md:hidden">
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm">Contact</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative h-[92vh] pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* overlay gradient */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_30%,rgba(0,123,255,0.25),transparent_60%)]" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">Electronics • Embedded • Software</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Kunal Sourabh Mule
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/80">“Electronics Engineer | Embedded & App Developer | IoT Innovator”</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/Kunal_Sourabh_Mule_Resume.pdf" target="_blank" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/20">Download Resume</a>
              <a href="#projects" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-white/10 hover:bg-white/15 text-white font-medium border border-white/10">View Projects</a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20 border-t border-white/10 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
          <p className="mt-4 text-white/80 leading-relaxed">Hi, I’m Kunal — an Electronics & Telecommunication Engineer with a passion for bridging hardware and software. I design intelligent systems that combine embedded sensors, IoT, and mobile applications to make technology smarter and more human.</p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
            <a href="#contact" className="hidden sm:inline-flex text-sm text-white/70 hover:text-white">Collaborate →</a>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pulse Guardian */}
            <ProjectCard
              title="Pulse Guardian"
              subtitle="National Level Runner-Up"
              description="Smart multi-sensor health monitoring using ECG (AD8232), GSR, MAX30102 with ESP32 + SIM7000G, React Native app, and Python dashboard."
              tags={["ECG", "ESP32", "IoT", "React Native", "SIM7000G"]}
            />
            {/* Erva */}
            <ProjectCard
              title="Erva"
              subtitle="Department Level Winner"
              description="Machine learning-based crop disease detection using Python ML with an Android interface."
              tags={["Python", "ML", "Android"]}
            />
            {/* SwitchMosaic */}
            <ProjectCard
              title="SwitchMosaic"
              subtitle="Smart Windows Control Panel"
              description="Touchscreen control panel for Windows built with WPF (.NET 8)."
              tags={["WPF", ".NET 8", "UI"]}
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative py-20 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ExperienceCard
              role="Intern"
              org="Tantraniketan"
              description="Worked on embedded systems, logic circuits, and sensor projects (PIR, Ultrasonic, Gas, Soil)."
            />
            <ExperienceCard
              role="Technical Head"
              org="Cultural Committee"
              description="Managed full event technical infrastructure."
            />
            <ExperienceCard
              role="Member"
              org="ISTE & IIC"
              description="Organized technical fests and AI/ML FDPs."
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillGroup title="Hardware" items={["ESP32", "Raspberry Pi", "Arduino", "KiCad", "Proteus"]} />
            <SkillGroup title="Software" items={["Android Studio", "React Native", "Python", "WPF", "MATLAB"]} />
            <SkillGroup title="Creative" items={["Photoshop", "Premiere Pro", "After Effects", "Blender"]} />
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="relative py-20 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Achievements</h2>
          <ul className="mt-6 space-y-3 text-white/80">
            <li>National Level Runner-Up – Pulse Guardian</li>
            <li>2× Hackathon Runner-Up</li>
            <li>National Level Debate Winner</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 space-y-3 text-white/80">
              <p>Email: <a className="text-blue-400 hover:underline" href="mailto:kunalmule2006@gmail.com">kunalmule2006@gmail.com</a></p>
              <p>Location: Mumbai, India</p>
              <div className="flex gap-3 pt-2">
                <a href="https://www.linkedin.com" target="_blank" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white">LinkedIn Profile</a>
                <a href="/Kunal_Sourabh_Mule_Resume.pdf" target="_blank" className="inline-flex items-center px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-white">Download Resume</a>
              </div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-600/20 to-white/5 border border-white/10 p-6">
              <p className="text-white/80">Open to roles in embedded systems, IoT, and software that blend hardware with applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-white/60">© 2025 • Made by Kunal Mule</footer>
    </div>
  )
}

function ProjectCard({ title, subtitle, description, tags }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-blue-500/40 transition-colors">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
      <h3 className="text-xl font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-blue-300 mt-1">{subtitle}</p>}
      <p className="mt-3 text-white/80">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags?.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10 text-white/80">{t}</span>
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({ role, org, description }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-lg font-semibold">{role}</h3>
      <p className="text-sm text-blue-300">{org}</p>
      <p className="mt-3 text-white/80">{description}</p>
    </div>
  )
}

function SkillGroup({ title, items }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10 text-white/80">{item}</span>
        ))}
      </div>
    </div>
  )
}

export default App
