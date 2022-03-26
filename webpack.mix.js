let mix = require('laravel-mix');
mix.disableNotifications();
mix.js('./resources/js/app.js', './public/js/app.js').sass(
    './resources/scss/app.scss',
    './public/css/app.css'
);

mix.js('./resources/js/aapp.js', './public/js/aapp.js').postCss(
    './resources/scss/aapp.css',
    './public/css/aapp.css',
    [require('tailwindcss')]
);
