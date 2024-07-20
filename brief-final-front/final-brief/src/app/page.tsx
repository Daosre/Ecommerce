import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full h-screen">
      <div className="flex flex-col items-center text-center">
        <Image src={'/Saucisson.png'} width={250} height={100} alt="Logo" className="border border-black rounded-3xl mt-10" />
        <div className="w-full h-full flex flex-col place-content-center">
        <p className="p-10">Bienvenue sur notre site dédié aux amoureux du saucisson ! Découvrez notre sélection artisanale de saucissons authentiques, fabriqués avec passion et tradition pour ravir vos papilles à chaque bouchée.
        Pour s’incrire cliquer <Link href={'/register'}>ici.</Link> 
          </p>
        <p className="p-4">Si vous faite déjà partie du cercle veuillez vous connectez en cliquant <Link href={'/login'}> ici.</Link></p>
        </div>
        </div>
      
    </main>
  );
}
