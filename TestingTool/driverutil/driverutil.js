import "chromedriver";
import "geckodriver";
import "iedriver";
import "edgedriver";
import "operadriver";
import { Builder, Capabilities } from "selenium-webdriver";
import { Level } from "selenium-webdriver/lib/logging";

export default function getDriver() {
    var browser = process.env.BROWSER;
    var browsername = browser == undefined ? 'chrome' : browser;


    switch (browsername.toUpperCase()) {
        case 'FIREFOX':
            return new Builder().forBrowser('firefox').build();
        case 'CHROME':

            var args = [
                '--js-flags=--expose-gc',
                '--enable-precise-memory-info',
                '--no-first-run',
                '--disable-background-networking',
                '--disable-background-timer-throttling',
                '--disable-cache',
                '--disable-translate',
                '--disable-sync',
                '--disable-extensions',
                '--disable-default-apps',
                '--window-size=1200,800',
                '--incognito'
            ];

            var capabilities = new Capabilities({
                browserName: 'chrome',
                platform: 'ANY',
                version: 'stable',
                "goog:chromeOptions": {
                    args: args,
                    perfLoggingPrefs: {
                        enableNetwork: true,
                        enablePage: true,
                        traceCategories: 'devtools.timeline,blink.user_timing'
                    },
                    excludeSwitches: ['enable-automation']
                },
                "goog:loggingPrefs": {
                    browser: 'ALL',
                    performance: 'ALL'
                }
            });

            return new Builder()
                .forBrowser('chrome')
                .withCapabilities(capabilities)
                .build();
        case 'IE':
            return new Builder().forBrowser('internet explorer').build();
        case 'EDGE':
            return new Builder().forBrowser('MicrosoftEdge').build();
        case 'OPERA':
            return new Builder().forBrowser('opera').build();
        default:
            return new Builder().forBrowser('chrome').build();
    }
};