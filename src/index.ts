import { server } from "./server/Server";

server.listen(process.env.Port || 3100, () =>
  console.log(`rodando na porta ${process.env.PORT || 3100}`)
);
