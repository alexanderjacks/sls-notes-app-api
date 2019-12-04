import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main( event, context ) {
  const params = {
    TableName: process.env.tableName,
    // Cognito Pool is the Key id (partition key)
    // noteId in Dynamo (sort key)
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    }
  };
  // moved header, error functions to to libs/
  try {
    await dynamoDbLib.call("delete", params);
    return success(params.Item);
  } catch (e) {
    return failure({ status:false });
  }
}