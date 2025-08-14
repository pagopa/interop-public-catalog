import { DB } from "pagopa-interop-public-commons";
import { genericError } from "pagopa-interop-public-models";
import { QueryResult } from "pg";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, max-params
export async function readModelServiceBuilder(dbInstance: DB) {
  try {
    const db = await dbInstance.connect();

    return {
      async getCurrentTime(): Promise<QueryResult<[{ time: number }]>> {
        return db.query('SELECT NOW() as "time"');
      },
    };
  } catch (e) {
    throw genericError("Couldn't connect to SQL db.");
  }
}
