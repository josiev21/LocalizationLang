import * as React from 'react';
import * as strings from 'GreetingWebPartStrings';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
// import { IReadonlyTheme } from '@microsoft/sp-component-base';

// import * as strings from '../greeting/GreetingWebPart';
import Greeting from './components/Greeting';
import { IGreetingProps } from './components/IGreetingProps';

export interface IGreetingWebPartProps {
  greeting: string;
}
export default class GreetingWebPart extends BaseClientSideWebPart<IGreetingWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGreetingProps > = React.createElement(
      Greeting,
      {
        greeting: this.properties.greeting
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.DisplayGroupName,
              groupFields: [
                PropertyPaneTextField('greeting', {
                  label: strings.GreetingFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}