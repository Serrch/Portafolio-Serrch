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
export default function DialogContacto({
  children,
  IsCorreo,
}: {
  children: React.ReactNode;
  IsCorreo: boolean;
}) {
  const correo = "SergioRivasPR24@hotmail.com";
  const telefono = "6624274119";

  async function copyContent() {
    toast(
      `${IsCorreo ? "Correo copiado con exito" : "Telefono copiado con exito"}`,
      {
        action: {
          label: "Cerrar",
          onClick: () => console.log("cerrar"),
        },
      }
    );
    navigator.clipboard.writeText(IsCorreo ? correo : telefono);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-2 items-center justify-center text-xl md:text-3xl font-bold">
            {IsCorreo ? "Correo" : "Telefono"}
          </DialogTitle>
          <div className="flex items-center justify-center">
            {IsCorreo ? (
              <div className="flex w-full max-w-sm items-center gap-2">
                <Input id="email" disabled type="email" value={correo} />
                <Button type="button" variant="outline" onClick={copyContent}>
                  Copiar
                </Button>
              </div>
            ) : (
              <div className="flex w-full max-w-sm items-center gap-2">
                <Input id="phone" disabled type="text" value={telefono} />
                <Button type="button" variant="outline" onClick={copyContent}>
                  Copiar
                </Button>
              </div>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
