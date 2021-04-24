import { Storage } from "@google-cloud/storage";

export default async function handler(req, res) {
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  });

  const bucketName = "sample-upload-img";
  console.log(req.query.file);
  const post = await storage
    .bucket(bucketName)
    .file(req.query.file)
    .getSignedUrl({ action: "read", expires: Date.now() + 3600000 });
  //   await storage.bucket(bucketName).upload("test.png");
  console.log(post);
  res.status(200).json(post);
}
