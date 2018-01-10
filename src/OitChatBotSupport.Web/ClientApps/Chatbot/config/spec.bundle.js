Error.stackTraceLimit = Infinity;

// Load required polyfills and testing libraries
import 'reflect-metadata';
import 'core-js';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'rxjs/Rx';

import * as testing from '@angular/core/testing';
import * as testingBrowser from '@angular/platform-browser-dynamic/testing';


// Initialize the Angular testing environment
testing.getTestBed().initTestEnvironment(
    testingBrowser.BrowserDynamicTestingModule,
    testingBrowser.platformBrowserDynamicTesting()
);

// find all the tests files in src
const context = require.context('../src', true, /\.spec\.ts$/);

// load all modules
context.keys().map(context);

