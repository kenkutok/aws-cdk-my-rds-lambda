#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkMyRdsLambdaStack } from '../lib/aws-cdk-my-rds-lambda-stack';

const app = new cdk.App();
new AwsCdkMyRdsLambdaStack(app, 'AwsCdkMyRdsLambdaStack');
