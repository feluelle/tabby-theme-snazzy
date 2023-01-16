import { Injectable } from '@angular/core';
import { TerminalColorSchemeProvider, TerminalColorScheme } from 'tabby-terminal';

@Injectable()
export class SnazzyColorScheme extends TerminalColorSchemeProvider {
    async getSchemes (): Promise<TerminalColorScheme[]> {
        let theme: TerminalColorScheme[] = []

        theme.push({
            name: 'Snazzy',
            foreground: '#eff0eb',
            background: '#282a36',
            cursor: '#ffffff',
            colors: [
                '#232323',
                '#ff5c57',
                '#5af78e',
                '#f3f99d',
                '#57c7ff',
                '#ff6ac1',
                '#9aedfe',
                '#ffffff',
                '#444444',
                '#ff5c57',
                '#5af78e',
                '#f3f99d',
                '#57c7ff',
                '#ff6ac1',
                '#9aedfe',
                '#ffffff',
            ]
        })
        return theme
    }
}
