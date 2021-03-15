rm -r dist
mkdir dist
#cp -r src/* dist  
#node-sass -r src/ -o dist/ --output-style compressed
mkdir dist/build_staging
npx babel src/ --out-dir dist/build_staging/ --plugins remove-comments --ignore "src/assets/*"
sleep 1
#minify dist/build_staging/ --out-dir dist/ --mangle.keepClassName
#rm -r dist/build_staging
rm -r dist/assets/*.bmp
rm -r dist/assets/img/*.bmp
rm -r dist/assets/*.jpg
rm -r dist/assets/img/*.jpg
rm -r dist/assets/*.jpeg
rm -r dist/assets/img/*.jpeg
rm -r dist/assets/*.svg
rm -r dist/assets/img/*.svg
rm -r dist/assets/*.png
rm -r dist/assets/img/*.png
rm -r dist/assets/*.gif
rm -r dist/assets/img/*.gif
imagemin src/assets/img/* --plugin.pngquant.quality:[0.9, 1] --out-dir=dist/assets/img
