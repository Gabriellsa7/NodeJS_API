import { server } from "./server/Server";

server.listen(process.env.Port || 3100, () =>
  console.log(`running at the door ${process.env.PORT || 3100}`)
);
