import ChooseIconStack from "@/components/section-components/stack-components/choose-icon-stack";
import StackDialog from "@/components/section-components/stack-components/stack-dialog";
import { TECHS } from "@/components/section-components/stack-components/tech-obj";
import { techLabel } from "@/lib/tech-label";
import { TechOptions } from "@/types/sobre-mi-types/card-types";

// Tecnologías que aparecen en proyectos o experiencia pero no en el tech stack:
// sin esto su icono saldría gris mientras el resto sale a color.
const COLOR_EXTRA: Partial<Record<TechOptions, string>> = {
  MySQL: "text-sky-600 dark:text-sky-500",
  Arduino: "text-teal-500 dark:text-teal-400",
  Swagger: "text-green-600 dark:text-green-500",
};

const BASE =
  "flex items-center gap-2 rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground";

/** `interactive` abre el modal del tech stack; sin él la pastilla es decorativa. */
export default function Pill({
  tech,
  interactive,
}: {
  tech: TechOptions;
  interactive?: boolean;
}) {
  const techObj = TECHS[tech];

  const contenido = (
    <>
      <ChooseIconStack
        name={tech}
        color={techObj?.color ?? COLOR_EXTRA[tech] ?? ""}
        hoverColor=""
        originalColor
        size="xs"
      />
      {techLabel(tech)}
    </>
  );

  return (
    <li>
      {interactive && techObj ? (
        <StackDialog techObj={techObj}>
          <button
            type="button"
            className={`${BASE} cursor-pointer transition-colors hover:border-brand hover:text-foreground`}
          >
            {contenido}
          </button>
        </StackDialog>
      ) : (
        <span className={BASE}>{contenido}</span>
      )}
    </li>
  );
}
