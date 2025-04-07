const {envs} = require('./config/env')
const {startServer} = require('./server/server')

const main = () => {
    startServer(envs)
}

(async () => {
    main()
})()