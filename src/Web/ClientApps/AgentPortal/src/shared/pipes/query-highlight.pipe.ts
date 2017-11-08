import { Pipe, PipeTransform,  } from '@angular/core';

@Pipe({
    name: 'queryHighlight'
})
export class QueryHighlightPipe implements PipeTransform {
    transform(text: string, search: string): string {
        let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        pattern = pattern.split(' ').filter((t) => {
            return t.length > 0;
        }).join('|');
        let regex = new RegExp(pattern, 'gi');
        return search ? text.replace(regex, (match: string) => `<span style="background-color: lightgrey">${match}</span>`) : text;
    }
}