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

	try {
		const result = await dynamoDbLib.call("get", params);
		if (result.Item) {
			return success(result.Item);
		} else {
			return failure({ status: false, error: "Cannot find Item in DynamoDB ;_;" });
		}
	} catch (e) {
		return failure({ status: false });
	}
}