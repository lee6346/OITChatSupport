import { Directive, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ReflectiveInjector, Type } from '@angular/core';
import { ChatSessionComponent } from '../chatsession/chat-session.component';


@Directive({ selector: '[createChatSession]' })
export class CreateChatSessionDirective {

    constructor(
        private viewContainer: ViewContainerRef,
        private factoryResolver: ComponentFactoryResolver
    ) { }


    public createChatSession(conversationId: string, agentId: string, chatSession: Type<ChatSessionComponent>): ComponentRef<ChatSessionComponent> {

        //removes already open chat windows (only use if we want one window open at time)
        //this.viewContainer.clear(); 

        let inputProviders = [
            { provide: 'conversationId', useValue: conversationId },
            { provide: 'agentId', useValue: agentId },
        ];
        let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
        let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs);
        let chatSessionFactory = this.factoryResolver.resolveComponentFactory(chatSession);
        let chatSessionComponentRef = this.viewContainer.createComponent(chatSessionFactory, undefined, injector);

        chatSessionComponentRef.instance.close.subscribe(() => {
            chatSessionComponentRef.destroy();
        });
        return chatSessionComponentRef;
    }


}