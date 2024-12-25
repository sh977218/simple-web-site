# Simple Web Site

## This is a playground project, but it has comprehensive software development practices

### Tech Stacks:

- Frontend: Angular
- Backend: NestJS (NodeJS + ExpressJS)
  - dotenv for server side configuration
  - NestJS Database
    - Mongo/Mongoose adapter
    - ORM
  - NestJS logging
    - winston integration
- Database: MongoDB
- Search engine: Elasticsearch

### Host code on Cloud(AWS): - in development

- Hosting static content in S3 - **to be included**
- Register DNS and link to S3 - **to be included**
- Deploy NodeJS to EC2 - **to be included**
- Deploy MongoDB to EC2 (or using AWS DynamoDB) - **to be included**
- Deploy Elasticsearch to EC2 (or using AWS OpenSearch) - **to be included**

### Development practice:

- Code format
  - Eslint
  - Prettier
- Git hook
  - Husky
  - Lint-staged
- Commit message
  - Commitizen
- ChangeLog
  - Populate changeLog upon release workflow trigger - **to be included**

### Deploy Production:

- Client
  - Using Angular `ng build` to output to folder `/build/client`
- Server
  - Using NestJS `nest build` to output to folder `/build`
- Static content
  - Using NestJS `ServeStaticModule` to serve client content
- Tar `/build` folder with `package.json` and `package-lock.json`
  - `npm install` shall be run on production server, because many libraries have machine specific source code
  - `tar -cf build.tar build package.json package-lock.json`
- Ship `build.tar` to production server and start the process
  - `NODE_ENV=production npm run start:build`

### Automation:

- Client
  - Angular karma unit test
- Server
  - Jest unit test
- End to End
  - Playwright
    - Using istanbul loader to instrument Angular source code during compilation
    - Using istanbul loader to instrument NestJS source code during compilation - **to be included**

### CI/CD:

- PR title checker - Run PR's title check on PR open/updates
- Using GitHub Action `service container` (docker container) as 3rd party service dependency when running Playwright e2e
- PR Deploy
  - Deploy PR branch build to S3 bucket on PR opens/updates.
  - Deploy master branch build to S3 bucket after PR merged into master
- Release - Release build with tag version on manually trigger - **to be included**
- Playwright - Run playwright e2e with code coverage on PR open/updates
- Artifact - Using Azure `Storage Account`'s `Blob container` to host all static content populated by GHA
  - Playwright report
  - Playwright coverage report
  - Playwright allure report - aggregated result on current run with past runs
