import * as cdk from "@aws-cdk/core";
import * as events from "@aws-cdk/aws-events";
import * as targets from "@aws-cdk/aws-events-targets";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigateway from "@aws-cdk/aws-apigateway";

export class EventBridgePractiseStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const producerFn = new lambda.Function(this, "producerLambda", {
      code: lambda.Code.fromAsset("lambda"),
      handler: "producer.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
    });

    const consumerFn = new lambda.Function(this, "consumerLambda", {
      code: lambda.Code.fromAsset("lambda"),
      handler: "consumer.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
    });

    events.EventBus.grantPutEvents(producerFn);

    new events.Rule(this, "EventRule", {
      ruleName: "OrderLabdaRule",
      targets: [new targets.LambdaFunction(consumerFn)],
      eventPattern: {
        source: ["lambdaSource"],
        detail: {
          price: ["50", "70", "90"],
        },
      },
    });
  }
}
