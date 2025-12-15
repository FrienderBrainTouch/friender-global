// convert-images.js
import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES 모듈에서 __dirname 사용하기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 변환할 이미지가 있는 폴더 경로 (public/images)
const TARGET_DIR = path.join(__dirname, 'public/images/*.png');

async function convertImages() {
  try {
    // 1. 모든 PNG 파일 찾기
    const files = await glob(TARGET_DIR);

    if (files.length === 0) {
      console.log('❌ PNG 파일을 찾을 수 없습니다.');
      return;
    }

    console.log(`${files.length}개의 PNG 파일을 발견했습니다. 변환을 시작합니다...\n`);

    for (const file of files) {
      const filePath = path.parse(file);

      // 2. WebP로 변환 후 저장 (파일명.webp)
      const outputName = path.join(filePath.dir, `${filePath.name}.webp`);

      await sharp(file)
        .webp({ quality: 80 }) // 퀄리티 80% 설정 (조절 가능)
        .toFile(outputName);

      console.log(`✅ 변환 완료: ${path.basename(outputName)}`);

      // 원본 PNG 삭제
      fs.unlinkSync(file);
      console.log(`🗑️  원본 삭제: ${path.basename(file)}`);
    }
    console.log('\n🎉 모든 작업이 끝났습니다!');
  } catch (error) {
    console.error('❌ 오류 발생:', error);
    process.exit(1);
  }
}

convertImages();
