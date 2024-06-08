import CreateGameForm from "@/app/components/CreateGameForm";

export default function Home() {
  return (
    <div>
      <CreateGameForm
        loading={false}
        // onSubmit={() => {}}
        initialValue={{
          email: "duck@kisser.de",
          password: "",
        }}
      />
    </div>
  );
}
