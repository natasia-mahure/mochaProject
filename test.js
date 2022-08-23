// const chai = window.chai
import greet from "./greet.js"
import assert from "assert"


describe('greet', () => {
    it("should return 'Hello, Paris' when Paris is passed as parameter", () => {
        assert(greet("Paris"));
    })
})
