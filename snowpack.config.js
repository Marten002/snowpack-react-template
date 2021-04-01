module.exports = {
    mount: {
        public: '/',
        src: '/dist'
    },
    plugins: [
        [
            '@snowpack/plugin-optimize',
            {
                minifyHTML: true,
                preloadModules: true
            }
        ],
        'snowpack-svgr-plugin',
        '@snowpack/plugin-postcss',
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-sass'
    ],
    routes: [
        {
            'match': 'routes',
            'src': '.*',
            'dest': '/index.html'
        }
    ],
    optimize: {
        bundle: true,
        minify: true,
        target: 'es2020'
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        port: 3000,
        open: 'none'
    },
    buildOptions: {
        /* ... */
    }
}
