import {RegistrationController} from './registration.controller';
import {Test} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common/interfaces/nest-application.interface';
import {NestFactory} from '@nestjs/core';
import {RegistrationModule} from '../registration.module';

describe('RegistrationController', () => {
  let application: INestApplication;
  let controller: RegistrationController;

  beforeEach(() => {
    Test.createTestingModule({
      controllers: [
        RegistrationController
      ]
    });
  });

  beforeEach(() => {
    controller = Test.get(RegistrationController);
    application = NestFactory.create(RegistrationModule);
  });

  it('should be created', () => {
    expect(controller).toBeDefined();
  });

});