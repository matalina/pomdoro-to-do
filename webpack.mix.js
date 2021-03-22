let mix = require('laravel-mix');

mix.setPublicPath('www')
    .version();

mix.js('src/js/app.js', 'www/js')
    .vue()
    .extract();

mix.postCss("src/css/app.css", "www/css", [
    require("tailwindcss"),
   ]);