#!/bin/bash
cd server

# Install dependencies
npm install

# Create a .env file 
touch .env
echo DB_FILE=db/dev.db >> .env

# Migrate
dotenv npx sequelize-cli db:migrate

# Seed
dotenv npx sequelize-cli db:seed:all

# Check that the Cats, Toys, and CatToys tables exist
sqlite3 db/dev.db '.tables'

# Check seed data was properly inserted
sqlite3 db/dev.db 'SELECT COUNT(*) from Cats; -- 10,003 records'
sqlite3 db/dev.db 'SELECT COUNT(*) from Toys; -- 10,056 records'
sqlite3 db/dev.db 'SELECT COUNT(*) from CatToys; -- 15,207 records'

# Start development server
npm run dev