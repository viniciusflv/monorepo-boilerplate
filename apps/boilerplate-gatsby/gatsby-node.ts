import type { CreatePageArgs } from 'gatsby';

export const onCreatePage = ({ page, actions, reporter }: CreatePageArgs) => {
  // Se a rota possuí o "$"
  if (page.path.match(/(?=[^/])\$\w+/g)) {
    /**
     * Faça o replace dele por ":"
     * Salve ele na variável "matchPath"
     * para que o router que o Gatsby usa considere ele como uma rota dinâmica.
     * https://reach.tech/router/
     */
    page.matchPath = page.path.replace(/\$/gm, ':');
    // Log
    reporter.info(`Creating CSR page ${page.matchPath}`);
    // Cria a página com essa rota
    actions.createPage(page);
  }
};
