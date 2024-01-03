import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <header className="lg:self-start lg:sticky lg:col-span-3 lg:top-10">
      <Image
        className="rounded-full mt-10 shadow-xl "
        src="/avatar.png"
        width="150"
        height="150"
        alt="avatar"
      ></Image>

      <p className="py-2 text-xl mt-5 font-black text-black">
        job role <span className="text-primary">@company</span>
      </p>
      <p>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae!
      </p>

      <a
        href="https://www.linkedin.com/"
        target="_blank"
        className="flex pt-6 font-semibold text-black transition hover:text-primary"
      >
        Linkedin &#8594;
      </a>
    </header>
  );
}
