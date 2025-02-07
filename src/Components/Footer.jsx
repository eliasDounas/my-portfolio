export const Footer = () => {
  return (
    <p className="text-gray-500 text-sm max-w-[600px] lg:p-6 my-20">
      Based on{" "}
      <a
        href="https://brittanychiang.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 cursor-pointer hover:underline"
      >
        Brittany Chiang&apos;s website
      </a>{" "}
      (they&apos;re awesome). All design credits go to Brittany Chiang. Coded
      from scratch in{" "}
      <a
        href="https://code.visualstudio.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 cursor-pointer hover:underline"
      >
        Visual Studio Code
      </a>
      . Built with{" "}
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 cursor-pointer hover:underline"
      >
        Next.js
      </a>{" "}
      and{" "}
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 cursor-pointer hover:underline"
      >
        Tailwind CSS
      </a>
      . Deployed with{" "}
      <a
        href="https://vercel.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 cursor-pointer hover:underline"
      >
        Vercel
      </a>
      .
    </p>
  );
};
