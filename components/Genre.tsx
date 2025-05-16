export default function Genre({ title, clas = "" }) {
  return (
    <div
      className={`inline px-1 bg-accent text-dark rounded-[3px] font-medium text-size-6 ${clas}`}
    >
      {title}
    </div>
  );
}
