"use client";
import { useState, type ReactNode } from "react";

export function Blk({
  id,
  index,
  title,
  sub,
  color,
  children,
}: {
  id: string;
  index: string;
  title: string;
  sub: string;
  color: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <section className={`blk c-${color}${open ? " open" : ""}`} id={id}>
      <button
        className="blk-head"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="blk-idx">{index}</span>
        <span className="blk-mid">
          <span className="blk-title">{title}</span>
          <span className="blk-sub">{sub}</span>
        </span>
        <span className="blk-arrow">
          <svg viewBox="0 0 24 24">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </span>
      </button>
      <div className="blk-panel">
        <div className="blk-inner">
          <div className="tray">{children}</div>
        </div>
      </div>
    </section>
  );
}
