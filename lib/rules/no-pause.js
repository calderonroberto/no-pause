/**
 * @fileoverview No pause property allowed
 * @author Roberto Calderon
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "No pause property allowed",
            category: "No pause",
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create: function (context) {
        return {
            'CallExpression': function (node) {
                var object = node.callee.object;
                var property = node.callee.property;

                if (object && property && property.name === 'pause') {
                    context.report({
                        node: node,
                        message: 'Unexpected .pause() property'
                    })
                }
            }
        }
    }


};
