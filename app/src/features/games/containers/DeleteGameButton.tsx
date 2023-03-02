import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { Game } from "@prisma/client";
import { api } from "../../../utils/api";

export type DeleteGameButtonProps = {
  gameId: Game["id"];
  onDeleted?: () => void;
};

export default function DeleteGameButton(props: DeleteGameButtonProps) {
  const { gameId, onDeleted } = props;

  const utils = api.useContext();
  const deleteGameMutation = api.games.deleteById.useMutation();
  const handleDeleteGame = async () => {
    try {
      await deleteGameMutation.mutateAsync({ id: gameId });
      if (onDeleted) {
        onDeleted();
      }
      await utils.games.invalidate();
    } catch (error) {
      window.alert("Error deleting game\n See console for details");
      console.error(error);
    }
  };

  return (
    <Tooltip label={`Delete`} placement="top">
      <IconButton
        colorScheme="red"
        onClick={handleDeleteGame}
        icon={<DeleteIcon />}
        aria-label={`Delete game with ID: ${gameId}`}
        size="sm"
        variant="outline"
      />
    </Tooltip>
  );
}