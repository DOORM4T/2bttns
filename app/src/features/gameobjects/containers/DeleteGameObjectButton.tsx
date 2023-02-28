import { DeleteIcon } from "@chakra-ui/icons";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { api } from "../../../utils/api";
import { GameObjectData } from "./GameObjectsTable";

export type DeleteGameObjectButtonProps = {
  gameObjectId: GameObjectData["id"];
  onDeleted?: () => void;
};

export default function DeleteGameObjectButton(
  props: DeleteGameObjectButtonProps
) {
  const { gameObjectId, onDeleted } = props;

  const utils = api.useContext();
  const deleteGameObjectMutation = api.gameObjects.deleteById.useMutation();
  const handleDeleteGameObject = async () => {
    try {
      await deleteGameObjectMutation.mutateAsync({ id: gameObjectId });
      if (onDeleted) {
        onDeleted();
      }
      await utils.gameObjects.invalidate();
    } catch (error) {
      window.alert("Error deleting game object\n See console for details");
      console.error(error);
    }
  };

  return (
    <Tooltip label={`Delete`} placement="top">
      <IconButton
        colorScheme="red"
        onClick={handleDeleteGameObject}
        icon={<DeleteIcon />}
        aria-label={`Delete gameobject with ID: ${gameObjectId}`}
        size="sm"
        variant="outline"
      />
    </Tooltip>
  );
}
