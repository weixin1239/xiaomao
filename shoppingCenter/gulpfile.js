var gulp = require('gulp');
gulp.task("copy-index",function(){
	gulp.src("*.html").pipe(gulp.dest("D:/phpStudy/WWW/xiaomao/shoppingCenter/"));
});
gulp.task("copy-images",function(){
	gulp.src("img/*.{jpg,png}")
	.pipe(gulp.dest("D:/phpStudy/WWW/xiaomao/shoppingCenter/img"));
})
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:/phpStudy/WWW/xiaomao/shoppingCenter/css"));
})
gulp.task("copy-js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:/phpStudy/WWW/xiaomao/shoppingCenter/js"));
})
//gulp.task("copy-php",function(){
//	gulp.src("*.php")
//	.pipe(gulp.dest("D:/phpStudy/WWW/xiaomao/shoppingCenter/php"));
//});
gulp.task("copy-php",function(){
	gulp.src("php/**/*")
	.pipe(gulp.dest("D:/phpStudy/WWW/xiaomao/shoppingCenter/php"));
});
gulp.task("watch",function(){
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("img/*",["copy-images"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("css/*.css",["copy-css"]);
//	gulp.watch("*.php",["copy-php"]);
	gulp.watch("php/**/*",["copy-php"]);
});