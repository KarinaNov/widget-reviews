# Project Setup and Installation

## Prerequisites

- Node.js (v20 or higher)
- npm

### Install Dependencies

npm install

### Development Server

npm run dev

### Production Build

npm run build

## Features

- **Vue 3 Composition API**: Modern approach for building Vue components.
- **Vite**: Fast build and development server.
- **TypeScript**: Ensures type safety across the project.
- **Pinia**: Centralized state management.
- **i18n**: Internationalization support for multi-language capabilities.
- **Native Fetch API**: For lightweight API communication.
- **MockAPI**: Simulates API responses for testing and development.

## API Description

This project uses **MockAPI.io** as a backend service for fetching review statistics.

**Configure environment variables**

```bash
# Rename .env.example to .env
cp .env.example .env
# or on Windows
copy .env.example .env
```

### API Endpoint

- **URL**: `https://6931697f11a8738467ceafe7.mockapi.io/rating/1`
- **Method**: GET
- **Purpose**: Fetches rating and reviews count data

### Response Format

```json
{
  "id": "1",
  "rating": 4.5,
  "reviewsCount": 233
}
```

### API Fields

- `rating` (number): Average rating score (e.g., 4.5 out of 5)
- `reviewsCount` (number): Total number of reviews
