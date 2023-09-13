import { defineConfig } from 'cypress';

import { addCucumberPreprocessorPlugin, afterRunHandler } from '@badeball/cypress-cucumber-preprocessor';
//@ts-expect-error
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify';

//@ts-expect-error
import { generate } from 'multiple-cucumber-html-reporter';

const setupNodeEvents = async (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> => {
    await addCucumberPreprocessorPlugin(on, config, {
        omitAfterRunHandler: true
    });

    on('after:run', async () => {
        await afterRunHandler(config);
        generate({
            openReportInBrowser: true,
            disableLog: true,
            reportName: 'Cypress Cucumber',
            jsonDir: 'cypress/reports/json',
            reportPath: 'cypress/reports/html',
            pageTitle: 'AFT Report',
            displayDuration: true,
            metadata: {
                browser: {
                    name: config.browsers[0].name,
                    version: config.browsers[0].majorVersion
                },
                device: 'Virtual Machine',
                platform: {
                    name: config.platform === 'darwin' ? 'osx' : config.platform
                }
            }
        });
    });

    on(
        'file:preprocessor',
        browserify(config, {
            typescript: require.resolve('typescript')
        })
    );

    return config;
};

export default defineConfig({
    videosFolder: 'cypress/reports/videos',
    screenshotsFolder: 'cypress/reports/screenshots',
    video: true,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    e2e: {
        setupNodeEvents,
        specPattern: '**/*.feature',
        experimentalMemoryManagement: true,
        numTestsKeptInMemory: 1,
        defaultCommandTimeout: 85000,
        baseUrl: 'https://cms.demo.katalon.com/',
        supportFile: false
    }
});
