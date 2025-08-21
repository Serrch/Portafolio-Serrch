"use client";
import { TechStackTypes } from "@/types/tech-stack-types/tech-stack-types";
import ChooseIconStack from "./choose-icon-stack";
import StackDialog from "./stack-dialog";
export default function TechCards({ techObj }: { techObj: TechStackTypes }) {
  return (
    <StackDialog techObj={techObj}>
      <div className="group grid grid-cols-3 gap-2 justify-around border dark:border-zinc-700 shadow-md rounded-3xl p-2 md:p-4 transition duration-200 ease-in-out hover:bg-accent hover:scale-105 cursor-pointer">
        <div className="col-span-1 flex items-center justify-center">
          <ChooseIconStack
            name={techObj.name}
            color={techObj.color}
            hoverColor={techObj.hoverColor}
            size="lg"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-1 justify-center items-start">
          <h4 className="scroll-m-20 text-xl md:text-2xl tracking-tight">
            {techObj.name}
          </h4>
          <p className="text-muted-foreground text-sm">{techObj.shortDesc}</p>
        </div>
      </div>
    </StackDialog>
  );
}
