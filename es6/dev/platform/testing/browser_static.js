import { APP_ID, NgZone, Provider, PLATFORM_COMMON_PROVIDERS, PLATFORM_INITIALIZER } from 'angular2/core';
import { DirectiveResolver, ViewResolver } from 'angular2/compiler';
import { BROWSER_APP_COMMON_PROVIDERS } from 'angular2/src/platform/browser_common';
import { BrowserDomAdapter } from 'angular2/src/platform/browser/browser_adapter';
import { AnimationBuilder } from 'angular2/src/animate/animation_builder';
import { MockAnimationBuilder } from 'angular2/src/mock/animation_builder_mock';
import { MockDirectiveResolver } from 'angular2/src/mock/directive_resolver_mock';
import { MockViewResolver } from 'angular2/src/mock/view_resolver_mock';
import { MockLocationStrategy } from 'angular2/src/mock/mock_location_strategy';
import { LocationStrategy } from 'angular2/platform/common';
import { MockNgZone } from 'angular2/src/mock/ng_zone_mock';
import { XHRImpl } from "angular2/src/platform/browser/xhr_impl";
import { XHR } from 'angular2/compiler';
import { TestComponentBuilder } from 'angular2/src/testing/test_component_builder';
import { BrowserDetection } from 'angular2/src/testing/utils';
import { ELEMENT_PROBE_PROVIDERS } from 'angular2/platform/common_dom';
import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Log } from 'angular2/src/testing/utils';
function initBrowserTests() {
    BrowserDomAdapter.makeCurrent();
    BrowserDetection.setup();
}
/**
 * Default platform providers for testing without a compiler.
 */
export const TEST_BROWSER_STATIC_PLATFORM_PROVIDERS = CONST_EXPR([
    PLATFORM_COMMON_PROVIDERS,
    new Provider(PLATFORM_INITIALIZER, { useValue: initBrowserTests, multi: true })
]);
export const ADDITIONAL_TEST_BROWSER_PROVIDERS = CONST_EXPR([
    new Provider(APP_ID, { useValue: 'a' }),
    ELEMENT_PROBE_PROVIDERS,
    new Provider(DirectiveResolver, { useClass: MockDirectiveResolver }),
    new Provider(ViewResolver, { useClass: MockViewResolver }),
    Log,
    TestComponentBuilder,
    new Provider(NgZone, { useClass: MockNgZone }),
    new Provider(LocationStrategy, { useClass: MockLocationStrategy }),
    new Provider(AnimationBuilder, { useClass: MockAnimationBuilder }),
]);
/**
 * Default application providers for testing without a compiler.
 */
