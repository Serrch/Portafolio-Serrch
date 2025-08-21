import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TechStackTypes } from "@/types/tech-stack-types/tech-stack-types";
import ChooseIconStack from "./choose-icon-stack";
export default function StackDialog({
  children,
  techObj,
}: {
  children: React.ReactNode;
  techObj: TechStackTypes;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-2 items-center justify-center text-xl md:text-3xl font-bold">
            <ChooseIconStack
              name={techObj.name}
              color={techObj.color}
              hoverColor={techObj.hoverColor}
              originalColor={true}
              size="lg"
            />
            {techObj.name}
          </DialogTitle>
          <DialogDescription className="text-base md:text-xl dark:text-zinc-300 text-justify">
            {techObj.desc}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
