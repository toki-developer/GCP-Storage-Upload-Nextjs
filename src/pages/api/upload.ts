import { Storage } from "@google-cloud/storage";

export default async function handler(req: any, res: any) {
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  });

  const bucketName = "sample-upload-img";
  const url = await storage
    .bucket(bucketName)
    .file(req.query.file)
    .getSignedUrl({ action: "read", expires: Date.now() + 3600000 });
  res.status(200).json(url);
}
