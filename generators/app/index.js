const Generator = require("yeoman-generator")

module.exports = class extends Generator {
    prompting () {
        return this.prompt([{
            name: "name",
            type: "input",
            message: "you app name",
            default: this.appname
        }]).then(answer => this.answer = answer)
    }
    writing () {

        const tempPaths = ['.browserslistrc',
        '.editorconfig',
        '.env.development',
        '.env.production',
        '.eslintrc.js',
        '.gitignore',
        'babel.config.js',
        'package.json',
        'postcss.config.js',
        'README.md',
        'public/favicon.ico',
        'public/index.html',
        'src/App.vue',
        'src/main.js',
        'src/router.js',
        'src/assets/logo.png',
        'src/components/HelloWorld.vue',
        'src/store/actions.js',
        'src/store/getters.js',
        'src/store/index.js',
        'src/store/mutations.js',
        'src/store/state.js',
        'src/utils/request.js',
        'src/views/About.vue',
        'src/views/Home.vue']
        tempPaths.forEach(path => {
            let temp = this.templatePath(path)

            let output = this.destinationPath(path)
            
            let context = this.answer 
             
            this.fs.copyTpl(temp, output, context)
        }) 
    }
}