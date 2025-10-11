// import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import { NextResponse } from "next/server";

// // type ResponseData = {
// //   url: string;
// // };

// export async function GET(imageName: string): Promise<Response> {
//   const access_key_id = process.env.AWS_ACCESS_KEY_ID;
//   const secret_access_key = process.env.AWS_SECRET_ACCESS_KEY;
//   const region = process.env.AWS_REGION;
//   const aws_bucket_name = process.env.AWS_S3_BUCKET_NAME;
//   if (!access_key_id || !secret_access_key || !aws_bucket_name) {
//     return new Response(null, { status: 500 });
//   }

//   const client = new S3Client({
//     credentials: {
//       accessKeyId: access_key_id,
//       secretAccessKey: secret_access_key,
//     },
//     region: region,
//   });

//   try {
//     const command = new GetObjectCommand({
//       Bucket: aws_bucket_name,
//       Key: imageName,
//     });
//     const url = await getSignedUrl(client, command);
//     return new NextResponse(url);
//   } catch (error) {
//     console.log("Error fetching from s3", error);
//     return new NextResponse("Error fetching image");
//   }
// }

export function GET(request: Request) {}
