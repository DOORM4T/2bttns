import Footer from "./components/Footer";
import PreviewLinkCardsHome from "./components/PreviewLinkCard/containers/PreviewLinkCardsHome";

export default function Home() {
  return (
    <>
      <div>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="p-10">
            <h1 className="text-2xl">Welcome to the 2bttns admin console!</h1>
          </div>

          <PreviewLinkCardsHome />
        </main>
        <Footer />
      </div>
    </>
  );
}
