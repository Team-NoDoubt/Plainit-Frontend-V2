import { useCallback, useState } from "react";

export type InputType =
  | React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  | React.MouseEvent<HTMLInputElement, MouseEvent>;

export const useInput = <T>(initialForm?: T) => {
  const [form, setForm] = useState<T>(initialForm as T);
  const onChange = useCallback((e: InputType) => {
    const { name, value } = e.currentTarget;
    if (typeof initialForm === "object") {
      setForm((form) => ({ ...form, [name]: value }));
    } else {
      setForm(value as unknown as T);
    }
  }, []);
  return { form, onChange, setForm };
};