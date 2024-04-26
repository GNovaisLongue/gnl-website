# to do/to update list

will be trying to update this list and adding check boxes - [x] and - [ ]

## Content

- NextJs 14
- Tailwind CSS
- clsx
- Middlewares
- Drizzle
- zod
- Axios
- BCrypt JS
- JWT token
- SQL? (Postgres?)
- NoSQL? (MongoDB?)
- Edgestore for file upload

## Next 14

- [ ] Check new nextjs 14

## Middleware

- [ ] "Denied Access" not working
- [ ] Rewrite access verification

## Get Session Props

- [x] root layout has to getServerSession() and check if it's auth or not.
- [x] Doing authentication and returning lowest role when no user is logged in (session is null)
- [ ] Rearrange route permissions and add more providers other than Google.
- [ ] Fix and organize code involving roles, permissions, and rendering: "page-maps", "auth-middleware", "global-nav", and "RootLayout".
- [ ] move getServerSession into getServerSideProps() (if possible) or other server sided function.
- [ ] limit getServerSession so it doesn't trigger on every new render.
- [ ] role verification and redirect in case of bypassed access.

## Account > Dashboard

- [ ] need more inspiration
- [ ] Allow owner to visualize and edit users'roles

## Account > Profile

- [ ] for now, simple list containing the user's saved notes
      --- [ ] getUserId() and getUserNotes()
      --- [ ] map over UserNotes
- [ ] button to add more notes?
- [ ] button to delete notes?

## Account > Acc. Settings

- [ ] need more inspiration

## Account > My Notes

- [ ] for now, blank page where user can create their notes
      --- [ ] getUserId() and saveUserNote()
      --- [ ] once saved, clear page.
- [ ] button to save note?

## "Decent" design for pages within each section

- [ ] come up with something ok for main root page
- [ ] come up with something ok for pages under "Account"
      --- [ ] simple design for management dashboard
      --- [ ] simple design for acc settings
      --- [ ] simple design for profile (nexusmods-like)
      --- [ ] simple design for editable/shareable notes (maybe move to another category)
- [ ] come up with something ok for pages under "Expenses"
      --- [ ] redo expenses layout, separate page to add what comes and goes and a dashboard
- [ ] come up with something ok for pages under "Minigames"
- [ ] come up with additional categories and/or pages
- [ ] add QRCode creation (?)

## connect to database

- [x] connect to mongo.db (Connected to PostGreSQL instead)
- [x] create a structure for user
- [ ] create a structure for notes
- [ ] create a structure for expenses
- [x] implement something other than nodejs to deal with it? Prisma? (Drizzle)

## bugs and things to adjust

- [] Turn pages into subsets? easier to grant/revoke permissions for users.

- [x] "primereact/datatable" is kinda 🤡. Either change to something else or leave as is for now. (not showing icons or colors)
      --- [x] removed primereact
- [ ] Replace Next/Image for something else so I can add letters as profile image and style easily.
- [ ] Found an issue where the popover isn't visible when the screen is smaller than 640 pixels. Possible issue within lib wrapper (data-radix-popper-content-wrapper).
- [ ] /notes, when loaded, breaks the header styling.
- [x] popover "Dashboard" button wasn't working as intended, as in, being accessible for admins and redirecting.
