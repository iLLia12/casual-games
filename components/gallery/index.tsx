import Image from "next/image";

export default function Gallery() {
  return (
    <div className="mx-auto max-w-[1960px] p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="border-4 row-start-1 row-end-3 border-white rounded-md bg-[#fba35b] relative p-8">
          <div className="flex justify-center text-3xl mb-6 text-center">
            Random text here
          </div>
          <div className="flex justify-center">
            <div className="rounded-full overflow-hidden inline-block bg-[#fa8500]">
              <Image
                src="/img/avatar.png"
                width={120}
                height={120}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="flex justify-center text-lg mb-6 text-center mt-6 italic">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy text ever since the 1500s
          </div>
        </div>
        <div className="rounded-md h-[300px] bg-[#fee7b9] overflow-hidden relative">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src="/img/game-11.jpg"
            fill
            alt="Picture of the author"
          />
        </div>
        <div className="rounded-md h-[300px] overflow-hidden relative">
          <Image src="/img/game-2.jpg" fill alt="Picture of the author" />
        </div>
        <div className="rounded-md h-[300px] overflow-hidden relative">
          <Image src="/img/game-13.png" fill alt="Picture of the author" />
        </div>
        <div className="rounded-md h-[300px] overflow-hidden relative">
          <Image src="/img/game-12.png" fill alt="Picture of the author" />
        </div>
        <div className="rounded-md h-[300px] overflow-hidden relative">
          <Image src="/img/game-5.jpg" fill alt="Picture of the author" />
        </div>
        <div className="rounded-md h-[300px] overflow-hidden relative">
          <Image src="/img/game-6.jpg" fill alt="Picture of the author" />
        </div>
        <div className="rounded-md h-[300px] bg-[#fee7b9] overflow-hidden relative">
          <Image src="/img/game-7.jpg" fill alt="Picture of the author" />
        </div>
        <div className="rounded-md h-[300px] overflow-hidden relative">
          <Image src="/img/game-8.webp" fill alt="Picture of the author" />
        </div>
        <div className="rounded-md h-[300px] bg-[#fba35b] overflow-hidden relative">
          <Image src="/img/game-9.webp" fill alt="Picture of the author" />
        </div>
        <div className="rounded-md h-[300px] overflow-hidden relative">
          <Image
            src="/img/game-14.webp"
            fill={true}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
