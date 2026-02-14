// rule: no-style-urls
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow styleUrls in Angular @Component decorator',
      category: 'Best Practices',
    },
    schema: [],
    messages: {
      found: 'Avoid `styleUrls`/external component styles. Use Tailwind utilities in templates instead.',
    },
  },
  create(context) {
    return {
      ClassDeclaration(node) {
        if (!node.decorators || node.decorators.length === 0) return;
        for (const dec of node.decorators) {
          const expr = dec.expression;
          if (!expr || expr.type !== 'CallExpression') continue;
          const callee = expr.callee;
          const isComponent =
            (callee.type === 'Identifier' && callee.name === 'Component') ||
            (callee.type === 'MemberExpression' && callee.property && callee.property.name === 'Component');
          if (!isComponent) continue;

          const args = expr.arguments || [];
          if (args.length === 0) continue;
          const config = args[0];
          if (!config || config.type !== 'ObjectExpression') continue;

          for (const prop of config.properties) {
            if (prop.type !== 'Property') continue;
            const keyName = prop.key && (prop.key.name || (prop.key.value));
            if (keyName === 'styleUrls' || keyName === 'styles') {
              context.report({ node: prop, messageId: 'found' });
            }
          }
        }
      },
    };
  },
};

