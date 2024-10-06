## Preparing our project for deployment
* testing our project in production environment
- npm run build
- npm start
* switch our database to the cloud or to a remote server
[NEON](https://neon.tech/)
* remove migrations folder and execute `npx prisma migrate dev` to create new migrations folder for the new database
 - the new database will be empty.