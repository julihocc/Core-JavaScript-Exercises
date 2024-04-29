 

export function Phone({ phone }) {
  const codeArea = phone.substring(0, 3);
  const rest = phone.substring(3);

  return (
    <p>
      Phone: ({codeArea}){rest}
    </p>
  );
}

 