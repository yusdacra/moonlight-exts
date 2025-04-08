import { greeting } from "@moonlight-mod/wp/lastFmRpc_someLibrary";

const logger = moonlight.getLogger("lastFmRpc/entrypoint");
logger.info("Hello from entrypoint!");
logger.info("someLibrary exports:", greeting);

const natives = moonlight.getNatives("lastFmRpc");
logger.info("node exports:", natives);
