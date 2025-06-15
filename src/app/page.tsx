import { EmailParser } from "@/components/email-parser";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Smart Email-to-Receipt Converter
          </h1>
          <p className="text-gray-600">
            Convert donation confirmation emails into professional tax receipts
          </p>
        </header>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <EmailParser />
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 Charity Receipt Generator</p>
        </footer>
      </div>
    </main>
  );
};
export default Home;
