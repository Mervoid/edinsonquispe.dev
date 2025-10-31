// scripts/rename-sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Para obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔄 Renombrando sitemap...');

const distPath = path.join(process.cwd(), 'dist');

try {
  const files = fs.readdirSync(distPath);
  console.log('📁 Archivos en dist:', files);
  
  const sitemapFiles = files.filter(f => f.includes('sitemap'));
  console.log('🔍 Archivos sitemap encontrados:', sitemapFiles);

  // Buscar sitemap-0.xml o cualquier sitemap-*.xml
  const sitemapPattern = /^sitemap-\d+\.xml$/;
  const sitemapFile = files.find(f => sitemapPattern.test(f));
  const indexPath = path.join(distPath, 'sitemap-index.xml');
  const newPath = path.join(distPath, 'sitemap.xml');

  if (sitemapFile) {
    const oldPath = path.join(distPath, sitemapFile);
    
    // Renombrar el archivo
    fs.renameSync(oldPath, newPath);
    console.log(`✅ ${sitemapFile} → sitemap.xml`);
    
    // Eliminar sitemap-index.xml si existe
    if (fs.existsSync(indexPath)) {
      fs.unlinkSync(indexPath);
      console.log('✅ sitemap-index.xml eliminado');
    }
    
    console.log('🎯 Sitemap renombrado correctamente');
  } else {
    console.log('⚠️ No se encontró ningún archivo sitemap-*.xml para renombrar');
  }
} catch (error) {
  console.error('❌ Error:', error.message);
}