import { Directive, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ReflectiveInjector, Type } from '@angular/core';

import { LoggerDisplayComponent } from './logger-display.component';
import { LogLevel } from './log-level.enum';

@Directive({ selector: '[insertLoggerMessage]' })
export class InsertLoggerMessageDirective {

    constructor(
        private viewContainer: ViewContainerRef,
        private factoryResolver: ComponentFactoryResolver
    ) { }


    public createLoggerDisplayWindow(
        logLevel: LogLevel,
        logMessage: string,
        stackTrace: string = '',
        loggerDisplay: Type<LoggerDisplayComponent>): ComponentRef<LoggerDisplayComponent> {

        //removes already open chat windows (only use if we want one window open at time)
        //this.viewContainer.clear(); 

        let inputProviders = [
            { provide: 'logLevel', useValue: logLevel },
            { provide: 'logMessage', useValue: logMessage },
            { provide: 'stackTrace', useValue: stackTrace }
        ];
        let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
        let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs);
        let loggerDisplayFactory = this.factoryResolver.resolveComponentFactory(loggerDisplay);
        let loggerDisplayComponentRef = this.viewContainer.createComponent(loggerDisplayFactory, undefined, injector);

        loggerDisplayComponentRef.instance.close.subscribe(() => {
            loggerDisplayComponentRef.destroy();
        });
        return loggerDisplayComponentRef;
    }


}