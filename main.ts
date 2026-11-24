import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "We hire retired grandmothers to scold startup founders on video calls, because founders who ignore every advisor will pay $80 an hour to obey someone they cannot argue with.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
