import { useState } from 'react'

type Page = 'home' | 'login' | 'dashboard' | 'explore'

const students = [
  {
    initial: 'P',
    name: 'Priya Patil',
    college: 'ABC College',
    dept: 'Information Technology',
    teaches: 'Python',
    learns: 'UI/UX Design',
    rating: 5.0,
    matchPct: 100,
  },
  {
    initial: 'R',
    name: 'Rohan Mehta',
    college: 'XYZ College',
    dept: 'Computer Engineering',
    teaches: 'Java, Database Management',
    learns: 'JavaScript',
    rating: 4.8,
    matchPct: 85,
  },
  {
    initial: 'S',
    name: 'Sneha Kulkarni',
    college: 'PQR College',
    dept: 'Computer Engineering',
    teaches: 'Graphic Design, Video Editing',
    learns: 'HTML/CSS',
    rating: 4.9,
    matchPct: 72,
  },
  {
    initial: 'A',
    name: 'Arjun Sharma',
    college: 'LMN College',
    dept: 'Electronics Engineering',
    teaches: 'Circuit Design, Arduino',
    learns: 'Python',
    rating: 4.7,
    matchPct: 60,
  },
  {
    initial: 'M',
    name: 'Meera Joshi',
    college: 'ABC College',
    dept: 'Computer Science',
    teaches: 'Machine Learning, Data Science',
    learns: 'Web Development',
    rating: 4.6,
    matchPct: 55,
  },
  {
    initial: 'K',
    name: 'Kiran Desai',
    college: 'STU College',
    dept: 'Information Technology',
    teaches: 'UI/UX Design, Figma',
    learns: 'Java',
    rating: 4.8,
    matchPct: 48,
  },
]

const popularSkills = [
  { icon: '💻', label: 'Programming' },
  { icon: '✏️', label: 'UI/UX Design' },
  { icon: '🌐', label: 'Web Development' },
  { icon: '🖼️', label: 'Graphic Design' },
  { icon: '📣', label: 'Digital Marketing' },
  { icon: '🎬', label: 'Video Editing' },
]

const features = [
  { icon: '🤝', title: 'Peer-to-Peer Learning', desc: 'Learn from students like you.' },
  { icon: '🌱', title: 'Affordable & Accessible', desc: 'Exchange skills instead of paying high course fees.' },
  { icon: '✔️', title: 'Verified Profiles', desc: 'Connect with trusted student profiles.' },
  { icon: '⭐', title: 'Ratings & Reviews', desc: 'Build trust through ratings and reviews.' },
]

