import { EventBridge } from "aws-sdk";

exports.handler = async function (event: any) {
  const eventbridge = new EventBridge();

  const result = await eventbridge
    .putEvents({
      Entries: [
        {
          EventBusName: "default",
          Source: "lambdaSource",
          DetailType: "execute order",
          Detail: JSON.stringify({
            productName: "Air Max Shoes",
            price: "70",
          }),
        },
      ],
    })
    .promise();

  console.log("request ", JSON.stringify(result));

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `producer event executed ${JSON.stringify(result)}`,
  };
};
