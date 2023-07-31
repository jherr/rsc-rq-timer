import RQProvider from "./_components/RQProvider";
import RQTimer from "./_components/RQTimer";

export default function Home() {
  const timerPromise = fetch("http://localhost:3000/api/timer", {
    cache: "no-cache",
  }).then((res) => res.json());

  return (
    <RQProvider>
      <main className="max-w-3xl mx-auto mt-5">
        <RQTimer timerPromise={timerPromise} />
      </main>
    </RQProvider>
  );
}
