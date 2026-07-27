export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-center text-zinc-400">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-lg font-medium text-white">
          Satya Srinivas G
        </p>

        <p className="mt-2">
          Aspiring Software Engineer
        </p>

        <p className="mt-6 text-sm">
          © {new Date().getFullYear()} Satya Srinivas G. All rights reserved.
        </p>
      </div>
    </footer>
  );
}