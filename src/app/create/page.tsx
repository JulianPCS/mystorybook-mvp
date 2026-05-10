import CreateBookWizard from "@/components/create/CreateBookWizard";

export const metadata = {
  title: "Create Your Personalized Coloring Book",
  description: "Design a truly unique coloring book personalized for your child — cover character, pages, and name.",
};

export default function CreatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <CreateBookWizard />
    </main>
  );
}
