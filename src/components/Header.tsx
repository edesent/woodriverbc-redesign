"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { events, navGroups, primaryNav, site } from "@/lib/site";

const featuredVbsEvent = events[0];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="top-strip">
        <Link className="top-strip-announcement" href={featuredVbsEvent.url ?? "/events"}>
          <span>
            {featuredVbsEvent.title}: {featuredVbsEvent.date} • {featuredVbsEvent.time}
          </span>
          <strong>Register now</strong>
        </Link>
      </div>
      <nav className="main-nav" aria-label="Primary navigation">
        <Link className="brand" href="/" onClick={close}>
          <Image src="/woodriver/wood-riverctosses-tight.png" alt="" width={140} height={140} priority />
          <span>
            <strong>{site.name}</strong>
            <small>{site.tagline}</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
          <span className="sr-only">Toggle menu</span>
        </button>

        <div className="desktop-links">
          {primaryNav.map(([label, href]) => (
            <Link className={pathname === href ? "active" : ""} href={href} key={href}>
              {label}
            </Link>
          ))}
          {navGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <button type="button">{group.label}</button>
              <div className="nav-menu">
                {group.items.map(([label, href]) =>
                  href.startsWith("http") ? (
                    <a href={href} key={href}>
                      {label}
                    </a>
                  ) : (
                    <Link href={href} key={href}>
                      {label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </nav>

      <div className={`mobile-menu ${open ? "open" : ""}`} id="mobile-menu">
        {primaryNav.map(([label, href]) => (
          <Link href={href} key={href} onClick={close}>
            {label}
          </Link>
        ))}
        {navGroups.map((group) => (
          <section key={group.label}>
            <h2>{group.label}</h2>
            {group.items.map(([label, href]) =>
              href.startsWith("http") ? (
                <a href={href} key={href} onClick={close}>
                  {label}
                </a>
              ) : (
                <Link href={href} key={href} onClick={close}>
                  {label}
                </Link>
              ),
            )}
          </section>
        ))}
      </div>
    </header>
  );
}
