const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToOptimize = [
    { input: 'public/image/event.png', output: 'public/image/event.webp', width: 1280, quality: 80 },
    { input: 'public/image/ourvision.png', output: 'public/image/ourvision.webp', width: 1280, quality: 80 },
    { input: 'public/image/co-chairs-headshot.png', output: 'public/image/co-chairs-headshot.webp', width: 800, quality: 80 },
];

async function optimize() {
    for (const img of imagesToOptimize) {
        try {
            const inputPath = path.join(process.cwd(), img.input);
            const outputPath = path.join(process.cwd(), img.output);

            if (fs.existsSync(inputPath)) {
                await sharp(inputPath)
                    .resize(img.width)
                    .webp({ quality: img.quality })
                    .toFile(outputPath);
                console.log(`Optimized: ${img.input} -> ${img.output}`);
            } else {
                console.warn(`Skipping missing file: ${img.input}`);
            }
        } catch (error) {
            console.error(`Error optimizing ${img.input}:`, error);
        }
    }
}

optimize();
