# Technology stack: React | Vite | TypeScript

I created a web application with the following hierarchical structure of pages (tables):
Accounts => Profiles => Campaigns

Table [Accounts] {
"accountId", "email", "authToken", "creationDate"
}
Table [Profiles of selected account] {
"profileId", "country", "marketplace"
}
Table [Campaigns of selected profile] {
"campaignId", "clicks", "cost", "date"
}

3 clickable tables, which, when you click on one of the rows, go through the structure to the selected entity.
Implemented sorting, filtering and pagination for each of the tables, global search. 
