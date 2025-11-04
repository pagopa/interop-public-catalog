import {
  CloudFrontClient,
  CreateInvalidationCommand,
} from "@aws-sdk/client-cloudfront";
import type {
  CloudFrontClientConfig,
  CreateInvalidationCommandInput,
} from "@aws-sdk/client-cloudfront";

export const runAWSInvalidate = async (ref: string) => {
  try {
    const config: CloudFrontClientConfig = {};
    const client = new CloudFrontClient(config);
    const paths = process.env
      .CDN_INVALIDATION_PATH!.split(",")
      .map((el) => el.trim());
    const input: CreateInvalidationCommandInput = {
      DistributionId: process.env.CDN_ID, // required
      InvalidationBatch: {
        Paths: {
          // Paths
          Quantity: paths.length, // required
          Items: paths,
        },
        CallerReference: ref, // required
      },
    };
    const command = new CreateInvalidationCommand(input);
    const response = await client.send(command);
    return response;
  } catch (err) {
    return { err };
  }

  // { // CreateInvalidationResult
  //   Location: "STRING_VALUE",
  //   Invalidation: { // Invalidation
  //     Id: "STRING_VALUE", // required
  //     Status: "STRING_VALUE", // required
  //     CreateTime: new Date("TIMESTAMP"), // required
  //     InvalidationBatch: { // InvalidationBatch
  //       Paths: { // Paths
  //         Quantity: Number("int"), // required
  //         Items: [ // PathList
  //           "STRING_VALUE",
  //         ],
  //       },
  //       CallerReference: "STRING_VALUE", // required
  //     },
  //   },
  // };
};
