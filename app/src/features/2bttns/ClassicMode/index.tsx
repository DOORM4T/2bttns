import { useMutation } from "@tanstack/react-query";
import ClassicButton, { ClassicButtonProps } from "./ClassicButton";
import { Item, Results } from "./types";
import use2bttnsMachine, { Use2bttnsMachineConfig } from "./use2bttnsMachine";

export type RenderPropParams = {
  button1: React.ReactNode;
  button2: React.ReactNode;
  context: ReturnType<typeof use2bttnsMachine>["context"];
  isFinished: ReturnType<typeof use2bttnsMachine>["isFinished"];
};

export type ClassicModeProps<T extends Item> = {
  // TODO: Replace Item type with GameObject type
  items: T[];
  children: (params: RenderPropParams) => JSX.Element;
  hotkeys?: Use2bttnsMachineConfig["hotkeys"];
  button1Props?: Partial<ClassicButtonProps>;
  button2Props?: Partial<ClassicButtonProps>;

  // TODO: Allow for custom ReactNode rendering of items
  renderItem?: (item: T) => string;
};

export default function ClassicMode<T extends Item>({
  items,
  hotkeys,
  children,
  button1Props,
  button2Props,
  renderItem = (item) => item.id,
}: ClassicModeProps<T>) {
  // @TODO: pass proper game_id and user_id
  const submitResultsMutation = useMutation({
    mutationFn: async (newResult: Results) => {
      const response = await fetch(`/api/games/${2}/round-results/${2}`, {
        method: "POST",
        body: JSON.stringify(newResult),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  const { registerButton, current_options, isFinished, context } =
    use2bttnsMachine({
      items,
      hotkeys,
      onFinish: async (results) => {
        try {
          await submitResultsMutation.mutateAsync(results);
        } catch (error) {
          console.error(error);
        }
      },
    });

  return children({
    button1: registerButton({
      button: "first",
      buttonComponent: (
        <ClassicButton hotkey={hotkeys?.first[0]} {...button1Props}>
          {current_options.first
            ? renderItem(current_options.first as any)
            : ""}
        </ClassicButton>
      ),
    }),
    button2: registerButton({
      button: "second",
      buttonComponent: (
        <ClassicButton hotkey={hotkeys?.second[0]} {...button2Props}>
          {current_options.second
            ? renderItem(current_options.second as any)
            : ""}
        </ClassicButton>
      ),
    }),
    context,
    isFinished,
  });
}