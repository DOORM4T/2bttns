import { Box, ButtonGroup } from "@chakra-ui/react";
import type { GetServerSideProps } from "next";
import { Session } from "next-auth";
import Head from "next/head";
import DeleteGameObjectButton from "../../features/gameobjects/containers/DeleteGameObjectButton";
import GameObjectsTable, {
  GameObjectData,
} from "../../features/gameobjects/containers/GameObjectsTable";
import ManageGameObjectButton from "../../features/gameobjects/containers/ManageGameObjectButton";
import useDeleteGameObjects from "../../features/gameobjects/hooks/useDeleteGameObjects";
import { AdditionalColumns } from "../../features/shared/components/Table/containers/PaginatedTable";
import TableActionsMenu, {
  TableActionsMenuItemBulkTag,
  TableActionsMenuItemDelete,
} from "../../features/shared/components/Table/containers/TableActionsMenu";
import { EditTagsForGameObjectsButtonDrawer } from "../../features/tags/containers/EditTagsForGameObjectsButtonDrawer";
import { SelectTagFiltersDrawerButton } from "../../features/tags/containers/SelectTagFiltersDrawerButton";
import useAllTagFilters from "../../features/tags/hooks/useAllTagFilters";
import getSessionWithSignInRedirect from "../../utils/getSessionWithSignInRedirect";
import { NextPageWithLayout } from "../_app";

export type GameObjectsPageProps = {
  session: Session;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { session, redirect } = await getSessionWithSignInRedirect(context);

  if (!session && redirect) {
    return {
      redirect,
    };
  }

  return {
    props: {
      session,
    },
  };
};

const GameObjects: NextPageWithLayout<GameObjectsPageProps> = (props) => {
  const tagFilter = useAllTagFilters();

  return (
    <>
      <Head>
        <title>Game Objects | 2bttns</title>
        <meta name="description" content="Game object management panel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box overflow="hidden" padding="1rem">
        <GameObjectsTable
          tag={{
            include: tagFilter.results.includeTags,
            exclude: tagFilter.results.excludeTags,
            includeUntagged: tagFilter.results.includeUntagged,
          }}
          additionalTopBarContent={(selectedRows) => (
            <AdditionalTopBarContent
              selectedRows={selectedRows}
              tagFilter={tagFilter}
            />
          )}
          additionalColumns={getAdditionalColumns()}
        />
      </Box>
    </>
  );
};

type AdditionalTopBarContentProps = {
  selectedRows: GameObjectData[];
  tagFilter: ReturnType<typeof useAllTagFilters>;
};

function AdditionalTopBarContent(props: AdditionalTopBarContentProps) {
  const { selectedRows, tagFilter } = props;
  const { handleDeleteGameObjects } = useDeleteGameObjects();

  return (
    <>
      <ButtonGroup>
        {/* <CsvImport />- @TODO: Move to Menu */}
        <TableActionsMenu
          selectedRows={selectedRows}
          actionItems={(context) => (
            <>
              <TableActionsMenuItemBulkTag context={context} />
              <TableActionsMenuItemDelete
                context={context}
                handleDelete={async () => {
                  await handleDeleteGameObjects(
                    context.selectedRows.map((row) => row.id)
                  );
                }}
              />
            </>
          )}
        />
        <SelectTagFiltersDrawerButton
          tagFilter={tagFilter.state.tagFilter}
          setTagFilter={tagFilter.state.setTagFilter}
          tagFilterLoading={tagFilter.tagsQuery.isLoading}
        />
      </ButtonGroup>
    </>
  );
}

function getAdditionalColumns(): AdditionalColumns<GameObjectData> {
  return {
    columns: [
      {
        id: "actions",
        cell: (row) => {
          return <Actions gameObjectId={row.id} />;
        },
      },
    ],
    dependencies: [],
  };
}

type ActionsProps = {
  gameObjectId: GameObjectData["id"];
};
function Actions(props: ActionsProps) {
  const { gameObjectId } = props;

  return (
    <>
      <ButtonGroup width="100%" justifyContent="center">
        <EditTagsForGameObjectsButtonDrawer gameObjectIds={[gameObjectId]} />
        <ManageGameObjectButton gameObjectId={gameObjectId} />
        <DeleteGameObjectButton gameObjectId={gameObjectId} />
      </ButtonGroup>
    </>
  );
}

export default GameObjects;