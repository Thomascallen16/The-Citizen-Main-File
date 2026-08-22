/*
  THE CITIZEN'S RECORD — daily update log
  ----------------------------------------
  This is the ONLY file you need to edit to post a new daily update or video.
  There is no login, no account system, and no public submission form —
  this file is the entire "posting system." You edit it, save it, and
  re-upload/redeploy the site. Nobody else can post because nobody else
  has access to this file.

  HOW TO ADD A NEW ENTRY:
  1. Copy one of the objects below (the { ... } block).
  2. Paste it as a NEW first item inside the CR_POSTS array.
  3. Edit the fields. Leave "link" or "video" blank ("") if not used.
  4. Save the file and redeploy. That's it — no build step required.

  FIELDS:
    date    — "YYYY-MM-DD" (required)
    type    — short label, e.g. "Video", "Field Note", "Case Update", "Post"
    title   — headline for the entry (required)
    summary — 1-3 sentences, plain text (required)
    link    — optional URL to a fuller write-up, article, or social post
    video   — optional URL to a hosted video (YouTube, Rumble, etc.)
*/

window.CR_POSTS = [
  {
    date: "2026-08-02",
    type: "Field Note",
    title: "Welcome to the Record",
    summary: "This is where daily updates, new video investigations, and short field notes on active cases and legislation will be posted as they happen.",
    link: "",
    video: ""
  },
  {
    date: "2026-07-30",
    type: "Video",
    title: "How a Bill Actually Becomes Law (Not the Schoolhouse Rock Version)",
    summary: "A walk through committee markup, floor amendments, and conference reports using a real bill currently moving through Congress.",
    link: "",
    video: ""
  },
  {
    date: "2026-07-24",
    type: "Case Update",
    title: "Docket Watch: Cert Granted in a Fourth Amendment Case Worth Tracking",
    summary: "The Supreme Court has agreed to hear a case on digital search warrants. Here's what's actually in the petition — not the headline version.",
    link: "",
    video: ""
  }
];
