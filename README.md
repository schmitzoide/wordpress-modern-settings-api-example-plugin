# WordPress Modern Settings API Example Plugin #
Welcome to this project! Our main goal is to set up a new API to make it easier for developers and plugin authors to use react-enabled components inside their settings page. 

React is a popular JavaScript library for building user interfaces. When used in conjunction with WordPress, it can provide several benefits. One benefit is that React allows for building highly interactive and dynamic user interfaces, which can enhance the user experience on a WordPress website. Additionally, React's ability to efficiently update and render components can improve the performance of a WordPress website, particularly when dealing with large amounts of data. React also allows for easy integration with other web technologies, such as APIs, which can enable additional functionality on a WordPress website. 

With this example plugin installed, developers can see how to create a settings page based on React components, benefiting from the widely adopted and well-supported technology, making it easier to find developers with experience using it, in conjuction with the [feature api](https://github.com/schmitzoide/wordpress-modern-settings-api).

# Getting Started #

Clone the [feature api](https://github.com/schmitzoide/wordpress-modern-settings-api) first and follow the instructions on the repo to get started. The, clone this plugin, and you you haven't so, do a `npm link` inside the feature plugin folder first, and then run `npm link wordpress-modern-settings-api` on this plugin. At the end, run a `npm install` and then a `npm run build` command. You're ready to activate the plugin and see how it renders the example settins screen.

# Get Involved #
We'd like for you to get involved and help us complete a list of suggested next steps, as this is a fairly young and ambitious project.

The short / midterm goals are to create exposed components inside the feature plugin that allow the developer to create consistent and easy to use interfaces, and to create on the example plugin the use cases for those components. All of that dealing with the logic behind accessing metadata, and other config values, the same way WooCommerce components are offered to be used by 3rd party extensions.

This is a short list of the next steps we suggest taking:

- [ ] Review the whole PHP and JavaScript code and clean up as needed.
- [ ] Review and revalidate the settings.json schema.
- [ ] Test if there is support for multiple example plugins to run at the same time.
- [ ] After adding support for submenus on the feature plugin, update this plugin with an example.
- [ ] Add a first component to the feature plugin that enables the creation of a form with some inputs and saves the values into metadata, and demonstrate it here.

This is a basic first list, feel free to engage and suggest other steps. 

Maintaned by [Marcel Schmitz](https://twitter.com/schmitzoide).