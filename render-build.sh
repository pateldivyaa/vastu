#!/bin/bash
# Exit on error
set -o errexit

# Install dependencies
echo "Installing dependencies..."
npm install
cd server && npm install && cd ..
cd client && npm install && cd ..

# Build the client
cd client
echo "Building client..."
npm run build
cd ..

echo "Build completed successfully!"
