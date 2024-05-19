import PreviewLinkCardsHome from "@/app/components/PreviewLinkCard/containers/PreviewLinkCardsHome";

export default function Home() {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-2xl">Welcome to the 2bttns admin console!</h1>
      </div>

      <PreviewLinkCardsHome />
    </div>
  );
}
