import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Top = () => (
  <>
    <Header />
    <div>
      <h2>Welcome to next.js by TypeScript</h2>
      <Link href="/target">
        <a>About Page</a>
      </Link>
      <div
        onDragStart={(e) => {
          e.dataTransfer.effectAllowed = 'move'
          e.dataTransfer.setData('text/plain', 'icon-move')
        }}
      >
        <img src="/soccer_ball.jpg" width="80px" />
      </div>
    </div>
    <Footer />
  </>
)
export default Top
