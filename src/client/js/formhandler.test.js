import 'babel-polyfill'
// To Fix ReferenceError: regeneratorRuntime is not defined
import { handleSubmit } from "./formHandler"


describe("Bringing Data from localhost:8085", () => {
    test("return truthy",() => {
        expect(handleSubmit).toBeTruthy();
    })})