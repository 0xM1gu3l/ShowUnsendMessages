/**
 * @name ShowUnsendMessages
 * @author M1gu3l0001
 * @description Be able to see messages before they are sen't to the server.
 * @version 0.1
 * @authorLink https://twitter.com/Migu3l0001
 * @website https://github.com/M1gu3l0001/
 * @source https://github.com/M1gu3l0001/ShowUnsendMessages
 * @updateUrl https://raw.githubusercontent.com/M1gu3l0001/ShowUnsendMessages/master/ShowUnsendMessage.plugin.js
 */

 module.exports = class ShowUnsendMessages {
    load() {} // Optional function. Called when the plugin is loaded in to memory

    start() {} // Required function. Called when the plugin is activated (including after reloads)
    stop() {} // Required function. Called when the plugin is deactivated
	//Testing if the plugin will auto-update

    observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}