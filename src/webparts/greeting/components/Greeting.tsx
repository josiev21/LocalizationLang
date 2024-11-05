import * as React from 'react';
import * as strings from 'GreetingWebPartStrings';
import styles from './Greeting.module.scss';
import { IGreetingProps } from './IGreetingProps';
import { escape } from '@microsoft/sp-lodash-subset';

// ...
export default class Greeting extends React.Component<IGreetingProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={styles.greeting}>
        <div className="container">
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white `}>
            <div className="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span className='ms-font-xl ms-fontColor-white'>
                Welcome to SharePoint!
              </span>
              <p className='ms-font-l ms-fontColor-white'>
                Customize SharePoint experiences using web parts.
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                {escape(this.props.greeting)}
              </p>
              <a href="https://aka.ms/spfx" className="button">
                <span className="label">{strings.LearnMoreButtonLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}