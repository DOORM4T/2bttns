/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "game" */
export type Game = {
  __typename?: 'game';
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "game" */
export type Game_Aggregate = {
  __typename?: 'game_aggregate';
  aggregate?: Maybe<Game_Aggregate_Fields>;
  nodes: Array<Game>;
};

/** aggregate fields of "game" */
export type Game_Aggregate_Fields = {
  __typename?: 'game_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Game_Max_Fields>;
  min?: Maybe<Game_Min_Fields>;
};


/** aggregate fields of "game" */
export type Game_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Game_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "game". All fields are combined with a logical 'AND'. */
export type Game_Bool_Exp = {
  _and?: InputMaybe<Array<Game_Bool_Exp>>;
  _not?: InputMaybe<Game_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "game" */
export enum Game_Constraint {
  /** unique or primary key constraint on columns "id" */
  GamePkey = 'game_pkey'
}

/** input type for inserting data into table "game" */
export type Game_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Game_Max_Fields = {
  __typename?: 'game_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Game_Min_Fields = {
  __typename?: 'game_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "game" */
export type Game_Mutation_Response = {
  __typename?: 'game_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Game>;
};

/** columns and relationships of "game_object" */
export type Game_Object = {
  __typename?: 'game_object';
  createdAt: Scalars['date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['date']['output'];
};

/** aggregated selection of "game_object" */
export type Game_Object_Aggregate = {
  __typename?: 'game_object_aggregate';
  aggregate?: Maybe<Game_Object_Aggregate_Fields>;
  nodes: Array<Game_Object>;
};

/** aggregate fields of "game_object" */
export type Game_Object_Aggregate_Fields = {
  __typename?: 'game_object_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Game_Object_Max_Fields>;
  min?: Maybe<Game_Object_Min_Fields>;
};


/** aggregate fields of "game_object" */
export type Game_Object_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Game_Object_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "game_object". All fields are combined with a logical 'AND'. */
export type Game_Object_Bool_Exp = {
  _and?: InputMaybe<Array<Game_Object_Bool_Exp>>;
  _not?: InputMaybe<Game_Object_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Object_Bool_Exp>>;
  createdAt?: InputMaybe<Date_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_object" */
export enum Game_Object_Constraint {
  /** unique or primary key constraint on columns "id" */
  GameObjectPkey = 'game_object_pkey'
}

/** input type for inserting data into table "game_object" */
export type Game_Object_Insert_Input = {
  createdAt?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['date']['input']>;
};

/** aggregate max on columns */
export type Game_Object_Max_Fields = {
  __typename?: 'game_object_max_fields';
  createdAt?: Maybe<Scalars['date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['date']['output']>;
};

/** aggregate min on columns */
export type Game_Object_Min_Fields = {
  __typename?: 'game_object_min_fields';
  createdAt?: Maybe<Scalars['date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['date']['output']>;
};

/** response of any mutation on the table "game_object" */
export type Game_Object_Mutation_Response = {
  __typename?: 'game_object_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Game_Object>;
};

/** on_conflict condition type for table "game_object" */
export type Game_Object_On_Conflict = {
  constraint: Game_Object_Constraint;
  update_columns?: Array<Game_Object_Update_Column>;
  where?: InputMaybe<Game_Object_Bool_Exp>;
};

/** Ordering options when selecting data from "game_object". */
export type Game_Object_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: game_object */
export type Game_Object_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "game_object" */
export enum Game_Object_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "game_object" */
export type Game_Object_Set_Input = {
  createdAt?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['date']['input']>;
};

/** Streaming cursor of the table "game_object" */
export type Game_Object_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Game_Object_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Object_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['date']['input']>;
};

/** update columns of table "game_object" */
export enum Game_Object_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Game_Object_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Game_Object_Set_Input>;
  /** filter the rows which have to be updated */
  where: Game_Object_Bool_Exp;
};

/** on_conflict condition type for table "game" */
export type Game_On_Conflict = {
  constraint: Game_Constraint;
  update_columns?: Array<Game_Update_Column>;
  where?: InputMaybe<Game_Bool_Exp>;
};

/** Ordering options when selecting data from "game". */
export type Game_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: game */
export type Game_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "game" */
export enum Game_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "game" */
export type Game_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "game" */
export type Game_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Game_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "game" */
export enum Game_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Game_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Game_Set_Input>;
  /** filter the rows which have to be updated */
  where: Game_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "game" */
  delete_game?: Maybe<Game_Mutation_Response>;
  /** delete single row from the table: "game" */
  delete_game_by_pk?: Maybe<Game>;
  /** delete data from the table: "game_object" */
  delete_game_object?: Maybe<Game_Object_Mutation_Response>;
  /** delete single row from the table: "game_object" */
  delete_game_object_by_pk?: Maybe<Game_Object>;
  /** insert data into the table: "game" */
  insert_game?: Maybe<Game_Mutation_Response>;
  /** insert data into the table: "game_object" */
  insert_game_object?: Maybe<Game_Object_Mutation_Response>;
  /** insert a single row into the table: "game_object" */
  insert_game_object_one?: Maybe<Game_Object>;
  /** insert a single row into the table: "game" */
  insert_game_one?: Maybe<Game>;
  /** update data of the table: "game" */
  update_game?: Maybe<Game_Mutation_Response>;
  /** update single row of the table: "game" */
  update_game_by_pk?: Maybe<Game>;
  /** update multiples rows of table: "game" */
  update_game_many?: Maybe<Array<Maybe<Game_Mutation_Response>>>;
  /** update data of the table: "game_object" */
  update_game_object?: Maybe<Game_Object_Mutation_Response>;
  /** update single row of the table: "game_object" */
  update_game_object_by_pk?: Maybe<Game_Object>;
  /** update multiples rows of table: "game_object" */
  update_game_object_many?: Maybe<Array<Maybe<Game_Object_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_GameArgs = {
  where: Game_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Game_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Game_ObjectArgs = {
  where: Game_Object_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Game_Object_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_GameArgs = {
  objects: Array<Game_Insert_Input>;
  on_conflict?: InputMaybe<Game_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_ObjectArgs = {
  objects: Array<Game_Object_Insert_Input>;
  on_conflict?: InputMaybe<Game_Object_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_Object_OneArgs = {
  object: Game_Object_Insert_Input;
  on_conflict?: InputMaybe<Game_Object_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Game_OneArgs = {
  object: Game_Insert_Input;
  on_conflict?: InputMaybe<Game_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GameArgs = {
  _set?: InputMaybe<Game_Set_Input>;
  where: Game_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Game_By_PkArgs = {
  _set?: InputMaybe<Game_Set_Input>;
  pk_columns: Game_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Game_ManyArgs = {
  updates: Array<Game_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Game_ObjectArgs = {
  _set?: InputMaybe<Game_Object_Set_Input>;
  where: Game_Object_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Game_Object_By_PkArgs = {
  _set?: InputMaybe<Game_Object_Set_Input>;
  pk_columns: Game_Object_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Game_Object_ManyArgs = {
  updates: Array<Game_Object_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** fetch data from the table: "game_object" */
  game_object: Array<Game_Object>;
  /** fetch aggregated fields from the table: "game_object" */
  game_object_aggregate: Game_Object_Aggregate;
  /** fetch data from the table: "game_object" using primary key columns */
  game_object_by_pk?: Maybe<Game_Object>;
};


export type Query_RootGameArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Query_RootGame_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Query_RootGame_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGame_ObjectArgs = {
  distinct_on?: InputMaybe<Array<Game_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Object_Order_By>>;
  where?: InputMaybe<Game_Object_Bool_Exp>;
};


export type Query_RootGame_Object_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Object_Order_By>>;
  where?: InputMaybe<Game_Object_Bool_Exp>;
};


export type Query_RootGame_Object_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** fetch data from the table: "game_object" */
  game_object: Array<Game_Object>;
  /** fetch aggregated fields from the table: "game_object" */
  game_object_aggregate: Game_Object_Aggregate;
  /** fetch data from the table: "game_object" using primary key columns */
  game_object_by_pk?: Maybe<Game_Object>;
  /** fetch data from the table in a streaming manner: "game_object" */
  game_object_stream: Array<Game_Object>;
  /** fetch data from the table in a streaming manner: "game" */
  game_stream: Array<Game>;
};


export type Subscription_RootGameArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Subscription_RootGame_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Order_By>>;
  where?: InputMaybe<Game_Bool_Exp>;
};


export type Subscription_RootGame_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGame_ObjectArgs = {
  distinct_on?: InputMaybe<Array<Game_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Object_Order_By>>;
  where?: InputMaybe<Game_Object_Bool_Exp>;
};


export type Subscription_RootGame_Object_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Game_Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Game_Object_Order_By>>;
  where?: InputMaybe<Game_Object_Bool_Exp>;
};


export type Subscription_RootGame_Object_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootGame_Object_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Game_Object_Stream_Cursor_Input>>;
  where?: InputMaybe<Game_Object_Bool_Exp>;
};


export type Subscription_RootGame_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Game_Stream_Cursor_Input>>;
  where?: InputMaybe<Game_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGamesQuery = { __typename?: 'query_root', game: Array<{ __typename?: 'game', id: any, name: string }> };

export type OnGamesChangedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnGamesChangedSubscription = { __typename?: 'subscription_root', game: Array<{ __typename?: 'game', id: any, name: string }> };


export const GetGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGames"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetGamesQuery, GetGamesQueryVariables>;
export const OnGamesChangedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OnGamesChanged"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<OnGamesChangedSubscription, OnGamesChangedSubscriptionVariables>;