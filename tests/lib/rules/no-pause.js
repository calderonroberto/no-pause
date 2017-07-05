/**
 * @fileoverview No pause property allowed
 * @author Roberto Calderon
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-pause"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-pause", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "this.pause(1000)",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
