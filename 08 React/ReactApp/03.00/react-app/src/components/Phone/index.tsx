export function Phone({ phone }: PhoneProps) {
  const codeArea = phone.substring(0, 3);
  const rest = phone.substring(3);

  return (
    <p>
      Phone: ({codeArea}){rest}
    </p>
  );
}
