import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main( event, context ) {
	const params = {
		TableName: process.env.tableName,
		// Cognito Pool is the Key id (partition key)
		// noteId in Dynamo (sort key)
		KeyConditionExpression: "userId = :userId",
		ExpressionAttributeValues: {
			":userId": event.requestContext.identity.cognitoIdentityId
		}
	};

	try {
		const result = await dynamoDbLib.call("query", params);
			return success(result.Items);
		} catch (e) {
			return failure({ status: false });
		}
}