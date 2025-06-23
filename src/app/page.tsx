import Image from "next/image";
export default function Home() {
  return (
    <div className="text-center p-2">
      <p>
        The Investor Facilitation Portal (IFP) is the online single point
        interface of the Government of Gujarat to facilitate Investors...
      </p>
      <Image
        src="/logo.png"
        alt="Investor Facilitation Portal Logo"
        width={500}
        height={500}
        priority
      />
    </div>
  );
}
