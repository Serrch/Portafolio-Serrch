import { EducationCardType } from "@/types/education-types/education-types";
import RedirectButton from "../redirect-button";

export default function EducationCards({
  educationInfo,
}: {
  educationInfo: EducationCardType;
}) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-6">
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
          {educationInfo.kind}
        </span>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {educationInfo.endDate
            ? `${educationInfo.stDate} — ${educationInfo.endDate}`
            : educationInfo.stDate}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold tracking-tight">
        {educationInfo.title}
      </h3>
      <p className="mt-0.5 text-sm text-muted-foreground">
        {educationInfo.institution}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {educationInfo.description}
      </p>

      {educationInfo.certificationLink && (
        <div className="mt-auto pt-4">
          <RedirectButton
            link={educationInfo.certificationLink}
            texto="Ver certificado"
          />
        </div>
      )}
    </article>
  );
}
