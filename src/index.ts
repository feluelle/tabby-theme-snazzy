import { NgModule, Injectable } from '@angular/core'
import { SnazzyColorScheme } from 'colorScheme'
import { Theme } from 'tabby-core'
import { TerminalColorSchemeProvider } from 'tabby-terminal'

@Injectable()
class SnazzyTheme extends Theme {
    name = 'Snazzy'
    css = require('./theme.snazzy.scss')
    terminalBackground = '#282A36'
}

@NgModule({
    providers: [
        { provide: Theme, useClass: SnazzyTheme, multi: true },
        { provide: TerminalColorSchemeProvider, useClass: SnazzyColorScheme, multi: true },
    ],
})
export default class SnazzyThemeModule { }
