const {defineConfig} = require("cypress");
const xlsx = require("xlsx");

function readDataFromExcel(data) {
    const workbook = xlsx.readFile(data.filePath, {dateNF: "mm/dd/yyyy"});
    const worksheet = workbook.Sheets[data.sheetName];
    return xlsx.utils.sheet_to_json(worksheet, {raw: false});
}

module.exports = defineConfig({
    projectId: '2k8vto',
    e2e: {
        experimentalRunAllSpecs: false,
        experimentalStudio: true,
        setupNodeEvents(on, config) {
            on("task", {
                log(message) {
                    console.log(message);
                    return null;
                },
                readDataFromExcel: (data) => {
                    return readDataFromExcel(data);
                },
            });
            return config;
        },
        experimentalWebKitSupport: true,
        slowTestThreshold: 20000,
        specPattern: "cypress/e2e/*.cy.js",

        env: {
            username: "user",
            password: "pass",
        },

        excludeSpecPattern: [],

        watchForFileChanges: false,
        viewportWidth: 1000,
        viewportHeight: 600,
        defaultCommandTimeout: 2000
    },

    // component: {
    //     devServer: {
    //         framework: "vue",
    //         bundler: "webpack",
    //     },
    // },
});
