import { Client } from "@iota/sdk";

const useClient = async () => {
  const client = new Client({
    nodes: [
      {
        url: process.env.NODE_URL ?? "https://shimmer.spyce5.com",
        auth: {
          jwt: process.env.API_KEY ?? "<Your API Key here>", // <- insert your API key here
        },
      },
    ],
  });

  const info = await client.getInfo();
  console.log(`Network: ${info.nodeInfo.protocol.bech32Hrp}`);

  const blockIdAndBlock = await client.buildAndPostBlock();
  console.log(`Explore created block: https://explorer.shimmer.network/shimmer/block/${blockIdAndBlock[0]}`);

  client.destroy();
}


useClient();