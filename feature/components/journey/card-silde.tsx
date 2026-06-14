import { cn } from "@/lib/utils";
import React from "react";
import { JourneyDataType } from "./data/data";

interface CardSildeProps {
  data: JourneyDataType
}


const CardSilde = ({ data }: CardSildeProps) => {
  const { name_company, description, isCurrent } = data
  const shotName = name_company.slice(0, 1);

  return (
    <div className={cn("card-slide mx-10 aspect-3/4 h-[60vh] shrink-0 rounded-[20px] ", isCurrent ? "bg-primary" : "bg-white")}>
      <h1>{shotName}</h1>
    </div>
  );
};

export default CardSilde;
