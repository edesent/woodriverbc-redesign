import { redirect } from "next/navigation";

export const metadata = {
  title: "Spurgeon Morning Meditation — Wood River Baptist Church",
};

export default function SpurgeonMorningPage() {
  redirect("https://www.sermonaudio.com/daily-devotional/morning");
}
