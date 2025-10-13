import { SignUp } from "@clerk/nextjs";
import { div } from "motion/react-client";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <SignUp />
    </div>
  );
}
