import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as EventBridgePractise from '../lib/event_bridge_practise-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new EventBridgePractise.EventBridgePractiseStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
