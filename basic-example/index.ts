import { Client } from "@iota/sdk";

const sendBlock = async () => {
  const client = new Client({
    nodes: [
      {
        url: process.env.NODE_URL ?? "<insert-your-endpoint-url", // <- insert your endpoint here
      },
    ],
  });

  const info = await client.getInfo();
  console.log(`Network: ${info.nodeInfo.protocol.bech32Hrp}`);

  const blockIdAndBlock = await client.buildAndPostBlock();
  console.log(`Explore created block: https://explorer.shimmer.network/shimmer/block/${blockIdAndBlock[0]}`);

  client.destroy();
}


sendBlock();