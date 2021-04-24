import { Storage } from "@google-cloud/storage";

export default async function handler(req: any, res: any) {
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    // credentials: {
    //   client_email: process.env.CLIENT_EMAIL,
    //   private_key: process.env.PRIVATE_KEY,
    // },
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  });

  const bucketName = "sample-upload-img";
  const bucket = storage.bucket(bucketName);
  const file = bucket.file(req.query.file);
  const options = {
    expires: Date.now() + 1 * 60 * 1000,
    fields: { "x-goog-meta-test": "data" },
  };
  const [response] = await file.generateSignedPostPolicyV4(options);
  res.status(200).json(response);
}
