interface StepProps {
  number: number;
  title: string;
  desc: string;
  color: string;
}
export default function Step({ number, title, desc, color }: StepProps) {
  return (
    <article className="p-3 bg-white rounded-lg shadow-lg sm:max-w-3/12 m-3">
      <header className="flex flex-col space-x-4">
        <h3 className="text-3xl font-semibold" style={{ color: color }}>
          {number}
        </h3>
        <h4 className="font-bold text-xl">{title}</h4>
      </header>
      <p className="text-sm leading-normal">{desc}</p>
    </article>
  );
}
