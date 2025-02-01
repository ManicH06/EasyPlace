'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

type FooterLink = {
  href: string;
  label: string;
}

type FooterSection = {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'À propos',
    links: [
      { href: '/notre-histoire', label: 'Notre Histoire' },
      { href: '/equipe', label: 'L\'équipe' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/boutiques', label: 'Créer ma boutique' },
      { href: '/boutiques/help', label: 'Accompagnement' },
    ],
  },
  {
    title: 'Une question ?',
    links: [
      { href: '/contact', label: 'Contact' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
]

function FooterSection({ section }: { section: FooterSection }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-slate-600 last:border-b-0">
      <button type='button'
        className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-700 focus:ring-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {section.title}
        {isOpen ? <FaChevronCircleUp className="h-5 w-5" /> : <FaChevronCircleDown className="h-5 w-5" />}
      </button>
      {isOpen && (
        <ul className="pb-4 space-y-2">
          {section.links.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className="block py-2 px-4 hover:bg-slate-600 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-700 focus:ring-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-700 text-white w-full" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4 md:hidden">
          {footerSections.map((section) => (
            <FooterSection key={section.title} section={section} />
          ))}
        </div>
        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-700 focus:ring-white rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-slate-600 text-center text-sm">
          <p>
            © {currentYear} EasyPlace. Notre équipe locale vous accompagne à chaque étape de votre présence digitale.
          </p>
        </div>
      </div>
    </footer>
  )
}
