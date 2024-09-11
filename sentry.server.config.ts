// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://13536b07933428c4acf552da79fd73eb@o4507934996234240.ingest.de.sentry.io/4507935195988048",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
