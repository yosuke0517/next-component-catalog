import { signIn } from "next-auth/react";

export const Auth = () => {
  return (
    <div className="flex flex-col">
      <ul className="grid gap-4">
        <li>
          <button
            className="w-full rounded bg-blue-600 py-2 px-4 font-bold text-white hover:opacity-80"
            onClick={() => signIn("github")}
          >
            GitHub アカウントでログイン
          </button>
        </li>
        <li>
          <button
            className="w-full rounded bg-gray-800 py-2 px-4 font-bold text-white hover:opacity-80"
            onClick={() => signIn()}
          >
            メールでログイン
          </button>
        </li>
      </ul>
    </div>
  );
};
