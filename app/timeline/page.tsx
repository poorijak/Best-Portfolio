import WorksTimeline from "@/feature/components/timeline/timeline-works";
import React from "react";

const page = () => {
  return (
    <div className="bg-background pt-20">
      <WorksTimeline isFull={true} />
    </div>
  );
};

export default page;
