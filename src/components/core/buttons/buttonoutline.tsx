import Link from "next/link";

interface ButtonOutlineProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

export default function ButtonOutline({
  label,
  href,
  onClick,
}: ButtonOutlineProps) {
  const buttonClass = "btn btn-outline-light";

  if (href) {
    return (
      <Link href={href} className={buttonClass} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
}
