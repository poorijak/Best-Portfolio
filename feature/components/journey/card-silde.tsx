import React from "react";

interface CardSildeProps {
  name_company: string;
  description: string;
}

const CardSilde = ({ name_company, description }: CardSildeProps) => {
  const shotName = name_company.slice(0, 1);

  return (
    <div className="card-slide bg-primary mx-10 h-[125.25px] w-100 shrink-0 rounded-4xl">
      <h1>{shotName}</h1>
    </div>
  );
};

export default CardSilde;