function Avatar({ initial, size = 'md' }: { initial: string; size?: 'sm' | 'md' | 'lg' }) {
  const sz = size === 'sm' ? 'w-9 h-9 text-sm' : size === 'lg' ? 'w-14 h-14 text-xl' : 'w-11 h-11'
  return (
    <div className={`${sz} rounded-full bg-[#4caf50] flex items-center justify-center text-white font-bold flex-shrink-0`}>
      {initial}
    </div>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-[#f5a623] font-semibold text-sm">
      ★ {rating.toFixed(1)}/5
    </span>
  )
}

function ConnectBtn({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#4caf50] hover:bg-[#3d9a3c] text-white font-semibold px-5 py-2 rounded-lg transition-colors duration-200"
    >
      Connect
    </button>
  )
}

function Nav({ current, onNav }: { current: Page; onNav: (p: Page) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => onNav('home')} className="flex flex-col leading-none text-left">
            <span className="text-[#0f2044] font-bold text-lg">Skill</span>
            <span className="text-[#4caf50] font-bold text-lg -mt-1">Swap</span>
            <span className="text-[#0f2044] text-[9px] tracking-widest font-medium">LEARN • TEACH • EXCHANGE</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {(['home', 'explore', 'dashboard'] as Page[]).map((p) => (
              <button
                key={p}
                onClick={() => onNav(p)}
                className={`text-sm font-medium transition-colors ${current === p ? 'text-[#0f2044] font-semibold' : 'text-gray-600 hover:text-[#0f2044]'}`}
              >
                {p === 'home' ? 'Home' : p === 'explore' ? 'Explore Skills' : 'Dashboard Demo'}
              </button>
            ))}
            <button
              onClick={() => onNav('login')}
              className="bg-[#4caf50] hover:bg-[#3d9a3c] text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors duration-200"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#0f2044] p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 flex flex-col gap-3 pb-4">
            {(['home', 'explore', 'dashboard'] as Page[]).map((p) => (
              <button
                key={p}
                onClick={() => { onNav(p); setMobileOpen(false) }}
                className="text-left text-sm font-medium text-gray-700 hover:text-[#0f2044] px-1"
              >
                {p === 'home' ? 'Home' : p === 'explore' ? 'Explore Skills' : 'Dashboard Demo'}
              </button>
            ))}
            <button
              onClick={() => { onNav('login'); setMobileOpen(false) }}
              className="self-start bg-[#4caf50] hover:bg-[#3d9a3c] text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

function HomePage({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#f0f2f5] pt-12 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left */}
          <div className="flex-1">
            <p className="text-[#4caf50] text-xs font-bold tracking-widest mb-4 uppercase">Student-to-Student Learning</p>
            <h1 className="text-[#0f2044] font-extrabold text-4xl sm:text-5xl leading-tight mb-2">
              Learn a Skill.<br />Teach a Skill.
            </h1>
            <h1 className="text-[#4caf50] font-extrabold text-4xl sm:text-5xl leading-tight mb-6">
              Exchange Knowledge.
            </h1>
            <p className="text-gray-600 text-base max-w-md mb-8">
              SkillSwap connects students who want to learn with students who can teach them.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNav('explore')}
                className="bg-[#0f2044] hover:bg-[#1a3160] text-white font-semibold px-7 py-3 rounded-lg transition-colors duration-200"
              >
                Find a Skill
              </button>
              <button
                onClick={() => onNav('login')}
                className="border-2 border-[#0f2044] text-[#0f2044] hover:bg-[#0f2044] hover:text-white font-semibold px-7 py-3 rounded-lg transition-colors duration-200"
              >
                Share Your Skill
              </button>
            </div>
          </div>

          {/* Right graphic */}
          <div className="flex-1 flex justify-center w-full max-w-sm lg:max-w-none">
            <div className="bg-[#0f2044] rounded-2xl p-10 w-full max-w-md aspect-video flex items-center justify-center relative">
              <div className="absolute top-8 left-10 bg-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-md text-sm font-semibold text-[#0f2044]">
                <span>💻</span> Code
              </div>
              <div className="absolute top-8 right-10 bg-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-md text-sm font-semibold text-[#0f2044]">
                <span>🎨</span> Design
              </div>
              <div className="absolute bottom-8 right-10 bg-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-md text-sm font-semibold text-[#0f2044]">
                <span>📈</span> Grow
              </div>
              <div className="w-16 h-16 bg-[#4caf50] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                ⇔
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SkillSwap */}
      <section className="bg-[#f0f2f5] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-[#0f2044] font-bold text-3xl mb-10">
            Why <span className="text-[#4caf50]">SkillSwap?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="text-[#0f2044] font-bold text-base mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Skills */}
      <section className="bg-[#f0f2f5] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-[#0f2044] font-bold text-3xl mb-10">
            Popular <span className="text-[#4caf50]">Skills</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularSkills.map((s) => (
              <button
                key={s.label}
                onClick={() => onNav('explore')}
                className="bg-white rounded-2xl px-6 py-5 flex items-center gap-3 shadow-sm hover:shadow-md hover:border-[#4caf50] border border-transparent transition-all text-left"
              >
                <span className="text-xl">{s.icon}</span>
                <span className="text-[#0f2044] font-semibold text-sm">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f2044] py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white font-bold text-3xl sm:text-4xl mb-4">
          Ready to swap skills?
        </h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Join thousands of students already exchanging knowledge on SkillSwap.
        </p>
        <button
          onClick={() => onNav('login')}
          className="bg-[#4caf50] hover:bg-[#3d9a3c] text-white font-semibold px-8 py-3 rounded-lg text-base transition-colors duration-200"
        >
          Get Started Free
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1a36] py-8 px-4 text-center text-gray-400 text-sm">
        <div className="mb-2">
          <span className="text-white font-bold">Skill</span>
          <span className="text-[#4caf50] font-bold">Swap</span>
          <span className="ml-3 text-gray-500 text-xs tracking-widest">LEARN • TEACH • EXCHANGE</span>
        </div>
        <p>© 2026 SkillSwap. All rights reserved.</p>
      </footer>
    </div>
  )
}

