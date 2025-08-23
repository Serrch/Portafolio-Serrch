import EducationCards from "./education-cards";
import { educationObj } from "./education-obj";
export default function Educacion() {
  return (
    <section
      id="educacion"
      className="md:min-h-screen snap-start flex items-center justify-center pt-8 md:pt-30  border-t"
    >
      <div className="flex flex-col gap-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-start">Educacion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-stretch">
          {educationObj.map((educationInfo, index) => (
            <EducationCards key={index} educationInfo={educationInfo} />
          ))}
        </div>
      </div>
    </section>
  );
}
