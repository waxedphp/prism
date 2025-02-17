<?php

return [
  'js' => [
    NODE . '/prismjs/prism.js',
    NODE . '/prismjs/components/prism-css.js',
    NODE . '/prismjs/components/prism-javascript.js',
    //NODE . '/prismjs/components/prism-html.js',
    NODE . '/prismjs/components/prism-markup-templating.js',//dependency for php
    NODE . '/prismjs/components/prism-php.js',
    NODE . '/prismjs/components/prism-pascal.js',
    NODE . '/prismjs/components/prism-markdown.js',
    NODE . '/prismjs/plugins/line-numbers/prism-line-numbers.js',
    NODE . '/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js',
    $PATH . '/plugin.js',
  ],
  'css' => [
    NODE . '/prismjs/themes/prism.css',
    //NODE . '/prismjs/themes/prism-solarizedlight.css',
    //NODE . '/prismjs/themes/prism-dark.css',
    //NODE . '/prismjs/themes/prism-funky.css',
    NODE . '/prismjs/plugins/line-numbers/prism-line-numbers.css',
    NODE . '/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.css',
    $PATH . '/style.css',
  ],
];
