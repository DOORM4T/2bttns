"use client";

import {
  GetGamesDocument,
  GetGamesQuery,
  GetGamesQueryVariables,
  OnGamesChangedDocument,
  OnGamesChangedSubscription,
  OnGamesChangedSubscriptionVariables,
} from "@/gql/generated/graphql";
import { useQuery, useSubscription } from "@apollo/client";

export default function Games() {
  const gamesQuery = useQuery<GetGamesQuery, GetGamesQueryVariables>(
    GetGamesDocument
  );

  const gamesSubscription = useSubscription<
    OnGamesChangedSubscription,
    OnGamesChangedSubscriptionVariables
  >(OnGamesChangedDocument);

  return (
    <div>
      <div>
        <h1>Games Query</h1>
        <div>{gamesQuery.loading && <p>Loading...</p>}</div>
        <div>
          {gamesQuery.error && <p>Error :{JSON.stringify(gamesQuery.error)}</p>}
        </div>
        <div>
          {gamesQuery.data && (
            <pre>{JSON.stringify(gamesQuery.data, null, 2)}</pre>
          )}
        </div>
      </div>

      <div>
        <h1>Games Subscription</h1>
        <div>
          {gamesSubscription.loading && <p>Loading...</p>}
          {gamesSubscription.data && (
            <pre>{JSON.stringify(gamesSubscription.data.game, null, 2)}</pre>
          )}
          {!gamesSubscription.data && <p>No subscription data</p>}
        </div>
      </div>
    </div>
  );
}
