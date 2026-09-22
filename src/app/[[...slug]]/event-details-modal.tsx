"use client";

import Image from "next/image";
import {
  CalendarDays,
  Clock,
  ExternalLink,
  Info,
  Mail,
  MapPin,
  Phone,
  Ticket,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { EventDetails } from "@/lib/site";

type EventDetailsModalProps = {
  title: string;
  date: string;
  time?: string;
  url?: string;
  details: EventDetails;
};

export function EventDetailsModal({
  title,
  date,
  time,
  url,
  details,
}: EventDetailsModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  // Keep the flyer out of the initial page payload: the dialog body is only
  // mounted once the visitor has actually asked for it.
  const [everOpened, setEverOpened] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const directionsHref = details.address
    ? `https://maps.google.com/?q=${encodeURIComponent(
        `${details.location ? `${details.location}, ` : ""}${details.address}`
      )}`
    : undefined;

  return (
    <>
      <button
        type="button"
        className="button primary inline"
        onClick={() => {
          setEverOpened(true);
          setOpen(true);
        }}
      >
        {details.formEmbedUrl ? "View details & register" : "View details & flyer"} <Info size={14} />
      </button>

      <dialog
        ref={dialogRef}
        className="event-modal"
        aria-label={`${title} details`}
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        onClick={(clickEvent) => {
          // Clicks that land on the dialog itself are backdrop clicks; the
          // content sits inside .event-modal__inner.
          if (clickEvent.target === dialogRef.current) setOpen(false);
        }}
      >
        {everOpened && (
          <div className="event-modal__inner">
            <button
              type="button"
              className="event-modal__close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {details.flyer && (
              <Image
                className="event-modal__flyer"
                src={details.flyer}
                alt={details.flyerAlt ?? `${title} flyer`}
                width={details.flyerWidth ?? 1024}
                height={details.flyerHeight ?? 686}
                sizes="(max-width: 760px) 100vw, 720px"
              />
            )}

            <div className="event-modal__body">
              <h2>{title}</h2>

              <ul className="event-modal__facts">
                <li>
                  <CalendarDays size={18} aria-hidden />
                  <span>{date}</span>
                </li>
                {time && (
                  <li>
                    <Clock size={18} aria-hidden />
                    <span>{time}</span>
                  </li>
                )}
                {(details.location || details.address) && (
                  <li>
                    <MapPin size={18} aria-hidden />
                    <span>
                      {details.location && <strong>{details.location}</strong>}
                      {details.location && details.address && <br />}
                      {details.address &&
                        (directionsHref ? (
                          <a
                            href={directionsHref}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {details.address}
                          </a>
                        ) : (
                          details.address
                        ))}
                    </span>
                  </li>
                )}
                {details.audience && (
                  <li>
                    <Users size={18} aria-hidden />
                    <span>{details.audience}</span>
                  </li>
                )}
                {details.cost && (
                  <li>
                    <Ticket size={18} aria-hidden />
                    <span>{details.cost}</span>
                  </li>
                )}
              </ul>

              {details.intro && <p>{details.intro}</p>}

              {details.speaker && (
                <p>
                  <strong>Guest preacher:</strong> {details.speaker}
                </p>
              )}

              {details.includes && details.includes.length > 0 && (
                <ul className="event-modal__tags">
                  {details.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {details.notes && <p className="event-modal__notes">{details.notes}</p>}

              {(details.contactPhone || details.contactEmail) && (
                <ul className="event-modal__facts">
                  {details.contactPhone && (
                    <li>
                      <Phone size={18} aria-hidden />
                      <a href={`tel:${details.contactPhone.replace(/[^0-9]/g, "")}`}>
                        {details.contactPhone}
                      </a>
                    </li>
                  )}
                  {details.contactEmail && (
                    <li>
                      <Mail size={18} aria-hidden />
                      <a href={`mailto:${details.contactEmail}`}>{details.contactEmail}</a>
                    </li>
                  )}
                </ul>
              )}

              {url && (
                <a
                  className="button primary"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {details.registerLabel ?? "Learn more & register"} <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
