export default {
    logo: <span>Validatrium Docs</span>,
    project: {
      link: 'https://github.com/Validatrium/validatrium-docs'
    },

    docsRepositoryBase: 'https://github.com/Validatrium/validatrium-docs',
    useNextSeoProps() {
        return {
          titleTemplate: '%s | Validatrium Docs'
        }
      },

      head: (
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="Validatrium Docs" />
          <meta property="og:description" content="Validatrium Resources & Documentation" />

          <meta name="title" content="Validatrium Docs" />
          <meta name="description" content="Validatrium Resources & Documentation" />

          <link rel="icon" href="https://validatrium.com/wp-content/uploads/2022/03/Group-931.svg" sizes="32x32"></link>
          <link rel="icon" href="https://validatrium.com/wp-content/uploads/2022/03/Group-931.svg" sizes="192x192"></link>
        </>
      )
  }

    