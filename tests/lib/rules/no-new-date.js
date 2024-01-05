/**
 * @fileoverview 5kdk
 * @author 5kdk
 */

"use strict";

// -------------------------------------------------------------------------
// Requirements
// -------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-new-date"),
  RuleTester = require("eslint").RuleTester;

// -----------------------------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-new-date", rule, {
  valid: [
    {
      code: "new Date(2021, 1, 1)",
    },
    {
      code: 'new Date("2022-01-01")',
    },
  ],

  invalid: [
    {
      code: "new Date()",
      errors: [{ message: rule.meta.message.message }],
      output: "ServerDate()",
    },
  ],
});
