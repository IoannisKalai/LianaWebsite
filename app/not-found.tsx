import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg py-24 text-center">
      <h1 className="text-[15px] font-normal text-neutral-900">Page not found</h1>
      <p className="mt-4 text-[13px] text-neutral-500">
        <Link href="/" className="underline-offset-4 hover:underline">
          Return to projects
        </Link>
      </p>
    </div>
  );
}
