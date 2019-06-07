/**
 * @global SETUP TESTS
 * @description Configure the default adapter for enzyme tests on the project
 */

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