function LoginPage({ onNav }: { onNav: (p: Page) => void }) {
  const [email] = useState('aarav@skillswap.in')
  const [password] = useState('password123')

  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm p-10 w-full max-w-md">
        <div className="mb-6">
          <div className="text-[#0f2044] font-bold text-xl leading-none">Skill</div>
          <div className="text-[#4caf50] font-bold text-xl leading-none">Swap</div>
        </div>

        <h2 className="text-[#0f2044] font-bold text-2xl mb-2">Welcome to the demo</h2>
        <p className="text-gray-500 text-sm mb-7 leading-relaxed">
          This preview does not require an account. Continue to see the student dashboard.
        </p>

        <div className="mb-4">
          <label className="block text-[#0f2044] font-semibold text-sm mb-1.5">Email</label>
          <input
            type="email"
            defaultValue={email}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#4caf50]"
          />
        </div>

        <div className="mb-7">
          <label className="block text-[#0f2044] font-semibold text-sm mb-1.5">Password</label>
          <input
            type="text"
            defaultValue={password}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#4caf50]"
          />
        </div>

        <button
          onClick={() => onNav('dashboard')}
          className="w-full bg-[#4caf50] hover:bg-[#3d9a3c] text-white font-semibold py-3 rounded-lg transition-colors duration-200 mb-4"
        >
          Login as Aarav
        </button>

        <button
          onClick={() => onNav('home')}
          className="w-full text-center text-[#4caf50] hover:text-[#3d9a3c] text-sm font-medium transition-colors"
        >
          Back to home
        </button>
      </div>
    </div>
  )
}

function DashboardPage({ onNav }: { onNav: (p: Page) => void }) {
  const stats = [
    { num: 1, label: 'Skills to Teach' },
    { num: 2, label: 'Skills to Learn' },
    { num: 2, label: 'Potential Matches' },
    { num: 1, label: 'Upcoming Sessions' },
  ]

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* Top dark bar */}
      <div className="h-1.5 bg-[#0f2044]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-[#0f2044] font-bold text-3xl sm:text-4xl">
            Welcome, <span className="text-[#4caf50]">Aarav</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">Your SkillSwap overview.</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-[#4caf50] font-extrabold text-4xl mb-1">{s.num}</div>
              <div className="text-gray-600 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Recommended Match */}
        <h2 className="text-[#0f2044] font-bold text-2xl text-center mb-5">Recommended Match</h2>
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-10">
          <Avatar initial="P" size="md" />
          <div className="mt-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-4 mb-1">
                <span className="text-[#0f2044] font-bold text-lg">Priya Patil</span>
                <span className="text-[#4caf50] font-semibold text-sm">100% Match</span>
              </div>
              <p className="text-gray-500 text-sm mb-2">ABC College · ★ 5.0/5</p>
              <p className="text-sm">
                <strong className="text-[#0f2044]">Priya teaches:</strong>{' '}
                <span className="text-gray-600">Python</span>
                {'  '}
                <strong className="text-[#0f2044] ml-4">Priya wants:</strong>{' '}
                <span className="text-gray-600">UI/UX Design</span>
              </p>
            </div>
            <ConnectBtn onClick={() => onNav('explore')} />
          </div>
        </div>

        {/* Upcoming Session */}
        <h2 className="text-[#0f2044] font-bold text-2xl text-center mb-5">Upcoming Session</h2>
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h3 className="text-[#0f2044] font-bold text-base mb-1">Python Basics</h3>
          <p className="text-gray-500 text-sm mb-3">With Priya Patil · 15 October 2026 · 3:00 PM</p>
          <span className="inline-block bg-[#e8f5e9] text-[#3d9a3c] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Upcoming
          </span>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => onNav('explore')}
            className="bg-[#4caf50] hover:bg-[#3d9a3c] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
          >
            Explore Students
          </button>
          <button
            onClick={() => onNav('home')}
            className="border border-gray-300 text-gray-600 hover:border-gray-400 font-medium px-6 py-2.5 rounded-lg text-sm transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

