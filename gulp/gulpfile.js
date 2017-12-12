var gulp = require('gulp')
var del = require('del')

gulp.task('clean:mobile', function(){
    return del([
      'dist/report.csv',
      'dist/mobile/**/*',
      '!dist/mobile/deploy.json'
    ])
})

gulp.task('default',['clean:mobile'], function(){ 
  // 默认的任务代码
  console.log('default task')
})



