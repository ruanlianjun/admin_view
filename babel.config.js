module.exports = {
    presets: [
        ['@vue/app', {modules: false}]
    ],
    // sourceType: 'unambiguous',
    plugins: [["import", {
        "libraryName": "heyui",
        "libraryDirectory": "lib/components"
    }]]

};
