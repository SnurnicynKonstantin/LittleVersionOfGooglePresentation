# Little Version Of Google Presentation

Implement web-application for online presentations (very lite version of google presentations).

## Technologies:
- Server-side: Node.js (Express).
- Client-side: Twitter Bootstrap, React+Redux;
- Databases: Postgres.

## Functional
- Slide consist of title and content;
- Supporting of text with simple html formatting (bold, italic, underscore, font and size) is enough for text formatting;
- Application support google authorization and connect created presentations with account;
- User have ability to open/delete created presentations or create a new one;
- User have ability to start presentation.
- User have ability to share presentations with another google accounts. Such presentations displayed in special list for user;
- Remote presentation feature. User sends special link to another users and starts presentation. By this link users can see progress of presentation. Use websockets for this feature.

## Technical
+ Application have RESTful URLS for presentations
  + GET /presentations (/presentations.json) - get all;
  + GET /presentations/:title (/presentations/:title.json) - get one;
  + POST /presentations - create new;
  + PUT /presentations/:title - modify existing one;
  + DELETE /presentations/:title - remove existing one;
+ Server side covered by integrational tests;
+ DB have effective indexes;
+ ORM used for DB access, migrations for databases; 
+ Using of css pre-processor SASS; 
+ Use WebPack;
