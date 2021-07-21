import Link from "next/link";

export default function Navbar() {
  return(
         <header className="header row">
              <nav className="main-nav">
                  <ul>
                      <li><Link href="/" ><a >Home</a></Link></li>
                      <li><Link href="#"><a>About Me</a></Link></li>
                      <li><Link href="#"><a>Contact Me</a></Link></li>
                  </ul>
                  <ul>
                      <li><div className="">
                      Socials
                  </div></li>
                  </ul>    
              </nav>
          </header>
  )
}


