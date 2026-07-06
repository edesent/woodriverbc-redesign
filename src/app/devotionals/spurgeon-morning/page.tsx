import { redirect } from "next/navigation";

export const metadata = {
  title: "Spurgeon's Morning and Evening — Wood River Baptist Church",
};

export default function SpurgeonMorningPage() {
  redirect("/devotionals/spurgeon-morning-evening");
}
