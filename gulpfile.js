var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'),
    src_sass = 'app/sass/**/*.scss',
    src_css = 'app/css'; //Подключаем Sass пакет

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src(src_sass) // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest(src_css)) // Выгружаем результат в папку app/css
});

gulp.task('sass:watch', function(){
	gulp.watch(src_sass, ['sass'])	
});

