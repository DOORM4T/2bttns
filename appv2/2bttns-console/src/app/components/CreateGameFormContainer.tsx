"use client";

import React from "react";
import CreateGameForm from "./CreateGameForm";

export type CreateGameFormContainerProps = {};

const CreateGameFormContainer = ({}: CreateGameFormContainerProps) => {
  return (
    <CreateGameForm
      loading={false}
      onSubmit={() => {}}
      tags={[
        { id: "1", description: "tag1", name: "tag1" },
        { id: "2", description: "tag2", name: "tag2" },
        { id: "3", description: "tag3", name: "tag3" },
        { id: "4", description: "tag4", name: "tag4" },
        { id: "5", description: "tag5", name: "tag5" },
      ]}
    />
  );
};

export default CreateGameFormContainer;
