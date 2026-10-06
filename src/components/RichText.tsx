// Renders `inline code` spans from program metadata without injecting HTML.
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("`").map((part, i) =>
        i % 2 ? <code key={i}>{part}</code> : part,
      )}
    </>
  );
}
