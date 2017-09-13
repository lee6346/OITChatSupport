/* Default environment when prod or dev is not specified */

export const environment = {
    production: false,
    directLineAPI: 'http://directline/api/v3'
};

/* to consume in other TS files
 * import { environment } from ../...
 * apiUrl = environment.directLineAPI;
 */