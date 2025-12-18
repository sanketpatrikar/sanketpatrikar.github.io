import { createFileRoute } from '@tanstack/react-router'
import { Mail, Github, Twitter, Linkedin } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {

  const contactLinks = [
    { href: 'mailto:sanketspatrikar@gmail.com', label: 'sanketspatrikar@gmail.com', icon: Mail },
    { href: 'https://github.com/sanketpatrikar', label: 'github.com/sanketpatrikar', icon: Github },
    { href: 'https://x.com/patrikarsanket', label: 'x.com/patrikarsanket', icon: Twitter },
    { href: 'https://linkedin.com/in/sanketpatrikar', label: 'linkedin.com/in/sanketpatrikar', icon: Linkedin }
  ]

  return (
    <div className="flex flex-col justify-between min-h-screen relative pt-20 px-6 overflow-hidden">
      <div id="hero" className=''>
        <div className="flex gap-6 mb-6">
          <h1 className="text-6xl md:text-7xl [letter-spacing:-0.052em]">
            <span className="">Sanket Patrikar</span>
          </h1>
        </div>
        <p className="text-lg max-w-3xl mb-8">
          Full-stack developer focused on building simple, scalable products. Working primarily with React, TypeScript, and Postgres.
        </p>
      </div>
      {/* aiming to render this in bottom left of screen */}
      <div id="contact-section" className='mb-8'>
        <h2 className="text-2xl pt-8 mb-5">Contact</h2>
        <div className="space-y-2">
          {contactLinks.map((link) => (
            <p key={link.href}>
              <a href={link.href} className='inline-flex gap-2 items-center'>
                <link.icon />
                {link.label}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
