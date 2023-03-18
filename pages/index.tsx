import type { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { Layout } from "~/components/Layout";
import { Auth } from "~/components/Auth";
import { ActionButton } from "~/components/atoms/ActionButton";
import { SingleSelectInput } from "~/components/atoms/SingleSelectInput";
import { MultiSelectInput } from "~/components/atoms/MultiSelectInput";
import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

const options = [
  { value: 0, label: "Option 1" },
  { value: 1, label: "Option 2" },
  { value: 2, label: "Option 3" },
];

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <Layout title="Login">
        <Auth />
      </Layout>
    );
  }
  return (
    <Layout title="Todo App">
      <ArrowLeftOnRectangleIcon
        className="h-6 w-6 cursor-pointer text-blue-600"
        onClick={() => signOut()}
      />
      <p className="my-3 text-xl text-blue-600">{session?.user?.name}</p>
      <ActionButton type="sub" callback={() => console.log(session)}>
        hoge
      </ActionButton>
      <SingleSelectInput options={options} />
      <MultiSelectInput options={options} />
      <XMarkIcon />
    </Layout>
  );
};

export default Home;
