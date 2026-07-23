// Upload files to Cloudflare R2 via S3 API — zero dependencies
// Run: node scripts/upload-r2.mjs

import { createHash, createHmac, randomBytes } from "crypto";
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import https from "https";

const ACCOUNT_ID = "b1fde548b9d044b9f24fbf4c3a378c90";
const ACCESS_KEY = "fbe7767d81808e809664530f338e354d";
const SECRET_KEY = "02af048c2c8e29b3a1938b84f8aa0fcf4ded9f81cab42567d5a29926889d5b49";
const BUCKET = "cctv";
const ENDPOINT = `${ACCOUNT_ID}.r2.cloudflarestorage.com`;

function sha256(data) { return createHash("sha256").update(data).digest("hex"); }
function hmac(key, data) { return createHmac("sha256", key).update(data).digest(); }

function signRequest(method, path, body, date, amzDate) {
  const dateStamp = date;
  const canonicalUri = "/" + path;
  const payloadHash = sha256(body);

  const canonicalHeaders = `host:${ENDPOINT}\nx-amz-content-sha256:${payloadHash}\nx-amz-date:${amzDate}\n`;
  const signedHeaders = "host;x-amz-content-sha256;x-amz-date";

  const canonicalRequest = [
    method, canonicalUri, "",
    canonicalHeaders, signedHeaders, payloadHash,
  ].join("\n");

  const credentialScope = `${dateStamp}/auto/s3/aws4_request`;
  const stringToSign = [
    "AWS4-HMAC-SHA256", amzDate, credentialScope, sha256(canonicalRequest),
  ].join("\n");

  const kDate = hmac("AWS4" + SECRET_KEY, dateStamp);
  const kRegion = hmac(kDate, "auto");
  const kService = hmac(kRegion, "s3");
  const kSigning = hmac(kService, "aws4_request");
  const signature = createHmac("sha256", kSigning).update(stringToSign).digest("hex");

  return `AWS4-HMAC-SHA256 Credential=${ACCESS_KEY}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;
}

function uploadFile(key, data, contentType) {
  return new Promise((resolve, reject) => {
    const now = new Date();
    const date = now.toISOString().replace(/[:-]|\.\d{3}/g, "").slice(0, 8);
    const amzDate = date + "T" + now.toISOString().slice(11, 19).replace(/:/g, "") + "Z";

    const authorization = signRequest("PUT", key, data, date, amzDate);

    const options = {
      hostname: ENDPOINT,
      port: 443,
      path: "/" + key,
      method: "PUT",
      headers: {
        "Host": ENDPOINT,
        "x-amz-date": amzDate,
        "x-amz-content-sha256": sha256(data),
        "Content-Type": contentType,
        "Content-Length": data.length,
        "Authorization": authorization,
      },
    };

    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => body += chunk);
      res.on("end", () => {
        if (res.statusCode === 200) {
          resolve(body);
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${body}`));
        }
      });
    });
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

const PUBLIC_DIR = join(process.cwd(), "public");

function getContentType(filePath) {
  if (filePath.endsWith(".mp4")) return "video/mp4";
  if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) return "image/jpeg";
  return "application/octet-stream";
}

async function main() {
  // Upload videos
  const videoDir = join(PUBLIC_DIR, "video");
  const mp4Files = readdirSync(videoDir).filter(f => f.endsWith(".mp4"));
  for (const f of mp4Files) {
    const relPath = `video/${f}`;
    const fullPath = join(PUBLIC_DIR, relPath);
    const data = readFileSync(fullPath);
    const size = (statSync(fullPath).size / 1024 / 1024).toFixed(1);
    try {
      await uploadFile(`${BUCKET}/${relPath}`, data, getContentType(f));
      console.log(`OK  ${relPath} (${size}MB)`);
    } catch (e) {
      console.error(`ERR ${relPath}: ${e.message}`);
    }
  }

  // Upload posters
  const posterDir = join(videoDir, "posters");
  const posterFiles = readdirSync(posterDir).filter(f => f.endsWith(".jpg"));
  for (const f of posterFiles) {
    const relPath = `video/posters/${f}`;
    const fullPath = join(PUBLIC_DIR, relPath);
    const data = readFileSync(fullPath);
    try {
      await uploadFile(`${BUCKET}/${relPath}`, data, "image/jpeg");
      console.log(`OK  ${relPath}`);
    } catch (e) {
      console.error(`ERR ${relPath}: ${e.message}`);
    }
  }

  console.log("\nDone! Set NEXT_PUBLIC_R2_URL=https://pub-b427d38a605f41d19ffd248ff3f9405c.r2.dev");
}

main().catch(console.error);
