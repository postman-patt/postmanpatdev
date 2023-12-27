# postmanpat.dev

My personal website showing my profile, portfolio of projects (both personal and professional), and general technology related blog posts.

![postmanpat.dev](http://postmanpatdev.s3-website-ap-southeast-2.amazonaws.com/assets/postmanpat_dev.png)

## Setup

This website was built using Gatsby and Tailwind CSS.

The following is required to run the site locally:

- NodeJS (v18 or greater)
- Gatsby CLI

Install dependencies

```bash
npm i
```

To run the project locally in development mode on http://localhost:8000

```bash
npm run develop
```

## Deploying to AWS S3

The following is required to run the site to AWS S3:

- AWS CLI
- Configured AWS CLI credentials with S3 access

Run the Cloudformation YAML file (postmanpatdev.yaml) via AWS Cloudformation. This will create the following:

- AWS S3 bucket (must configure a unique bucket name)
- IAM User (incl. Access Key and Secret)
- IAM Policy allowing specific access requirements for above S3 bucket

Install Gatsby Plugin S3

```bash
npm install gatsby-plugin-s3
```

Configure gatsby-config.ts file to include the chosen bucket name.

```Typescript
{
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "bucket-name-here",
    },
}
```

Run build and deploy

```bash
npm run build && npm run deploy
```
