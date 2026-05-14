import { Facebook, Instagram, Mail, MapPin, Mic2, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navGroups, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <section>
          <Image className="footer-logo" src="/woodriver/wood-riverctosses-teal.png" alt="" width={260} height={260} />
          <h2>{site.name}</h2>
          <p>{site.tagline}</p>
        </section>
        <section>
          <h2>Visit</h2>
          <p>
            <MapPin size={16} /> {site.address}
          </p>
          <p>
            <Phone size={16} /> {site.phone}
          </p>
          <p>
            <Mail size={16} /> {site.email}
          </p>
        </section>
        <section>
          <h2>Pages</h2>
          <Link href="/#services">Services</Link>
          <Link href="/events">Events</Link>
          <Link href="/thy-word-is-a-lamp-unto-my-feet">Thy Word</Link>
          <Link href="/who-is-jesus">Who Is Jesus</Link>
        </section>
        <section>
          <h2>Connect</h2>
          <a href={site.facebook}>
            <Facebook size={16} /> Facebook
          </a>
          <a href={site.instagram}>
            <Instagram size={16} /> Instagram
          </a>
          <a href={site.podcast}>
            <Mic2 size={16} /> Podcast
          </a>
          <a href={`mailto:${site.email}`}>
            <Mail size={16} /> Email
          </a>
        </section>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <div>
          {navGroups[1].items.slice(0, 4).map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
