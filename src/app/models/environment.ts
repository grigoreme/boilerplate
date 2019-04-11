import { ConfigurationModel } from '@fusionworks/advanced-logger';

export class Environment {
  constructor(
    public production: boolean,
    public consoleSettings?: ConfigurationModel,
  ) { }
}
