import { Component } from '@angular/core';

/**
 * Main Component (Temporary to demo the chat window)
 *
 * Note: This component must be removed and replaced with chat-bot.component.ts
 *
 * later when using the OIT web page to launch the chat window
 * That includes modifying the index.cshtml file for the chat application to resize its
 * browser frame
 */
@Component({
    selector: 'agent-portal',
    template: `
        <div class="container-fluid">
            <home></home>
        </div>
    `,
})
export class AgentPortalComponent {
}