function ExplorePage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All categories')
  const [connected, setConnected] = useState<Set<string>>(new Set())

  const filtered = students.filter((s) => {
    const q = search.toLowerCase()
    const matchesSearch = !q || s.name.toLowerCase().includes(q) || s.teaches.toLowerCase().includes(q) || s.learns.toLowerCase().includes(q)
    const matchesCat =
      category === 'All categories' ||
      (category === 'Programming' && s.teaches.toLowerCase().includes('java')) ||
      (category === 'Design' && (s.teaches.toLowerCase().includes('design') || s.teaches.toLowerCase().includes('graphic'))) ||
      (category === 'Web Development' && (s.teaches.toLowerCase().includes('web') || s.teaches.toLowerCase().includes('html'))) ||
      true
    return matchesSearch && matchesCat
  })

  const toggle = (name: string) =>
    setConnected((prev) => {
      const next = new Set(prev)
      next.has(name) ? next.delete(name) : next.add(name)
      return next
    })

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <div className="h-1.5 bg-[#0f2044]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-[#0f2044] font-extrabold text-4xl mb-7">
          Explore <span className="text-[#4caf50]">Students</span>
        </h1>

        {/* Search bar */}
        <div className="flex gap-3 mb-8">
          <div className="flex items-center border border-gray-300 rounded-xl bg-white px-3 py-0 flex-1 gap-2">
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name or skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 py-3 text-sm text-gray-700 focus:outline-none bg-transparent"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm text-gray-600 bg-transparent focus:outline-none border-l border-gray-200 pl-3 pr-1 py-1"
            >
              <option>All categories</option>
              <option>Programming</option>
              <option>Design</option>
              <option>Web Development</option>
              <option>Video Editing</option>
            </select>
          </div>
          <button className="bg-[#0f2044] hover:bg-[#1a3160] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
            Search
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s) => (
            <div key={s.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Avatar initial={s.initial} />
              <h3 className="text-[#0f2044] font-bold text-base mt-4 mb-1">{s.name}</h3>
              <p className="text-gray-500 text-sm mb-3">
                {s.college} · {s.dept}
              </p>
              <p className="text-sm mb-1">
                <strong className="text-[#0f2044]">Teaches:</strong>{' '}
                <span className="text-gray-600">{s.teaches}</span>
              </p>
              <p className="text-sm mb-4">
                <strong className="text-[#0f2044]">Wants to learn:</strong>{' '}
                <span className="text-gray-600">{s.learns}</span>
              </p>
              <StarRating rating={s.rating} />
              <div className="mt-4">
                <button
                  onClick={() => toggle(s.name)}
                  className={`font-semibold px-5 py-2 rounded-lg transition-colors duration-200 text-sm ${
                    connected.has(s.name)
                      ? 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      : 'bg-[#4caf50] hover:bg-[#3d9a3c] text-white'
                  }`}
                >
                  {connected.has(s.name) ? 'Connected ✓' : 'Connect'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <div className="text-4xl mb-3">🔍</div>
            <p>No students match your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>('home')

  const showNav = page !== 'login'

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {showNav && <Nav current={page} onNav={setPage} />}
      {page === 'home' && <HomePage onNav={setPage} />}
      {page === 'login' && <LoginPage onNav={setPage} />}
      {page === 'dashboard' && <DashboardPage onNav={setPage} />}
      {page === 'explore' && <ExplorePage />}
    </div>
  )
}
