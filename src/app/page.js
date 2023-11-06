"use client"
import { Dictionary } from '@/components/Dictionary'
import './styles.css'


export default function Home() {
  return (
    <div className="App">
    <header>
      <nav className="nav-container">
        <img src="LogosSphere.png" alt="" />
      </nav>
    </header>
    <div className='cta'>
    <Dictionary />
    <img className="bust" src='bust.png'/>
    </div>
  </div>
  )
}
