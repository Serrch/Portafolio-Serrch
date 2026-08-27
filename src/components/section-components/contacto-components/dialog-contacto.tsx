import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const CORREO = "SergioRivasPR24@hotmail.com";

export default function DialogContacto({
  children,
}: {
  children: React.ReactNode;
}) {
  async function copyContent() {
    await navigator.clipboard.writeText(CORREO);
    toast("Correo copiado con éxito", {
      action: { label: "Cerrar", onClick: () => {} },
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-2 items-center justify-center text-xl md:text-3xl font-bold">
            Correo
          </DialogTitle>
          <div className="flex items-center justify-center">
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input id="email" disabled type="email" value={CORREO} />
              <Button type="button" variant="outline" onClick={copyContent}>
                Copiar
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
