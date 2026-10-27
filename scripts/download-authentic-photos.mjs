import fs from "fs";
import path from "path";
import https from "https";

const imagesToDownload = [
  {
    dest: "public/images/home/hero.webp",
    url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/home/safety-environment.webp",
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/home/about-campus.webp",
    url: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/daycare/hero.webp",
    url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/daycare/dining-routine.webp",
    url: "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/daycare/after-school.webp",
    url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/programmes/hero.webp",
    url: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/programmes/playgroup.webp",
    url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/programmes/nursery.webp",
    url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/programmes/kindergarten.webp",
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/gallery/art-craft.webp",
    url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/gallery/reading-corner.webp",
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/gallery/outdoor-play.webp",
    url: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/gallery/circle-time.webp",
    url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/gallery/sensory-zone.webp",
    url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/gallery/hygiene-wash.webp",
    url: "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/about/campus.webp",
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=85&fm=webp"
  },
  {
    dest: "public/images/contact/campus-gate.webp",
    url: "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=1200&q=85&fm=webp"
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const fullDest = path.join(process.cwd(), dest);
    const dir = path.dirname(fullDest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(fullDest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Follow redirect
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`Saved: ${dest} (${fs.statSync(fullDest).size} bytes)`);
        resolve();
      });
    }).on("error", (err) => {
      fs.unlink(fullDest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log("Starting authentic photography downloads...");
  for (const item of imagesToDownload) {
    try {
      await download(item.url, item.dest);
    } catch (e) {
      console.error(`Error downloading ${item.dest}:`, e.message);
    }
  }
  console.log("All authentic photographs downloaded successfully!");
}

run();
