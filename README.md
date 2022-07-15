# Template -  Delta Integration Flow
![Coverage](coverage/badge.svg)
## NodejS  / Typescript

This is a basic template for automations of type "Delta". Use it as a start point of your automation.

The "Delta" integration flow basically extract data from one or more sources, process all items one-by-one and save this execution result as a delta image.
In the next execution, it will consider only changes between the last extraction.

It is designed for maximum flexibility with individual logs by entry and save processing time using delta images.

### Default configuration:
* Environment: nodejs14.x
* Memory: 128mb
* Timeout: 60s

You can personalize this settings in **tunnelhub.yml** file

### Intructions:
* You can install all dependencies with `npm install` or `yarn`.
* Your main logic is in `src/index.ts` file. 
* You can check our example test in `__tests__` folder. Our tests are writted using [Jest](https://www.npmjs.com/package/jest). 
* To run your tests, just run `yarn run test`
* To deploy your automation, it's necessary zip all your project in a zip file. Use `yarn run build` to transpile all your code and libraries using esbuild and save it in `dist` folder.
* Check our [documentation](https://docs.tunnelhub.io) for more information.

Your preferred deploy command:
* For DEV environment: `yarn run deploy:dev --message "Deploy message"`
* For PRD environment: `yarn run deploy:prd --message "Deploy message"`
