import CreateBookWizard from "@/components/create/CreateBookWizard";

export const metadata = {
  title: "Create Your Personalised Colouring Book",
  description: "Design a truly unique colouring book personalised for your child — cover character, pages, and name.",
};

export default function CreatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <CreateBookWizard />
    </main>
  );
}
