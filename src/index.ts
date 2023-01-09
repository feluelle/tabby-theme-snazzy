import { NgModule, Injectable } from '@angular/core'
import { Theme } from 'tabby-core'

@Injectable()
class SnazzyTheme extends Theme {
    name = 'Snazzy'
    css = require('./theme.snazzy.scss')
    terminalBackground = '#282A36'
}

@NgModule({
    providers: [
        { provide: Theme, useClass: SnazzyTheme, multi: true },
    ],
})
export default class SnazzyThemeModule { }
