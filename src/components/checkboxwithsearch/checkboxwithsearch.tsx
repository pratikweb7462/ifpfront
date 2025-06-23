"use client";
import Image from "next/image";

type CheckboxWithSearchProps = {
  label: string;
  logo: string;
};

const CheckBoxTheSearch = ({ label, logo }: CheckboxWithSearchProps) => {
  return (
    <div className="d-flex align-items-center mb-2">
      <input type="checkbox" className="me-2" />
      <Image src={logo} alt={label} width={24} height={24} className="me-2" />
      <span>{label}</span>
    </div>
  );
}

export default CheckBoxTheSearch;