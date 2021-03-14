# Welcome to your AWS CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Install the AWS CDK
### Install the AWS CDK Toolkit globally using the following Node Package Manager command.
```bash
$ npm install -g aws-cdk
```
### Run the following command to verify correct installation and print the version number of the AWS CDK.
```bash
$ cdk --version
```

## Create the app
### Each AWS CDK app should be in its own directory, with its own local module dependencies. Create a new directory for your app. Starting in your home directory, or another directory if you prefer, issue the following commands.
```bash
$ mkdir aws-cdk-my-rds-lambda
$ cd aws-cdk-my-rds-lambda
```

### Now initialize the app using the _cdk init_ command, specifying the desired template ("app") and programming language.
```bash
$ cdk init app --language typescript
```

## Add your AWS resources
```bash
$ npm install @aws-cdk/aws-ec2 @aws-cdk/aws-lambda @aws-cdk/aws-rds @aws-cdk/aws-apigatewayv2 @aws-cdk/aws-apigatewayv2-integrations
npm WARN aws-cdk-my-rds-lambda@0.1.0 No repository field.
npm WARN aws-cdk-my-rds-lambda@0.1.0 No license field.

+ @aws-cdk/aws-lambda@1.89.0
+ @aws-cdk/aws-apigatewayv2@1.89.0
+ @aws-cdk/aws-ec2@1.89.0
+ @aws-cdk/aws-rds@1.89.0
+ @aws-cdk/aws-apigatewayv2-integrations@1.89.0
added 34 packages from 4 contributors and audited 785 packages in 7.156s

31 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Modify lib/aws-cdk-my-rds-lambda-stack.ts

## Add lambda-functions 
```bash
$ cd lambda-functions
$ npm init -y
```

## Add index.ts in lambda-functions

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template