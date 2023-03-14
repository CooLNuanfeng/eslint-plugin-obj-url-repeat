/**
 * @fileoverview config value repeat
 * @author newCoder
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: "check config value repeat",
            category: "Fill me in",
            recommended: false
        },
        schema: [
            // fill in your schema
        ],
        // 报错信息描述
        messages: {
            avoidMethod: "The url and method of the '{{key}}' is same, the configuration is repeated",
        },
    },

    create: function(context) {
        // variables should be defined here
        // any helper functions should go here or else delete this section
        const valueMap = new Map()
        function checkNodeProp(properties){
            for(let i = 0; i<properties.length; i++){
                let node = properties[i]
                let nodeVal = node.value
                let nodeKey = node.key
                if(nodeVal.type === 'ObjectExpression'){
                    let propNode = nodeVal.properties
                    if(propNode){
                        checkRepateValue(propNode, nodeKey.name)
                    }
                }
            }
        }

        function checkRepateValue(properties, key){
          for(let i = 0; i<properties.length; i++){
              let node = properties[i]
              let nodeVal = node.value
              let nodeKey = node.key
              let keyStr = valueMap.get(key) || ''
              if(nodeKey.name === 'url' || nodeKey.name === 'method'){
                let tmp = (nodeKey.name === 'method' ? nodeVal.value.toLowerCase() : nodeVal.value)
                let rest = keyStr ? keyStr + '=' + tmp : keyStr + tmp
                let values = [...valueMap.values()]
                valueMap.set(key, rest)
                if(values.includes(rest) || values.includes(rest.split('=').reverse().join('='))){
                    context.report({
                    node,
                    messageId: 'avoidMethod',
                    data: {
                        key
                    },
                    });
                }
              }
          }
        }


        return {
            // give me methods
            'VariableDeclarator ObjectExpression': (node) => {
                // console.log(node)
                checkNodeProp(node.properties)   
            }
        };
    }
};
