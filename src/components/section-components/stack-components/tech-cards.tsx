"use client";
import { TechStackTypes } from "@/types/tech-stack-types/tech-stack-types";
import ChooseIconStack from "./choose-icon-stack";
import StackDialog from "./stack-dialog";
import { techLabel } from "@/lib/tech-label";

export default function TechCards({ techObj }: { techObj: TechStackTypes }) {
  return (
    <StackDialog techObj={techObj}>
      <button
        type="button"
        className="flex cursor-pointer items-center gap-2 rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
      >
        <ChooseIconStack
          name={techObj.name}
          color={techObj.color}
          hoverColor={techObj.hoverColor}
          originalColor
          size="xs"
        />
        {techLabel(techObj.name)}
      </button>
    </StackDialog>
  );
}
