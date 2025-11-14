# UI Engineering Showcase

Welcome to the UI Engineering Showcase! This repository contains a full-stack application scaffold with a pre-built GraphQL server and a starter React frontend. Your task is to implement the user interface according to the provided requirements and Figma design. Our goal with this project is to allow you to showcase your talent in a way that matches how we actually work. Please take your time reading through the project requirements - if you need further clarification on anything, please reach out to your contact and we will be happy to answer.

This is a pnpm monorepo containing:

- **Server** (`/server`): A fully functional Apollo GraphQL server with mock data. This server provides all the data you'll need and is ready to use. No backend work is required.
- **Client** (`/client`): A React + TypeScript + Vite starter application with Apollo Client configured. This is where you'll build the UI.

The GraphQL server exposes the following queries:

- `user` - Get the current user information and their spaces
- `recommendations(spaceId)` - Get recommendations for a space
- `metrics(spaceId)` - Get metrics for a space
- `teams(spaceId)` - Get teams for a space
- `tickets(spaceId)` - Get tickets for a space
- `reports(spaceId)` - Get reports for a space

All data types are fully typed in GraphQL schema files located in `/server/src/schema/`.

## What You're Building

![Dashboard Screenshot](https://github.com/user-attachments/assets/9ddc6496-9227-4efa-ac27-3749776316f7)

You'll be building out and animating a single page dashboard.

On initial spin up, you'll see an API call made that returns a single user. This is the user which you'll use for the entirety of the dashboard. While there is another user that exists, there is no need for you to switch between them.

**Navigation Card**

Starting on the left, you'll see the navigation card. This contains Home and Task links, and a Teams Dropdown. Below that card, is the "space switcher" which will be used to switch between the user's space.
You'll find the user's available spaces in the user endpoint.
You'll find the user's available teams in the teams endpoint.

**Date Range Selector**

On the top right you'll see a date picker. The date picker should be functional to change dates, but for now there is no data for it to request, so it is expected that no change will happen when the user changes the date.

**Search**

On the top right you will also see a search button. This should animate in some fashion to allow the user to input some search text. You are welcome to use your imagination for how this should function. At the moment there is no search call - so a simple function that console logs the search will be sufficient.

**Recommendations**

Below the home title, you'll find the recommendations card. You'll call both the recommendations endpoint and the reports endpoint for this data.

**Metrics Cards**

The four cards in the middle of the screen are the Metrics boxes. For this data, call the metrics endpoint"

**Top Remediation Steps**

The table is loaded using data from the tickets endpoint. We suggest using the Mui Data Grid for this table.

## Requirements

- The user can see their available teams
- The user can switch spaces
- The user can select a date range (the date range will not change data)
- The user can search for a string (no data response is expected on search)
- The user can see recommendations for each space
- The user can see metrics for each space
- The user can see top remediation steps for each space
- No changes are made to the server
- Anything that moves, should animate

**Important notes**

You are welcome to use libraries that are not currently installed, please be prepared to explain your choices for including any packages not currently present.

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **pnpm** (v9 or higher)

If you don't have pnpm installed, you can install it via:

```bash
npm install -g pnpm
```

### Installation

1. Fork this this repository
2. Select your GitHub account as the destination
3. Clone your forked repository to your local machine:

```bash
git clone https://github.com/YOUR-USERNAME/ui-interview-codetest-2.git
cd ui-interview-codetest-2
```

4. Install dependencies from the root directory:

```bash
pnpm install
```

This will install dependencies for both the server and client workspaces.

### Running the Development Servers

From the root directory, run:

```bash
pnpm dev
```

This command will start both the GraphQL server and the Vite development server concurrently:

- **GraphQL Server**: http://localhost:4000
- **GraphQL Playground**: http://localhost:4000/graphql
- **Frontend**: http://localhost:5173 (default Vite port)

You can also run the servers individually:

```bash
# Run only the server
cd server && pnpm dev

# Run only the client
cd client && pnpm dev
```

### Working with GraphQL

#### Apollo Studio (GraphQL Playground)

Navigate to http://localhost:4000/graphql to explore the GraphQL schema and test queries in Apollo Studio.

#### Type Generation

This project uses GraphQL Code Generator to automatically generate TypeScript types from your GraphQL queries and the server schema. The client is pre-configured with type generation.

**When you add new GraphQL queries or mutations**, you must regenerate the TypeScript types:

From the root directory:

```bash
pnpm codegen
```

Or from the client directory:

```bash
cd client && pnpm codegen
```

Generated types will be available in `/client/src/types/`.

**Pro tip**: You can run type generation in watch mode while developing:

```bash
cd client && pnpm codegen:watch
```

#### Creating GraphQL Queries

1. Create your query file in `/client/src/graphql/queries/` or `/client/src/graphql/mutations/`
2. Define your query using the `graphql` template literal (see existing examples in `/client/src/graphql/queries/`)
3. Run `pnpm codegen` from the root to generate types
4. Import and use your typed query in your React components

Example query structure:

```typescript
import { graphql } from "@/types";

export const GET_TICKETS = graphql(`
  query GetTickets($spaceId: ID!) {
    tickets(spaceId: $spaceId) {
      id
      title
      health
      progress
      createdAt
      ownerId
    }
  }
`);
```

### Project Structure

```
.
├── client/                    # React frontend application
│   ├── src/
│   │   ├── apollo/           # Apollo Client configuration
│   │   ├── graphql/          # GraphQL queries and mutations
│   │   ├── types/            # Generated TypeScript types (do not edit manually)
│   │   └── ...
│   └── codegen.ts            # GraphQL Code Generator configuration
│
├── server/                    # Apollo GraphQL server
│   ├── src/
│   │   ├── schema/           # GraphQL schema definitions
│   │   ├── resolvers.ts      # GraphQL resolvers
│   │   ├── services/         # Business logic and data services
│   │   └── data/             # Mock data
│   └── ...
│
└── package.json              # Root workspace configuration
```

### Tech Stack

**Frontend:**

- React 19
- TypeScript
- Vite
- Apollo Client
- Material-UI (MUI)
- Emotion (CSS-in-JS)

**Backend:**

- Apollo Server
- GraphQL
- TypeScript

### Testing

Run tests for both client and server:

```bash
pnpm test
```

Or run tests for a specific workspace:

```bash
cd server && pnpm test
cd client && pnpm test
```

## Tips for Success

1. **Explore the Schema**: Visit http://localhost:4000/graphql to understand the available data structure
2. **Use Type Generation**: Always regenerate types after creating new queries to get full TypeScript support
3. **Check the Examples**: Look at the existing `GET_USER` query for a working example of the query pattern
4. **Focus on the UI**: The backend is complete, spend your time crafting a great user experience

## Questions?

If you encounter any technical issues with the development environment setup, please reach out to your point of contact.

Good luck! 🚀
