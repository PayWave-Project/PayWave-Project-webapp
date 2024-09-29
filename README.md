# PayWave - The Future of Contactless Payments

PayWave is a Next.js-based web application that aims to revolutionize contactless payments. This project provides a seamless and secure platform for users to manage transactions, generate QR codes, and handle various payment-related operations.

## Features

- User authentication (login, register, forgot password)
- Dashboard with transaction overview
- QR code generation for payments
- QR code scanning functionality
- Transaction history and management
- Wallet management
- Notifications system
- Responsive design for mobile and desktop

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Zustand for state management
- React Query for data fetching
- Zod for schema validation
- Next-PWA for Progressive Web App functionality

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/PayWave-Project/PayWave-Project-webapp.git
   ```

2. Install dependencies:

   ```
   cd paywave
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:

   ```
   NODE_ENV=development
   NEXT_PUBLIC_BASE_URL=https://paywave-api-tcpl.onrender.com/api/v1
   ```

4. Run the development server:

   ```
   pnpm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Contains the main application pages and layouts
- `src/components`: Reusable React components
- `src/api`: API integration functions
- `src/hooks`: Custom React hooks
- `src/store`: Zustand store configurations
- `src/types`: TypeScript type definitions
- `public`: Static assets and PWA manifest

## Building for Production

To create a production build, run:
pnpm run build

Then, to start the production server:
pnpm start

## Progressive Web App (PWA)

This project is configured as a PWA. The PWA settings can be found in:
typescript:next.config.mjs

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
