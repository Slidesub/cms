module.exports = {
    baseUrl: '/',
    productionSourceMap:false,
    devServer: {
        port: 3000,
        index: 'admin.html',
        historyApiFallback: {
            rewrites: [
                { from: /\/admin/, to: '/admin.html' },
                { from: /\/blog/, to: '/blog.html' }
            ]
        }
    },
    pages: {
        admin: {
            entry: 'src/module/admin/main.ts',
            template: 'public/admin.html',
            filename: 'admin.html',
            title: 'ADMIN',
            chunks: ['chunk-vendors', 'chunk-common', 'admin'],
            inject: true
        },
        blog: {
            entry: 'src/module/blog/main.ts',
            template: 'public/blog.html',
            filename: 'blog.html',
            title: 'BLOG',
            chunks: ['chunk-vendors', 'chunk-common', 'blog'],
            inject: true
        }
    }
}