import { version } from '../../package.json';
import { version as angularVersion } from '@angular/core/package.json';
import { version as angularCliVersion } from '@angular/cli/package.json';
import { version as typescriptVersion } from 'typescript/package.json';

export const environment = {
  APP_VERSION: version,
  ANGULAR_VERSION: angularVersion,
  ANGULAR_CLI_VERSION: angularCliVersion,
  TYPESCRIPT_VERSION: typescriptVersion,
};
