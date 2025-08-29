import TimelineSection from "./timeline-section";
import { CardTypes } from "@/types/sobre-mi-types/card-types";
export default function TimelineContainer({
  experienciaInfo,
}: {
  experienciaInfo: CardTypes[];
}) {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {experienciaInfo.map((experiencia, index) => (
        <div key={index}>
          <TimelineSection experienciaInfo={experiencia}></TimelineSection>
        </div>
      ))}
    </ol>
  );
}
