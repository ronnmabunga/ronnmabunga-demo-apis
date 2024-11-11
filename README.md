# Aggregated Express.js API Modules Application

## Description

This repository aggregates three separate Express.js applications, each of which serves as an API for a specific use case. The main application acts as an entry point and uses sub-paths to route requests to each of the individual API sub-apps. The sub-apps are included as Git submodules and are all mounted under their respective routes in the main app.

## Features

-   **Main Application:** The main app located in the root directory (index.js) serves as a central entry point, routing requests to each sub-app.
-   **Sub-Applications:**
    -   **Blogging Website API:** (/expressjs-mongodb-mrc-blogging-api-demo) – serves APIs related to a blogging website.
    -   **User Management API:** (/expressjs-fs-monolithic-user-api-demo) – provides endpoints for user management functions.
    -   **E-commerce API:** (/expressjs-mongodb-mrc-ecommerce-api-demo) – handles e-commerce-related endpoints, such as products, orders, and user profiles.

## How to Run

### Cloning the Repository with Submodules

To clone the repository and initialize submodules, run:

```bash
git clone --recurse-submodules <repository-url>
```

If you’ve already cloned the repository without submodules, you can initialize and update them by running:

```bash
git submodule update --init --recursive
```

### Installation

Install dependencies for all the apps:

```bash
npm run setup
```

The `setup` script in the `package.json` installs the dependencies for the main app as well as for the sub-apps.

### Environment Configuration

Since only the main app will be running, all the environment variables for all the sub-apps must be provided to the main app's entry point.
As you can see on the `.env.template`, each sub-app has its own sets of environment variables
These variables are also reflected on the individual `.env.template` for each sub-apps, this is because those variables will be used when the sub-apps are run separately.

```bash
DEMO1_PORT=
DEMO1_MONGO_STRING=
DEMO1_JWT_SECRET_KEY=

DEMO2_JWT_SECRET=
DEMO2_PORT=
DEMO2_SERVER=
DEMO2_DATA_FILE_PATH=
DEMO2_API_PATH=

DEMO3_PORT=
DEMO3_MONGO_STRING=
DEMO3_JWT_SECRET_KEY=
DEMO3_AWS_ACCESS_KEY_ID=
DEMO3_AWS_SECRET_ACCESS_KEY=
DEMO3_AWS_REGION=
DEMO3_AWS_BUCKET_NAME=
DEMO3_SERVER=
```

### Running the Application

Start the main application using the following command from the root directory:

```bash
npm run start
```

The app will run on port 4000, and each sub-application will be available under a unique path:

-   Blogging Website API: http://localhost:4000/demo-api-1
-   User Management API: http://localhost:4000/demo-api-2
-   E-commerce API: http://localhost:4000/demo-api-3

## Dependencies

    express: Web framework for Node.js
    dotenv: Loads environment variables from .env

## License

    This project is licensed under the GNU GENERAL PUBLIC LICENSE.
