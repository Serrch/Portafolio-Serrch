import { EducationCardType } from "@/types/education-types/education-types";
import TimelineSection from "./timeline-section";
export default function EducationTimeline({
  educationInfo,
}: {
  educationInfo: EducationCardType[];
}) {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {educationInfo.map((educationInfo, index) => (
        <div key={index}>
          <TimelineSection educationInfo={educationInfo}></TimelineSection>
        </div>
      ))}
    </ol>
  );
}
