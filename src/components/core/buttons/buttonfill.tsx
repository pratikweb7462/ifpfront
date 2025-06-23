import Link from "next/link";

interface ButtonFillProps {
  label: string;
  href?: string; // optional
  onClick?: () => void; // optional
}

export default function ButtonFill({ label, href, onClick }: ButtonFillProps) {
  const className = "btn btn-outline-primary";

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  );
}
