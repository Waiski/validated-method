// Type definitions for mdg:validated-method meteor package
// Project: https://atmospherejs.com/mdg/validated-method
// Definitions by:  Dave Allen <https://github.com/fullflavedave>


interface ValidatedMethod_Static {
  new<ArgType extends { [key: string]: any; }, ReturnType>(options: {
    name: string;
    mixins?: Function[];
    validate: (args: { [key: string]: any; }) => void; // returned from SimpleSchemaInstance.validator() method;
    applyOptions?: {
      noRetry: boolean;
      returnStubValue: boolean;
      throwStubExceptions: boolean;
      onResultReceived: (result: any) => void;
      [key: string]: any };
    run: (args: ArgType) => ReturnType;
  }): ValidatedMethod_Instance<ArgType, ReturnType>;
}

interface ValidatedMethod_Instance<ArgType, ReturnType> {
  call(args: ArgType, cb?: (error: any, result: ReturnType) => void ): ReturnType;
  _execute(context: { [key: string]: any; }, args: ArgType): ReturnType;
}

declare const ValidatedMethod: ValidatedMethod_Static;

declare module 'meteor/mdg:validated-method' {
  export const ValidatedMethod: ValidatedMethod_Static;
}
