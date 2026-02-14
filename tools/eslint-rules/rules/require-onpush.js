// rule: require-onpush
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Require ChangeDetectionStrategy.OnPush on Angular components',
      category: 'Best Practices',
    },
    schema: [],
    messages: {
      missing: 'Component must set `changeDetection: ChangeDetectionStrategy.OnPush`.',
      incorrect: 'Component must use `ChangeDetectionStrategy.OnPush` (found `{{found}}`).',
    },
  },
  create(context) {
    return {
      ClassDeclaration(node) {
        if (!node.decorators || node.decorators.length === 0) return;
        for (const dec of node.decorators) {
          const expr = dec.expression;
          // decorator could be CallExpression or Identifier (rare)
          if (!expr || expr.type !== 'CallExpression') continue;
          const callee = expr.callee;
          const isComponent =
            (callee.type === 'Identifier' && callee.name === 'Component') ||
            (callee.type === 'MemberExpression' && callee.property && callee.property.name === 'Component');
          if (!isComponent) continue;

          const args = expr.arguments || [];
          if (args.length === 0) {
            context.report({ node: dec, messageId: 'missing' });
            continue;
          }
          const config = args[0];
          if (!config || config.type !== 'ObjectExpression') {
            // can't analyze non-literal decorator args
            continue;
          }

          let foundChange = null;
          for (const prop of config.properties) {
            if (prop.type !== 'Property') continue;
            const keyName = prop.key && (prop.key.name || (prop.key.value));
            if (keyName === 'changeDetection') {
              const val = prop.value;
              if (val.type === 'MemberExpression') {
                const obj = val.object;
                const propName = val.property && (val.property.name || (val.property.value));
                if (obj && obj.name === 'ChangeDetectionStrategy' && propName === 'OnPush') {
                  foundChange = 'OnPush';
                } else if (obj && obj.name) {
                  foundChange = `${obj.name}.${propName}`;
                }
              } else if (val.type === 'Identifier') {
                foundChange = val.name;
              } else {
                foundChange = context.getSourceCode().getText(val);
              }
              break;
            }
          }

          if (!foundChange) {
            context.report({ node: dec, messageId: 'missing' });
          } else if (foundChange !== 'OnPush' && foundChange !== 'ChangeDetectionStrategy.OnPush') {
            context.report({ node: dec, messageId: 'incorrect', data: { found: foundChange } });
          }
        }
      },
    };
  },
};

