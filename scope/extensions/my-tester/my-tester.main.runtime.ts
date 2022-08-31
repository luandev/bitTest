import { MainRuntime } from '@teambit/cli';
import { MyTesterAspect } from './my-tester.aspect';

export class MyTesterMain {
  // your aspect API goes here.
  getSomething() {}

  static slots = [];
  // define your aspect dependencies here.
  // in case you need to use another aspect API.
  static dependencies = [];

  static runtime = MainRuntime;

  static async provider() {
    return new MyTesterMain();
  }
}

MyTesterAspect.addRuntime(MyTesterMain);

export default MyTesterMain;
