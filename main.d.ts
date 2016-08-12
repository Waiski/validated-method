// Type definitions for mdg:validated-method meteor package
// Project: https://atmospherejs.com/mdg/validated-method
// Definitions by:  Dave Allen <https://github.com/fullflavedave>

declare module 'meteor/mdg:validated-method' {
  export class ValidatedMethod {
    name: string;
    mixins: any;
    validate: (...args: any[]) => boolean; // returned from SimpleSchemaInstance.validator() method;
    applyOptions: { [key: string]: any };
    run(...args: any[]): void;
  }
  export function checkNpmVersions(npmPackages: { [npmPackageName: string]: string /** version **/}, fullAtmospherePackageName: string): void;
}