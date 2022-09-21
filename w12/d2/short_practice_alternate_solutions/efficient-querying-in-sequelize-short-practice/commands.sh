#!/bin/bash
cd server

# Install dependencies
npm install

# Copy the .env.example file into a .env file
cp .env.example .env

# Migrate
dotenv npx sequelize-cli db:migrate

# Seed
dotenv npx sequelize-cli db:seed:all

# Check that the Books, Authors, Reviews, and Reviewers tables exist
sqlite3 db/dev.db '.tables'

# Check seed data was properly inserted
sqlite3 db/dev.db 'SELECT COUNT(*) from Books; -- 10,000 records'
sqlite3 db/dev.db 'SELECT COUNT(*) from Authors; -- 1,000 records'
sqlite3 db/dev.db 'SELECT COUNT(*) from Reviews; -- 8,000 records'
sqlite3 db/dev.db 'SELECT COUNT(*) from Reviewers; -- 4,000 records'

# Start development server
npm run dev
