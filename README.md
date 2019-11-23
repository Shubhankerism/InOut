# InOut
> Entry Management Software. Innovaccer SDE summer internship assignment.

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run test (for back-end APIs)
nyc mocha

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:8080 and client on http://localhost:3000
```
Import `Database_SQL`.
You will need to create a .env file in root folder to provide email ID and password for nodemailer and also, database name.

```
senderid=YOUR_EMAILID_TO_SEND_MAILS
senderpass=PASSWORD_FOR_EMAIL9
db=DATABASE_NAME
```

## Technology Used
- NodeJS
- ReactJS
- MySQL
- ExpressJS
- Mocha, Chai & Istanbul.js (for testing)
- Nodemailer (for mailing)
- MSG91 (for sending SMS)

##Approach

- Upon visiting, a visitor has to fill up the check-in form that comprises of all the mandatory fields.
- Input validation done through `validator` and submit button gets enabled only if the input is valid.
- On submit, the new visitor entry is made into the database with all the details and check-in time is automatically noted. Moreover in database a flag, named `checkedout` is set to "FALSE" which states that this visitor is currently visiting and he/she hasn't checked out yet.
- Mail sent to host using `nodemailer` and SMS delivered using `MSG91` APIs.
- Visitor email ID has to be unique for all active/current visitors, i.e. no two visitors with same email ID can visit during the same period of time.
- In case of duplicate entry i.e. a visitor checks in with same email ID then an alert prompts.
- However, once checked-out the `checkedout` flag is set to "TRUE" and thus, after checking out a visitor can again check-in with same email ID.
- To check-out, the visitor has to provide its email ID with which he/she had checked-in initially.
- Input validation done again using `validator`.
- If no active visitor exists with provided email ID then an alert prompts.

## APIs

### POST /api/checkin
- To check-in a visitor

### POST /api/checkout
- To check-out a visitor

### GET /api/past
- To get list of past visitors

### GET /api/current
- To get list of current visitors

## API Testing
- Check-in and Check-out API tested using `mocha` and `chai`.
- Code coverage through `IstanbulJS`.
