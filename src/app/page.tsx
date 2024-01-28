import Image from 'next/image';

export default function Home() {
  return (
    <main className="gradient-primary min-h-dvh">
      <div className="p-6">
        <div className="mask-wrap">
          <Image src="/ovi.png" alt="ovi" width={300} height={300} />
        </div>
      </div>
    </main>
  );
}
