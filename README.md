# Simple Web Site

## This a playground project, but it has comprehensive software development practices

### Stacks:

- Frontend: Angular
- Backend: NodeJS + ExpressJS
- Database: MongoDB - **to be included**
- Search engine: Elasticsearch - **to be included**

### Host code on Cloud(AWS): -in development

- Hosting static content in S3
- Register DNS and link to S3
- Deploy NodeJS to EC2 - **to be included**
- Deploy MongoDB to EC2 (or using AWS DynamoDB) - **to be included**
- Deploy Elasticsearch to EC2 (or using AWS OpenSearch) - **to be included**

### Development practice:

- Code format - Eslint + Prettier
- Git hook: Husky + Lint-staged
- Commit message: Commitizen
- ChangeLog: Auto populate changeLog upon release workflow trigger - **to be included**

### Automation:

- Angular unit test
- Playwright e2e with code coverage

### GitHub workflow:

- PR title checker - Run PR's title check on PR open/updates
- Deploy - Deploy build to S3 bucket on PR merged into master
- Release - Release build with tag version on manually trigger - **to be included**
- Playwright - Run playwright e2e with code coverage on PR open/updates
