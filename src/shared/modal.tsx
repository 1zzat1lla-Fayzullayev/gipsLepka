/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";

export function formatPhoneNumber(input: string) {
  const digitsOnly = input.replace(/\D/g, "");
  const formattedNumber = digitsOnly.startsWith("998")
    ? digitsOnly
    : "998" + digitsOnly.slice(0, 9);

  let result = "+" + formattedNumber.slice(0, 3);
  if (formattedNumber.length > 3) {
    result += " (" + formattedNumber.slice(3, 5);
    if (formattedNumber.length > 5) {
      result += ") " + formattedNumber.slice(5, 8);
      if (formattedNumber.length > 8) {
        result += "-" + formattedNumber.slice(8, 10);
        if (formattedNumber.length > 10) {
          result += "-" + formattedNumber.slice(10, 12);
        }
      }
    }
  }
  return result;
}

export const phoneValidate =
  /^\+998 \((90|91|93|94|95|97|98|99|33|88|71|55)\) \d{3}-\d{2}-\d{2}$/;

function DialogDemo({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    phone: "+998 ",
    loading: false,
  });

  const TELEGRAM_BOT_TOKEN = "7969735240:AAERQOTJXZ5zGX7qLuN8tIPBDxjLxZH1f44";
  const TELEGRAM_CHAT_ID = "-1002580882498";
  const URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phoneValidate.test(form.phone)) {
      toast.error("Iltimos, telefon raqamni to'g'ri kiriting!");

      return;
    }
    setForm((prev) => ({ ...prev, loading: true }));

    const text = `📩 Yangi mijoz!\n\n👤 Ism: ${form.name}\n📞 Telefon: ${form.phone}`;

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
        }),
      });

      const data = await res.json();
      if (data.ok) {
        toast.success("So'rovingiz uchun rahmat. Tez orada siz bilan bog'lanamiz!");

        setForm({ name: "", phone: "+998 ", loading: false });
        onClose();
      } else {
        throw new Error("Xabar yuborilmadi");
      }
    } catch (err) {
      toast.error("Xatolik! Iltimos, qaytadan urinib ko'ring.");
      setForm((prev) => ({ ...prev, loading: false }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const rawDigits = input.replace(/\D/g, "");

    if (rawDigits.length <= 3) {
      setForm((prev) => ({ ...prev, phone: "+998 " }));
      return;
    }
    setForm((prev) => ({ ...prev, phone: formatPhoneNumber(rawDigits) }));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Murojaat uchun</DialogTitle>
          <DialogDescription>
            Hurmatli mijoz! Biz bilan bog‘lanish juda oson! Pastdagi
            ma’lumotlarni to‘ldiring va biz siz bilan tez orada aloqaga
            chiqamiz! 😊
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Ismingiz</Label>
            <Input
              id="name"
              placeholder="Ismingizni kiriting"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Telefon raqam</Label>
            <Input
              id="phone"
              placeholder="+998 XX XXX-XX-XX"
              value={form.phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={form.loading}>
              {form.loading ? "Yuborilmoqda..." : "Yuborish"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DialogDemo;
