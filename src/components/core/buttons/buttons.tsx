import React from "react";
import Link from "next/link";

interface ButtonsProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Buttons({
  label,
  href,
  onClick,
  className = "",
}: ButtonsProps) {
  const content = <span className="btn-text">{label}</span>;

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        onClick={onClick}
        title={label}
        data-text={label}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      title={label}
      data-text={label}
    >
      {content}
    </button>
  );
}