export const TEST_BROWSER_STATIC_APPLICATION_PROVIDERS = CONST_EXPR([
    BROWSER_APP_COMMON_PROVIDERS,
    new Provider(XHR, { useClass: XHRImpl }),
    ADDITIONAL_TEST_BROWSER_PROVIDERS
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9zdGF0aWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUl0UjExZ25qLnRtcC9hbmd1bGFyMi9wbGF0Zm9ybS90ZXN0aW5nL2Jyb3dzZXJfc3RhdGljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEVBQ1IseUJBQXlCLEVBQ3pCLG9CQUFvQixFQUNyQixNQUFNLGVBQWU7T0FDZixFQUFDLGlCQUFpQixFQUFFLFlBQVksRUFBQyxNQUFNLG1CQUFtQjtPQUMxRCxFQUFDLDRCQUE0QixFQUFDLE1BQU0sc0NBQXNDO09BQzFFLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQ0FBK0M7T0FFeEUsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdDQUF3QztPQUNoRSxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMENBQTBDO09BQ3RFLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkM7T0FDeEUsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNDQUFzQztPQUM5RCxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMENBQTBDO09BQ3RFLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwwQkFBMEI7T0FDbEQsRUFBQyxVQUFVLEVBQUMsTUFBTSxnQ0FBZ0M7T0FFbEQsRUFBQyxPQUFPLEVBQUMsTUFBTSx3Q0FBd0M7T0FDdkQsRUFBQyxHQUFHLEVBQUMsTUFBTSxtQkFBbUI7T0FFOUIsRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDZDQUE2QztPQUV6RSxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCO09BRXBELEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEI7T0FFN0QsRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7T0FFNUMsRUFBQyxHQUFHLEVBQUMsTUFBTSw0QkFBNEI7QUFFOUM7SUFDRSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMzQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxPQUFPLE1BQU0sc0NBQXNDLEdBQy9DLFVBQVUsQ0FBQztJQUNULHlCQUF5QjtJQUN6QixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUM7Q0FDOUUsQ0FBQyxDQUFDO0FBRVAsT0FBTyxNQUFNLGlDQUFpQyxHQUMxQyxVQUFVLENBQUM7SUFDVCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLENBQUM7SUFDckMsdUJBQXVCO0lBQ3ZCLElBQUksUUFBUSxDQUFDLGlCQUFpQixFQUFFLEVBQUMsUUFBUSxFQUFFLHFCQUFxQixFQUFDLENBQUM7SUFDbEUsSUFBSSxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFDLENBQUM7SUFDeEQsR0FBRztJQUNILG9CQUFvQjtJQUNwQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUM7SUFDNUMsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQztJQUNoRSxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxvQkFBb0IsRUFBQyxDQUFDO0NBQ2pFLENBQUMsQ0FBQztBQUVQOztHQUVHO0FBQ0gsT0FBTyxNQUFNLHlDQUF5QyxHQUNsRCxVQUFVLENBQUM7SUFDVCw0QkFBNEI7SUFDNUIsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBQyxDQUFDO0lBQ3RDLGlDQUFpQztDQUNsQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBUFBfSUQsXG4gIE5nWm9uZSxcbiAgUHJvdmlkZXIsXG4gIFBMQVRGT1JNX0NPTU1PTl9QUk9WSURFUlMsXG4gIFBMQVRGT1JNX0lOSVRJQUxJWkVSXG59IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmVSZXNvbHZlciwgVmlld1Jlc29sdmVyfSBmcm9tICdhbmd1bGFyMi9jb21waWxlcic7XG5pbXBvcnQge0JST1dTRVJfQVBQX0NPTU1PTl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyX2NvbW1vbic7XG5pbXBvcnQge0Jyb3dzZXJEb21BZGFwdGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci9icm93c2VyX2FkYXB0ZXInO1xuXG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9hbmltYXRlL2FuaW1hdGlvbl9idWlsZGVyJztcbmltcG9ydCB7TW9ja0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL2FuaW1hdGlvbl9idWlsZGVyX21vY2snO1xuaW1wb3J0IHtNb2NrRGlyZWN0aXZlUmVzb2x2ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL2RpcmVjdGl2ZV9yZXNvbHZlcl9tb2NrJztcbmltcG9ydCB7TW9ja1ZpZXdSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svdmlld19yZXNvbHZlcl9tb2NrJztcbmltcG9ydCB7TW9ja0xvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL21vY2tfbG9jYXRpb25fc3RyYXRlZ3knO1xuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb24nO1xuaW1wb3J0IHtNb2NrTmdab25lfSBmcm9tICdhbmd1bGFyMi9zcmMvbW9jay9uZ196b25lX21vY2snO1xuXG5pbXBvcnQge1hIUkltcGx9IGZyb20gXCJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci94aHJfaW1wbFwiO1xuaW1wb3J0IHtYSFJ9IGZyb20gJ2FuZ3VsYXIyL2NvbXBpbGVyJztcblxuaW1wb3J0IHtUZXN0Q29tcG9uZW50QnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvdGVzdF9jb21wb25lbnRfYnVpbGRlcic7XG5cbmltcG9ydCB7QnJvd3NlckRldGVjdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvdXRpbHMnO1xuXG5pbXBvcnQge0VMRU1FTlRfUFJPQkVfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb25fZG9tJztcblxuaW1wb3J0IHtDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5pbXBvcnQge0xvZ30gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvdXRpbHMnO1xuXG5mdW5jdGlvbiBpbml0QnJvd3NlclRlc3RzKCkge1xuICBCcm93c2VyRG9tQWRhcHRlci5tYWtlQ3VycmVudCgpO1xuICBCcm93c2VyRGV0ZWN0aW9uLnNldHVwKCk7XG59XG5cbi8qKlxuICogRGVmYXVsdCBwbGF0Zm9ybSBwcm92aWRlcnMgZm9yIHRlc3Rpbmcgd2l0aG91dCBhIGNvbXBpbGVyLlxuICovXG5leHBvcnQgY29uc3QgVEVTVF9CUk9XU0VSX1NUQVRJQ19QTEFURk9STV9QUk9WSURFUlM6IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID1cbiAgICBDT05TVF9FWFBSKFtcbiAgICAgIFBMQVRGT1JNX0NPTU1PTl9QUk9WSURFUlMsXG4gICAgICBuZXcgUHJvdmlkZXIoUExBVEZPUk1fSU5JVElBTElaRVIsIHt1c2VWYWx1ZTogaW5pdEJyb3dzZXJUZXN0cywgbXVsdGk6IHRydWV9KVxuICAgIF0pO1xuXG5leHBvcnQgY29uc3QgQURESVRJT05BTF9URVNUX0JST1dTRVJfUFJPVklERVJTOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9XG4gICAgQ09OU1RfRVhQUihbXG4gICAgICBuZXcgUHJvdmlkZXIoQVBQX0lELCB7dXNlVmFsdWU6ICdhJ30pLFxuICAgICAgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlMsXG4gICAgICBuZXcgUHJvdmlkZXIoRGlyZWN0aXZlUmVzb2x2ZXIsIHt1c2VDbGFzczogTW9ja0RpcmVjdGl2ZVJlc29sdmVyfSksXG4gICAgICBuZXcgUHJvdmlkZXIoVmlld1Jlc29sdmVyLCB7dXNlQ2xhc3M6IE1vY2tWaWV3UmVzb2x2ZXJ9KSxcbiAgICAgIExvZyxcbiAgICAgIFRlc3RDb21wb25lbnRCdWlsZGVyLFxuICAgICAgbmV3IFByb3ZpZGVyKE5nWm9uZSwge3VzZUNsYXNzOiBNb2NrTmdab25lfSksXG4gICAgICBuZXcgUHJvdmlkZXIoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBNb2NrTG9jYXRpb25TdHJhdGVneX0pLFxuICAgICAgbmV3IFByb3ZpZGVyKEFuaW1hdGlvbkJ1aWxkZXIsIHt1c2VDbGFzczogTW9ja0FuaW1hdGlvbkJ1aWxkZXJ9KSxcbiAgICBdKTtcblxuLyoqXG4gKiBEZWZhdWx0IGFwcGxpY2F0aW9uIHByb3ZpZGVycyBmb3IgdGVzdGluZyB3aXRob3V0IGEgY29tcGlsZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBURVNUX0JST1dTRVJfU1RBVElDX0FQUExJQ0FUSU9OX1BST1ZJREVSUzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPVxuICAgIENPTlNUX0VYUFIoW1xuICAgICAgQlJPV1NFUl9BUFBfQ09NTU9OX1BST1ZJREVSUyxcbiAgICAgIG5ldyBQcm92aWRlcihYSFIsIHt1c2VDbGFzczogWEhSSW1wbH0pLFxuICAgICAgQURESVRJT05BTF9URVNUX0JST1dTRVJfUFJPVklERVJTXG4gICAgXSk7XG4iXX0=