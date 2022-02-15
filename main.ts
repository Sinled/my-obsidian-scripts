import {  Plugin } from 'obsidian';

export default class MyObsidianScripts extends Plugin {
    async onload() {
        console.log('init my obsidian scripts');
    }

    onunload() {

    }
}
